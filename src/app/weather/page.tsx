'use client'

import {useState} from 'react';
import WeatherForm from "@/src/components/WeatherForm";
import WeatherInfo from "@/src/components/WeatherInfo";
import {Container} from "@/src/components/Container";

const WeatherPage = () => {
    const [city, setCity] = useState<string>('');
    const [theme, setTheme] = useState<boolean>(true);

    const handleSearch = (city: string) => {
        setCity(city);
    };

    const handleSwitcher = () => {
        setTheme(!theme)
    }

    return (
        <div className={'w-container p-container m-container'}>
            <div className='flex gap-[80px]'>
                <div className='flex flex-col'>
                    <button onClick={handleSwitcher}>Switch button</button>
                    {theme ? 'light' : 'dark'}
                </div>
                <WeatherForm onSearch={handleSearch}/>
            </div>
            <div className='main-info'>
                <div className='flex gap-[65px] mb-[50px] mt-[50px]'>
                    <Container minWidth={'510px'}>
                        <div className={'flex flex-col text-center relative'}>
                            <p className={'text-[36px] font-bold text-[#3F3F3F]'}>Almaty</p>
                            <div className={'w-full gap-[2px]'}>
                                <p className={'text-[96px] font-bold text-[#3F3F3F]'}>09:03</p>
                                <span className={'absolute top-[165px] right-[65px]'}>Thursday, 31 Aug</span>
                            </div>
                        </div>
                    </Container>
                    <Container minWidth={'780px'}>

                        <p>24 C</p>
                    </Container>
                </div>
                <div className={'flex gap-[70px]'}>
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
                                Some cards
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
