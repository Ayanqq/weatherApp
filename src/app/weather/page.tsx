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
        <div className={''}>
            <div className='header'>
                <div>
                    Light Mode
                </div>
                <WeatherForm onSearch={handleSearch}/>
            </div>
            <div className='main-info'>
                <div className='flex gap-[55px] mb-[50px] mt-[50px]'>
                    <Container minWidth={'510px'}>
                        <p>Athens</p>
                        <p>09:03</p>
                        <span>Thursday, 31 Aug</span>
                    </Container>
                    <Container minWidth={'780px'}>
                        <p>24 C</p>
                    </Container>
                </div>
                <div className={'flex gap-[55px]'}>
                    <Container minWidth={'415px'}>
                        <p>5 Days Forecast:</p>
                        <ul>
                            <li>20 C</li>
                            <li>20 C</li>
                            <li>20 C</li>
                        </ul>
                    </Container>
                    <Container minWidth={'870px'}>
                        <div>
                            <ul>
                                Карточки некие
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>

            {
                city && <WeatherInfo city={city}/>
            }
        </div>
    )
};

export default WeatherPage;
