import React from 'react';
import { Resume } from '../types/ResumeData';

const Resume = ({ data }: { data: Resume }) => {
    const { skillmessage, education, work, skills } = data || {};
    const educationObjs = !education
        ? null
        : education.map((education) => {
              return (
                  <div key={education.school}>
                      <h3>{education.school}</h3>
                      <p className="info">
                          {education.degree} <span>&bull;</span>
                          <em className="date">{education.graduated}</em>
                      </p>
                      <p>{education.description}</p>
                  </div>
              );
          });
    var workObjs = !work
        ? null
        : work.map((work) => {
              return (
                  <div key={work.company + Math.random()}>
                      <h3>{work.title}</h3>
                      <p className="info">
                          {work.company}
                          <span>&bull;</span>{' '}
                          <em className="date">{work.years}</em>
                      </p>
                      <p>{work.description}</p>
                  </div>
              );
          });
    var skillsObjs = !skills
        ? null
        : skills.map((skills) => {
              var className = 'bar-expand ' + skills.name.toLowerCase();
              return (
                  <li key={skills.name}>
                      <span
                          style={{ width: skills.level }}
                          className={className}
                      ></span>
                      <em>{skills.name}</em>
                  </li>
              );
          });

    return (
        <section id="resume">
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">{workObjs}</div>
            </div>

            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{educationObjs}</div>
                    </div>
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillmessage}</p>

                    <div className="bars">
                        <ul className="skills">{skillsObjs}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
