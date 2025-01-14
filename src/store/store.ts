import {configureStore} from '@reduxjs/toolkit';
import {weatherApi} from "@/src/features/weatherAPI";
import {weatherSlice} from "@/src/features/weatherSlice";

export const store = configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        [weatherSlice.reducerPath]: weatherSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export type AppStore = typeof store

export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>;

