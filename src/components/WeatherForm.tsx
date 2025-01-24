import {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {setCity} from "@/src/features/weatherSlice";


const WeatherForm = () => {

    // const localCity = useSelector(currentCity)
    const [localCity, setLocalCity] = useState<string>("");
    const dispatch = useDispatch();

    console.log('Local city from redux', localCity)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalCity(e.currentTarget.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setCity(localCity))
        localStorage.setItem('city', localCity);
    };

    return (
        <form onSubmit={handleSubmit} className={'flex'}>
            <input
                type="text"
                value={localCity}
                onChange={onChangeHandler}
                placeholder="Введите название города"
                className={'w-full gap-[2px]'}
            />
            <button type="submit">Поиск</button>
        </form>
    );
};

export default WeatherForm;
