import {ReactNode} from "react";

type ContainerType = {
    children: ReactNode
}

export const Container = ({children}: ContainerType) => {
    return (
        <div className={'flex items-center justify-center w-full bg-customGrey'}>
            {children}
        </div>
    );
};