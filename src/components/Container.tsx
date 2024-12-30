import {ReactNode} from "react";

type ContainerType = {
    children: ReactNode
    minWidth?: string
}

export const Container = ({children, minWidth}: ContainerType) => {
    return (
        <div style={{minWidth}} className={`bg-customGrey min-h-[330px] rounded-[30px] drop-shadow-custom`}>
            {children}
        </div>
    );
};