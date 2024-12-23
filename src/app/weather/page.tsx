'use client'

import {useState} from 'react';
import WeatherForm from "@/src/components/WeatherForm";
import WeatherInfo from "@/src/components/WeatherInfo";
import {Container} from "@/src/components/Container";

const WeatherPage = () => {
    const [city, setCity] = useState<string>('');

    const handleSearch = (city: string) => {
        setCity(city);
    };

    return (
        <div className={'weather-page'}>
            <div className='header'>
                <div>
                    Light Mode
                </div>
                <WeatherForm onSearch={handleSearch}/>
            </div>
            <div className='main-info'>
                <div className='first-line-weather'>
                    <Container>
                        <p>Athens</p>
                        <p>09:03</p>
                        <span>Thursday, 31 Aug</span>
                    </Container>
                    <Container>
                        <p>24 C</p>
                    </Container>
                </div>
                <div className={'second-line-weather'}>
                    <Container>
                        <p>5 Days Forecast:</p>
                        <ul>
                            <li>20 C</li>
                            <li>20 C</li>
                            <li>20 C</li>
                        </ul>
                    </Container>
                    <div className={'hourly-forecast'}>

                    </div>
                </div>
            </div>

            {city && <WeatherInfo city={city}/>}
        </div>
    );
};

export default WeatherPage;
