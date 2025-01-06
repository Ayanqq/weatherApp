import {FormEvent, useState} from 'react';

type WeatherFormProps = {
    onSearch: (city: string) => void;
}

const WeatherForm = ({onSearch}: WeatherFormProps) => {
    const [city, setCity] = useState('');
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(city);
        localStorage.setItem('city', city);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Введите название города"
            />
            <button type="submit">Поиск</button>
        </form>
    );
};

export default WeatherForm;
