// src/components/ClientProvider.tsx
'use client';

import {Provider} from 'react-redux';
import {store} from "@/src/store/store";
import {ReactNode} from "react";

interface ClientProviderProps {
    children: ReactNode;
}

const ClientProvider = ({children}:ClientProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
