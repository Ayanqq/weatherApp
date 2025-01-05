import {Container} from "@/src/components/Container";
import {useGetWeatherQuery} from "@/src/features/weatherAPI";

type CardCityType = {
    city: string
}

export const CardCity = ({city}: CardCityType) => {
    const {data} = useGetWeatherQuery(city);

    console.log(data)

    return (
        <Container minWidth={'510px'}>
            <div className={'flex flex-col text-center relative'}>
                <span className={'text-[36px] font-bold text-[#3F3F3F]'}>{data?.name}</span>
                <div className={'w-full gap-[2px]'}>
                    <span className={'text-[96px] font-bold text-[#3F3F3F]'}>09:03</span>
                    <span className={'absolute top-[165px] right-[65px]'}>Thursday, 31 Aug</span>
                </div>
            </div>
        </Container>
    );
};