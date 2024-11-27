import { useRouter } from 'next/router';
import WeatherInfo from '../../components/WeatherInfo';

const CityWeatherPage = () => {
    const router = useRouter();
    const { city } = router.query;

    if (typeof city !== 'string') {
        return null;
    }

    return (
        <div>
            <h1>Weather in {city}</h1>
            <WeatherInfo city={city} />
        </div>
    );
};

export default CityWeatherPage;
