'use client'

import {useState} from 'react';
import WeatherForm from "@/src/components/WeatherForm";
import WeatherInfo from "@/src/components/WeatherInfo";

const WeatherPage = () => {
    const [city, setCity] = useState<string>('');

    const handleSearch = (city: string) => {
        setCity(city);
    };

    return (
        <div className='d-flex bg-fuchsia-700'>
            <h1>Weather App</h1>
            <WeatherForm onSearch={handleSearch}/>
            {city && <WeatherInfo city={city}/>}
        </div>
    );
};

export default WeatherPage;
