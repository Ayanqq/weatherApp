'use client'

import {useState} from 'react';
import WeatherForm from "@/src/components/WeatherForm";
import {DaysForecast} from "@/src/components/DaysForecast";
import {HourlyForecast} from "@/src/components/HourlyForecast";
import {CardCity} from "@/src/components/CardCity";
import {WeatherInfo} from "@/src/components/WeatherInfo";

const WeatherPage = () => {
    // const [city, setCity] = useState<string>('');
    const [theme, setTheme] = useState<boolean>(true);


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
                <WeatherForm/>
            </div>
            <div className='main-info'>
                <div className='flex gap-[65px] mb-[50px] mt-[50px]'>
                    <CardCity />
                    <WeatherInfo/>
                </div>
                <div className={'flex gap-[70px]'}>
                    <DaysForecast/>
                    <HourlyForecast/>
                </div>
            </div>
            {/*{*/}
            {/*    city && <WeatherInfo city={city}/>*/}
            {/*}*/}
        </div>
    )
};

export default WeatherPage;
