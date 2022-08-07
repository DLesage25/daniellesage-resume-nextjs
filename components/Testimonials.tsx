import React from 'react';
import { Testimonial } from '../types/ResumeData';

const Testimonials = ({ data }: { data: Testimonial[] }) => {
    var testimonials = !data
        ? null
        : data.map((testimonials) => {
              return (
                  <li key={testimonials.user + Math.random()}>
                      <blockquote>
                          <p>{testimonials.text}</p>
                          <p>{testimonials.user}</p>
                      </blockquote>
                  </li>
              );
          });

    return (
        <section id="testimonials">
            <div className="text-container">
                <div className="row">
                    <div className="ten columns flex-container">
                        <ul className="slides">{testimonials}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
