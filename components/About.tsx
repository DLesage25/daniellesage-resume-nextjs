import Image from 'next/image';
import React from 'react';

const About = ({ data }: any) => {
    const { name, image, bio, email } = data || {};

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <Image
                        className="profile-pic"
                        src={'/images/' + image}
                        alt="Tim Baker Profile Pic"
                        layout="responsive"
                        height={350}
                        width={350}
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Let&apos;s Talk</h2>
                            <p className="address">
                                <span>{name}</span>
                                <br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a
                                    href="/Daniel Lesage Resume.pdf"
                                    download
                                    className="button"
                                >
                                    <i className="fa fa-download"></i>Download
                                    Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
