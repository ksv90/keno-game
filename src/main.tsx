import { StateMachine } from '@ksv90/fsm';
import { KenoApp, KenoGui, KenoRules } from '@ksv90/game-ui/keno';
import { ConnectorMock, createRoundMachineConfig, MessengerMock, ServerMock } from '@ksv90/game-ui/mock';
import { Centrifuge } from 'centrifuge';
import { createRoot } from 'react-dom/client';

import { Connector, Keno } from './game';

const ROOT_ID = 'root';

const { PROD, VITE_SERVER_URL, VITE_CENTRIFUGO_URL, VITE_MODE } = import.meta.env;

const $root = document.getElementById(ROOT_ID);

if (!$root) {
  throw new Error(`Не найдено элемента с id ${ROOT_ID}`);
}

const params = new URLSearchParams(globalThis.location.search);

const token = params.get('token');

const keno = new Keno();

const gui = <KenoGui />;
const rules = <KenoRules />;

if (PROD || VITE_MODE === 'prod') {
  if (!VITE_SERVER_URL || !VITE_CENTRIFUGO_URL) {
    throw new Error('Необходимо установить переменные VITE_SERVER_URL и VITE_CENTRIFUGO_URL');
  }

  if (!token) {
    throw new Error('Параметры URL должны содержать токен');
  }

  const keno = new Keno();
  const connector = new Connector({ serverUrl: VITE_SERVER_URL, token });
  const centrifuge = new Centrifuge(`${VITE_CENTRIFUGO_URL}/connection/websocket`, { token });

  createRoot($root).render(<KenoApp game={keno} connector={connector} receiver={centrifuge} ui={gui} rules={rules} />);
} else {
  const payouts = {
    '1': [0, 1.5],
    '2': [0, 0, 5],
    '3': [0, 0, 1, 11],
    '4': [0, 0, 0, 2, 20],
    '5': [0, 0, 0, 1, 4, 50],
    '6': [0, 0, 0, 0, 2, 20, 200],
    '7': [0, 0, 0, 0, 1, 4, 40, 600],
    '8': [0, 0, 0, 0, 1, 2, 10, 100, 2000],
    '9': [0, 0, 0, 0, 0, 1, 5, 50, 400, 7000],
    '10': [0, 0, 0, 0, 0, 1, 2, 10, 140, 1400, 20000],
  };

  const serverMock = new ServerMock(payouts);
  const messengerMock = new MessengerMock();
  const connectorMock = new ConnectorMock(messengerMock, serverMock);
  const roundMachine = new StateMachine(createRoundMachineConfig(messengerMock, serverMock));

  createRoot($root).render(<KenoApp game={keno} connector={connectorMock} receiver={messengerMock} ui={gui} rules={rules} />);

  roundMachine.start();
}
