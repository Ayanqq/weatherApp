import {useGetWeatherQuery} from "@/src/features/weatherAPI";

interface WeatherInfoProps {
    city: string;
}

const WeatherInfo = ({city}: WeatherInfoProps) => {
    const {data, error, isLoading} = useGetWeatherQuery(city);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {(error as Error).message}</p>;
    if (!data) return null;

    return (
        <div>
            <h2>Погода в {data.name}</h2>
            <p>Температура: {data.main.temp}°C</p>
            <p>Влажность: {data.main.humidity}%</p>
            <p>Скорость ветра: {data.wind.speed} м/с</p>
        </div>
    );
};

export default WeatherInfo;
