import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducer from './shop/shop.reducer';
import shopSaga from './shop/shop.saga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, logger];
export default configureStore({
    reducer,
    middleware: [logger, sagaMiddleware],
  });
  sagaMiddleware.run(shopSaga);