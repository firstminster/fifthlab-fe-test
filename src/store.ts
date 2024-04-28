import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import {
    // persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { userReducer } from './features/user';



// const persistConfig = {
//     key: "root",
//     storage,
// };

const rootReducer = combineReducers({
    user: userReducer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store: any = configureStore({
    reducer: rootReducer
    ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// export const persistor = persistStore(store);

// create types for state and dispatch
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


