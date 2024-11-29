// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
console.log('API-KEY:', API_KEY)

type WeatherType = {
    name:string;
    main: {
        temp:string;
        humidity:string
    }
    wind: {
        speed:string;
    }
}

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherType, string>({
            query: (city) => `weather?q=${city}&appid=${API_KEY}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherQuery } = weatherApi
