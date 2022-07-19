import React from 'react';
import { ResumeData } from '../types/ResumeData';

const Footer = ({ data }: { data: ResumeData }) => {
    const networks = !data
        ? null
        : data.social.map((network) => {
              return (
                  <li key={network.name}>
                      <a href={network.url}>
                          <i className={network.className}></i>
                      </a>
                  </li>
              );
          });

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">{networks}</ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2022 Daniel Le&apos;Sage</li>
                    </ul>
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
