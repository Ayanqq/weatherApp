'use client'

import {useState} from 'react';
import WeatherForm from "@/src/components/WeatherForm";
import WeatherInfo from "@/src/components/WeatherInfo";
import {Container} from "@/src/components/Container";
import Image from "next/image";
import Sun from './../assets/day-data/clear 1.png'
import Sunrise from './../assets/day-data/sunrise-white 1.png'
import Sunset from './../assets/day-data/sunset-white 1.png'
import Wind from './../assets/day-data/wind 1.png'
import Humidity from './../assets/day-data/humidity 1.png'
import Pressure from './../assets/day-data/pressure-white 1.png'
import UVIndex from './../assets/day-data/uv-white 1.png'
import {DaysForecast} from "@/src/components/DaysForecast";
import {HourlyForecast} from "@/src/components/HourlyForecast";

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
                            <span className={'text-[36px] font-bold text-[#3F3F3F]'}>Almaty</span>
                            <div className={'w-full gap-[2px]'}>
                                <span className={'text-[96px] font-bold text-[#3F3F3F]'}>09:03</span>
                                <span className={'absolute top-[165px] right-[65px]'}>Thursday, 31 Aug</span>
                            </div>
                        </div>
                    </Container>
                    <Container minWidth={'780px'}>
                        <div className={'flex justify-between px-[25px]'}>
                            <div className={'flex flex-col gap-[25px]'}>
                                <div className={'flex flex-col justify-center'}>
                                    <span className={'font-bold text-[80px]'}>24°C</span>
                                    <span>Feels like: <span className={'text-[32px] font-medium'}>22°C</span></span>
                                </div>
                                <div className={'flex flex-col gap-[10px]'}>
                                    <div className={'flex'}>
                                        <Image src={Sunrise} alt={'sunrise-icon'}/>
                                        <div className={'flex flex-col text-left ml-[10px]'}>
                                            <span>Sunrise</span>
                                            <span>06:37 AM</span>
                                        </div>
                                    </div>
                                    <div className={'flex'}>
                                        <Image src={Sunset} alt={'sunset-icon'}/>
                                        <div className={'flex flex-col text-left ml-[10px]'}>
                                            <span>Sunset</span>
                                            <span>06:37 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col items-center'}>
                                <Image src={Sun} alt={'sun'}/>
                                <p>Sunny</p>
                            </div>
                            <div className={'max-w-md mx-auto flex flex-wrap justify-center gap-[5px]'}>
                                <div className={'flex flex-col items-center text-center w-[calc(50%-10px)]'}>
                                    <Image src={Humidity} alt={'humidity'}/>
                                    <span>42%</span>
                                    <span>Humidity</span>
                                </div>
                                <div className={'flex flex-col items-center text-center w-[calc(50%-10px)]'}>
                                    <Image src={Wind} alt={'wind'}/>
                                    <span>2km/h</span>
                                    <span>Wind Speed</span>
                                </div>
                                <div className={'flex flex-col items-center text-center w-[calc(50%-10px)]'}>
                                    <Image src={Pressure} alt={'pressure'}/>
                                    <span>997hPa</span>
                                    <span>Pressure</span>
                                </div>
                                <div className={'flex flex-col items-center text-center w-[calc(50%-10px)]'}>
                                    <Image src={UVIndex} alt={'uvIndex'}/>
                                    <span>8</span>
                                    <span>UV</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={'flex gap-[70px]'}>
                    <DaysForecast/>
                    <HourlyForecast/>
                </div>
            </div>
            {
                city && <WeatherInfo city={city}/>
            }
        </div>
    )
};

export default WeatherPage;
