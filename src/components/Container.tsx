import {ReactNode} from "react";

type ContainerType = {
    children: ReactNode
    minWidth?: string
}

export const Container = ({children, minWidth}: ContainerType) => {
    return (
        <div style={{minWidth}} className={`flex items-center justify-center bg-customGrey h-[330px] rounded-[30px]`}>
            {children}
        </div>
    );
};