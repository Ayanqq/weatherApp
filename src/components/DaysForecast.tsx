import {Container} from "@/src/components/Container";
import Image from "next/image";
import Cloud1 from './../../src/app/assets/day-forecast/clouds 1.png'
import Mist1 from './../../src/app/assets/day-forecast/mist 1.png'
import Clear from './../../src/app/assets/day-forecast/clear 2.png'
import Drizzle from './../../src/app/assets/day-forecast/drizzle 1.png'
import Snow from './../../src/app/assets/day-forecast/rain 1.png'


export const DaysForecast = () => {
    return (
        <Container minWidth={'415px'}>
            <div className={'flex flex-col px-[20px]'}>
                <h3 className={'font-bold text-[32px] text-center'}>5 Days Forecast:</h3>
                <div className={'flex justify-between items-center'}>
                    <Image src={Cloud1} alt={''}/>
                    <span>
                    20 C
                </span>
                    <span>Friday, 1 Sep</span>
                </div>
                <div className={'flex justify-between items-center'}>
                    <Image src={Mist1} alt={''}/>
                    <span>
                    20 C
                </span>
                    <span>Friday, 1 Sep</span>
                </div>
                <div className={'flex justify-between items-center'}>
                    <Image src={Clear} alt={''}/>
                    <span>
                    20 C
                </span>
                    <span>Friday, 1 Sep</span>
                </div>
                <div className={'flex justify-between items-center'}>
                    <Image src={Drizzle} alt={''}/>
                    <span>
                    20 C
                </span>
                    <span>Friday, 1 Sep</span>
                </div>
                <div className={'flex justify-between items-center'}>
                    <Image src={Snow} alt={''}/>
                    <span>
                    20 C
                </span>
                    <span>Friday, 1 Sep</span>
                </div>
            </div>
        </Container>
    )
        ;
};