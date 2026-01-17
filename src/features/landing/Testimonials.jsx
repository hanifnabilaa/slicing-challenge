import React from 'react';
import SectionHead from './components/SectionHead';

const Testimonials = () => {
    return (
        <section className="section section--alt" id="testimonials">
            <div className="container">
                <SectionHead title="Loved by learners" subtitle="Great for practicing props, lists, and layout." />

                <div className="grid grid--3">
                    <article className="testimonial">
                        <p className="testimonial__text">
                            “I finally understood how to split a page into components without overthinking.”
                        </p>
                        <div className="testimonial__meta">
                            <span className="avatar avatar--a" aria-hidden="true"></span>
                            <div>
                                <div className="testimonial__name">Alya</div>
                                <div className="testimonial__role">Frontend student</div>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial">
                        <p className="testimonial__text">
                            “The section layout is clean and the cards are perfect for reuse.”
                        </p>
                        <div className="testimonial__meta">
                            <span className="avatar avatar--c" aria-hidden="true"></span>
                            <div>
                                <div className="testimonial__name">Bima</div>
                                <div className="testimonial__role">Bootcamp participant</div>
                            </div>
                        </div>
                    </article>

                    <article className="testimonial">
                        <p className="testimonial__text">
                            “Easy to theme. I swapped colors and added dark mode in 10 minutes.”
                        </p>
                        <div className="testimonial__meta">
                            <span className="avatar avatar--e" aria-hidden="true"></span>
                            <div>
                                <div className="testimonial__name">Citra</div>
                                <div className="testimonial__role">Junior developer</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
