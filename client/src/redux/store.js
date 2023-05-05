import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducers from './reducers/cart';
import userReducers from './reducers/user';
import productReducers from './reducers/product';
import orderReducers from './reducers/order';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'client', version: 1, storage };
const rootReducer = combineReducers({
    user: userReducers,
    product: productReducers,
    order: orderReducers,
    cart: cartReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);