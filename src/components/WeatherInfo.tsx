import {useGetWeatherQuery} from "@/src/features/weatherAPI";

interface WeatherInfoProps {
    city: string;
}

const WeatherInfo = ({city}: WeatherInfoProps) => {
    const {data, error, isLoading} = useGetWeatherQuery(city);
    const kelvin = 273.15
    let tempToCelsius = null;

    if (error) return <p>Ошибка: {(error as Error).message}</p>;

    if (!data) {
        return null
    } else {
        tempToCelsius = (Number(data.main.temp) - kelvin).toFixed(1);
    }


    return (
        <div>
            {isLoading && <p>Загрузка...</p>}
            <h2>Погода в {data.name}</h2>
            <p>Температура: {tempToCelsius}°C</p>
            <p>Влажность: {data.main.humidity}%</p>
            <p>Скорость ветра: {data.wind.speed} м/с</p>
        </div>
    );
};

export default WeatherInfo