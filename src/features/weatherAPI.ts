import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

type WeatherType = {
    name: string;
    main: {
        temp: string;
        humidity: string
    }
    wind: {
        speed: string;
    }
    dt: number;
    timezone: number;
}

export const weatherApi = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherType, string>({
            query: (city) => `weather?q=${city}&appid=${API_KEY}`,
        }),
    }),
})

export const {useGetWeatherQuery} = weatherApi
