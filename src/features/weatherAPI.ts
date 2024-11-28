// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '6beda4838f1980561fc6fbaba7a10f3c'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
        getWeather: builder.query<any, string>({
            query: (city) => `weather?q=${city}&appid=${API_KEY}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherQuery } = weatherApi
