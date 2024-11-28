// src/components/ClientProvider.tsx
'use client';

import { Provider } from 'react-redux';
import {store} from "@/src/store/store";

const ClientProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
