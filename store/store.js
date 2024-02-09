// store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import authReducer from './authreducer/authreducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
