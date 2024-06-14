import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import App from './App';
import { MantineProvider, createTheme, Text, DEFAULT_THEME  } from "@mantine/core";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <BrowserRouter><App />
    </BrowserRouter>
    </MantineProvider>
    </Provider>
);
