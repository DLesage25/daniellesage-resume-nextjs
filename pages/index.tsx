import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import $ from 'jquery';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
    const [appData, setAppData] = useState();

    useEffect(() => {
        const getResumeData = () => {
            $.ajax({
                url: '/resumeData.json',
                dataType: 'json',
                cache: false,
                success: (data) => {
                    setAppData(data);
                },
                error: (xhr, status, err) => {
                    console.log(err);
                    alert(err);
                },
            });
        };

        getResumeData();
    }, [setAppData]);

    if (!appData) return null;

    const { main, resume, testimonials } = appData;

    return (
        <>
            <div className="App">
                <Header data={main} />
                <About data={main} />
                <Resume data={resume} />
                <Testimonials data={testimonials} />
                {/* <Contact data={main} /> */}
                <Footer data={main} />
            </div>
        </>
    );
};

export default Home;
