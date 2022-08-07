import Image from 'next/image';
import React, { useState } from 'react';
import useSWR from 'swr';
import { ResumeData } from '../types/ResumeData';

const Contact = ({ data }: { data: ResumeData }) => {
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const { name, address, email, contactMessage } = data || {};
    const { city, state } = address || {};

    const onChange = (handler: (val: string) => void) => (e: any) => {
        handler(e.target.value);
    };

    const handleFormsubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const data = {
            requester: formName,
            requesterEmail: formEmail,
            message: formMessage,
        };

        const response = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                body: JSON.stringify(data),
            },
        });

        const result = await response.json();

        console.log({ result });
    };

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div className="ten columns">
                    <h3 className="lead">{contactMessage}</h3>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form
                        action=""
                        method="post"
                        id="contactForm"
                        name="contactForm"
                    >
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formName}
                                    onChange={onChange(setFormName)}
                                    size={35}
                                    id="contactName"
                                    name="contactName"
                                />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formEmail}
                                    onChange={onChange(setFormEmail)}
                                    size={35}
                                    id="contactEmail"
                                    name="contactEmail"
                                />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    cols={50}
                                    rows={1}
                                    value={formMessage}
                                    onChange={onChange(setFormMessage)}
                                    id="contactMessage"
                                    name="contactMessage"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    className="submit"
                                    onClick={handleFormsubmit}
                                >
                                    Submit
                                </button>
                                <span id="image-loader">
                                    <Image
                                        alt=""
                                        src="/images/loader.gif"
                                        layout="fill"
                                    />
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent,
                        thank you!
                        <br />
                    </div>
                </div>

                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Contact</h4>
                        <p className="address">
                            {name}
                            <br />
                            {city}, {state}
                            <br />
                            <span>{email}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Contact;
