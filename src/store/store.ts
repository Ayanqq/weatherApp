import {configureStore} from '@reduxjs/toolkit';
import {weatherApi} from "@/src/features/weatherAPI";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export type AppStore = typeof store

export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>;

