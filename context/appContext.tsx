import React, { createContext, useContext, useState } from 'react';

const Context = createContext({} as any);

export function AppContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [appData, setAppData] = useState({
        selectedPage: 'Dashboard',
    });

    return (
        <Context.Provider value={{ appData, setAppData }}>
            {children}
        </Context.Provider>
    );
}

export function useAppContext() {
    const { appData, setAppData } = useContext(Context);
    return { appData, setAppData };
}
