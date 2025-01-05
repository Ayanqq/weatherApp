import {Container} from "@/src/components/Container";
import Image from "next/image";
import Sunrise from "@/src/app/assets/day-data/sunrise-white 1.png";
import Sunset from "@/src/app/assets/day-data/sunset-white 1.png";
import Sun from "@/src/app/assets/day-data/clear 1.png";
import Humidity from "@/src/app/assets/day-data/humidity 1.png";
import Wind from "@/src/app/assets/day-data/wind 1.png";
import Pressure from "@/src/app/assets/day-data/pressure-white 1.png";
import UVIndex from "@/src/app/assets/day-data/uv-white 1.png";

export const WeatherInfo = () => {
    return (
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
    )
        ;
};