import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { AppContextProvider } from '../context/appContext';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <>
            <AppContextProvider>
                <Component {...pageProps} />{' '}
            </AppContextProvider>
        </>
    );
}

export default MyApp;
