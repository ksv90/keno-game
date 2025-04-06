import { KenoApp, KenoGui, KenoRules } from '@ksv90/game-ui/keno';
import { Centrifuge } from 'centrifuge';
import { createRoot } from 'react-dom/client';

import { Connector, Keno } from './game/';

const ROOT_ID = 'root';

const { VITE_SERVER_URL, VITE_CENTRIFUGO_URL } = import.meta.env;

const $root = document.getElementById(ROOT_ID);

const params = new URLSearchParams(globalThis.location.search);

const token = params.get('token');

if (!$root) {
  throw new Error(`Не найдено элемента с id ${ROOT_ID}`);
}

if (!token) {
  throw new Error('Параметры URL должны содержать токен');
}

const keno = new Keno();
const connector = new Connector({ serverUrl: VITE_SERVER_URL, token });
const centrifuge = new Centrifuge(`${VITE_CENTRIFUGO_URL}/connection/websocket`, { token });

const gui = <KenoGui />;
const rules = <KenoRules />;

createRoot($root).render(<KenoApp game={keno} connector={connector} centrifuge={centrifuge} ui={gui} rules={rules} />);
