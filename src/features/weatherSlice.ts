import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type WeatherState = {
    city: string;
}

const initialState: WeatherState = {
    city: ''
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload
        }
    },
    selectors: {
        currentCity: state => state.city
    }
})

export const {setCity} = weatherSlice.actions;

export const {currentCity} = weatherSlice.selectors