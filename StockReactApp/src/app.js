import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore'
import StockApp from './components/StockApp'
import "regenerator-runtime/runtime";
const {store, persistor} =configureStore;
const WrappedRoot = () => (
    <Provider store={store}>        
        <PersistGate loading={null} persistor={persistor}>
            <StockApp/>
        </PersistGate>
    </Provider>
);
ReactDOM.render(<WrappedRoot/>,document.getElementById('app'));