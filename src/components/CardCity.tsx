import {Container} from "@/src/components/Container";
import {useGetWeatherQuery} from "@/src/features/weatherAPI";
import {useSelector} from "react-redux";
import {currentCity} from "@/src/features/weatherSlice";
import {formatTime} from "@/src/utils/timeUtils";

// type CardCityType = {
//     city: string
// }

export const CardCity = () => {
    const city = useSelector(currentCity)

    const {data} = useGetWeatherQuery(city);
    const localTimezoneOffset = new Date().getTimezoneOffset() * 60
    const localCityName = localStorage.getItem("cached name")
    const localCityTime = localStorage.getItem("cached time")
    const localCityDate = localStorage.getItem("cached date")
    let totalTime = null
    let totalDate = null

    if (data) {
        const timestamp = data.dt;
        const timezoneOffset = data.timezone;
        const localTime = new Date((timestamp + timezoneOffset + localTimezoneOffset) * 1000)


        totalTime = formatTime(localTime)

        totalDate = localTime.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        })

        localStorage.setItem("cached time", totalTime);
        localStorage.setItem("cached date", totalDate);
    }


    return (
        <Container minWidth={'510px'}>
            <div className={'flex flex-col text-center relative'}>
                <span className={'text-[36px] font-bold text-[#3F3F3F]'}>{localCityName}</span>
                <div className={'w-full gap-[2px]'}>
                    <span className={'text-[96px] font-bold text-[#3F3F3F]'}>{localCityTime}</span>
                    <span className={'absolute top-[165px] right-[65px]'}>{localCityDate}</span>
                </div>
            </div>
        </Container>
    );
};