import { KenoApp, KenoConnector, KenoGui, KenoPreview, KenoReceiver, KenoRules } from '@game-ui/keno';
import { createRoot } from 'react-dom/client';

import { Keno } from './game';

const $root = document.getElementById('root');

if (!$root) {
  throw new Error(`Корневой элемент не найден`);
}

const params = new URLSearchParams(globalThis.location.search);

if (import.meta.env.PUBLIC_MODE !== 'prod') {
  createRoot($root).render(<KenoPreview />);
} else {
  const token = params.get('token');

  if (!token) {
    throw new Error('Параметры URL должны содержать токен');
  }

  const keno = new Keno();
  const connector = new KenoConnector({ serverUrl: import.meta.env.PUBLIC_SERVER_URL, token });
  const centrifuge = new KenoReceiver(`${import.meta.env.PUBLIC_CENTRIFUGO_URL}/connection/websocket`, { token });

  const gui = <KenoGui />;
  const rules = <KenoRules />;

  createRoot($root).render(<KenoApp game={keno} connector={connector} receiver={centrifuge} ui={gui} rules={rules} />);
}
