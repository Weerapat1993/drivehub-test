import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { theme } from './config/antd';
import { client } from './config/apollo'
import { router } from './config/react-router-dom';
import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import './styles/globalStyles.css'

const App = () => (
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ConfigProvider theme={theme}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </ReduxProvider>
    </React.StrictMode>
  </ApolloProvider>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
