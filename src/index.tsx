import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as mobx from 'mobx';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import styled from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import { defaultStores } from './stores/util';

// enable MobX strict mode
useStrict(true);

const stores = defaultStores;

window['mobx'] = mobx;

window['stores'] = stores;

const RootDiv = styled.div`
  height: 100%;
`;

const renderDevTool = () => {
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('mobx-react-devtools').default;
    return <DevTools />;
  }
  return undefined; //dummy
};

ReactDOM.render(
  <Provider {...stores}>
    <RootDiv>
      <App />
      {/*{renderDevTool()}*/}
    </RootDiv>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
