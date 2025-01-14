import {FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentCity, setCity} from "@/src/features/weatherSlice";

// type WeatherFormProps = {
//     onSearch: (city: string) => void;
// }

const WeatherForm = () => {

    const localCity = useSelector(currentCity)
    const dispatch = useDispatch();

    console.log('Local city from redux',localCity)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setCity(localCity))
        // onSearch(localCity);
        localStorage.setItem('city', localCity);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={localCity}
                onChange={(e) => dispatch(setCity(e.target.value))}
                placeholder="Введите название города"
            />
            <button type="submit">Поиск</button>
        </form>
    );
};

export default WeatherForm;
