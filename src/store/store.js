import { configureStore } from '@reduxjs/toolkit';
import { persisteContactReducer } from './contacts-slice';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    contacts: persisteContactReducer,
  },

  middleware,
});

export const persistor = persistStore(store);
