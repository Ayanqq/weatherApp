import {Container} from "@/src/components/Container";
import {useGetWeatherQuery} from "@/src/features/weatherAPI";

type CardCityType = {
    city: string
}

export const CardCity = ({city}: CardCityType) => {
    const {data} = useGetWeatherQuery(city);
    const localCity = localStorage.getItem('city');
    const localTimezoneOffset = new Date().getTimezoneOffset() * 60
    let totalTime = null

    if (data) {
        const timestamp = data.dt;  // Unix timestamp
        const timezoneOffset = data.timezone;  // Смещение для города

        // Если смещение города совпадает с локальным, то не добавляем смещение
        const isSameTimezone = timezoneOffset === localTimezoneOffset;

        const localTime = isSameTimezone
            ? new Date(timestamp * 1000)  // Просто без изменений
            : new Date((timestamp + timezoneOffset) * 1000);  // Применяем смещение

        const formattedTime = localTime.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });

        totalTime = formattedTime; // Покажет правильное время в зависимости от часового пояса
    }


    return (
        <Container minWidth={'510px'}>
            <div className={'flex flex-col text-center relative'}>
                <span className={'text-[36px] font-bold text-[#3F3F3F]'}>{localCity}</span>
                <div className={'w-full gap-[2px]'}>
                    <span className={'text-[96px] font-bold text-[#3F3F3F]'}>{totalTime}</span>
                    <span className={'absolute top-[165px] right-[65px]'}>Thursday, 31 Aug</span>
                </div>
            </div>
        </Container>
    );
};