import {Container} from "@/src/components/Container";
import Image from "next/image";
import SunIcon from '../app/assets/day-data/clear 1.png'
import NavigateIcon from './../app/assets/day-data/navigation 1.png'
import Cloud1 from './../../src/app/assets/day-forecast/clouds 1.png'


export const HourlyForecast = () => {
    return (
        <Container minWidth={'870px'}>
            <div className={'px-[80px]'}>
                <h3 className={'font-bold text-[32px] text-center'}>Hourly forecast:</h3>
                <div className={'flex justify-between mt-[20px]'}>
                    <div
                        className={'flex flex-col w-[130px] py-[15px] items-center rounded-[40px] bg-custom-gradient-hours-day'}>
                        <span className={'font-bold text-[24px]'}>12:00</span>
                        <Image className={'w-[80px]'} src={SunIcon} alt={'sun-icon'}/>
                        <span className={'font-bold text-[24px]'}>26 C</span>
                        <Image src={NavigateIcon} alt={'Navigate'}/>
                        <span className={'font-bold text-[24px]'}>3 km/h</span>
                    </div>
                    <div
                        className={'flex flex-col w-[130px] py-[15px] items-center rounded-[40px] bg-custom-gradient-hours-day'}>
                        <span className={'font-bold text-[24px]'}>15:00</span>
                        <Image className={'w-[80px]'} src={Cloud1} alt={'sun-icon'}/>
                        <span className={'font-bold text-[24px]'}>27 C</span>
                        <Image src={NavigateIcon} alt={'Navigate'}/>
                        <span className={'font-bold text-[24px]'}>2 km/h</span>
                    </div>
                    <div
                        className={'flex flex-col w-[130px] py-[15px] items-center rounded-[40px] bg-custom-gradient-hours-day'}>
                        <span className={'font-bold text-[24px]'}>18:00</span>
                        <Image className={'w-[80px]'} src={SunIcon} alt={'sun-icon'}/>
                        <span className={'font-bold text-[24px]'}>27 C</span>
                        <Image src={NavigateIcon} alt={'Navigate'}/>
                        <span className={'font-bold text-[24px]'}>2 km/h</span>
                    </div>
                    <div
                        className={'flex flex-col w-[130px] py-[15px] items-center rounded-[40px] bg-custom-gradient-hours-night'}>
                        <span className={'font-bold text-[24px]'}>21:00</span>
                        <Image className={'w-[80px]'} src={SunIcon} alt={'sun-icon'}/>
                        <span className={'font-bold text-[24px]'}>25 C</span>
                        <Image src={NavigateIcon} alt={'Navigate'}/>
                        <span className={'font-bold text-[24px]'}>3 km/h</span>
                    </div>
                    <div
                        className={'flex flex-col w-[130px] py-[15px] items-center rounded-[40px] bg-custom-gradient-hours-night'}>
                        <span className={'font-bold text-[24px]'}>00:00</span>
                        <Image className={'w-[80px]'} src={SunIcon} alt={'sun-icon'}/>
                        <span className={'font-bold text-[24px]'}>22 C</span>
                        <Image src={NavigateIcon} alt={'Navigate'}/>
                        <span className={'font-bold text-[24px]'}>3 km/h</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};