import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from '@epam/uui';

import App from './components/App/App';
import './main.scss';
import svc from './services';

import '@epam/uui-components/styles.css';
import '@epam/loveship/styles.css';

const TodoApp = () => (
  <ContextProvider
    apiDefinition={() => null}
    loadAppContext={() => Promise.resolve({})}
    onInitCompleted={(context) => { Object.assign(svc, context); }}
  >
    <App />
  </ContextProvider>
);

ReactDOM.render(<TodoApp />, document.getElementById('root'));
