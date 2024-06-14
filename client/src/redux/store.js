import { configureStore } from '@reduxjs/toolkit';
import reducer from './root-reducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
    const persistConfig = {
      key: 'root',
      storage,
    }
      const persistedReducer = persistReducer(persistConfig, reducer);
      const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: ['persist/PERSIST'],
              ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
              ignoredPaths: ['items.dates'],
            },
          })
      })
      persistStore(store);
  export default store;