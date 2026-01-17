import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <p className="badge">
                        <span className="badge__dot" aria-hidden="true"></span>
                        New: Weekly UI challenges for students
                    </p>

                    <h1 className="hero__title">
                        Build clean, reusable UI components
                        <span className="hero__title-accent"> fast</span>
                    </h1>

                    <p className="hero__subtitle">
                        A simple landing page template for slicing practice.
                        Your task: break this page into small components and reuse them.
                    </p>

                    <div className="hero__cta">
                        <a className="btn btn--primary" href="#features">Explore features</a>
                        <a className="btn btn--secondary" href="#faq">How it works</a>
                    </div>

                    <div className="hero__meta">
                        <div className="avatar-row" aria-label="Happy learners">
                            <span className="avatar avatar--a" aria-hidden="true"></span>
                            <span className="avatar avatar--b" aria-hidden="true"></span>
                            <span className="avatar avatar--c" aria-hidden="true"></span>
                            <span className="avatar avatar--d" aria-hidden="true"></span>
                            <span className="avatar avatar--e" aria-hidden="true"></span>
                            <span className="avatar-row__text">Trusted by 2,400+ learners</span>
                        </div>

                        <div className="rating">
                            <span className="rating__stars" aria-hidden="true">★★★★★</span>
                            <span className="rating__text">4.9/5 average rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual" aria-hidden="true">
                    <div className="card-preview">
                        <div className="card-preview__top">
                            <div className="dot dot--red"></div>
                            <div className="dot dot--yellow"></div>
                            <div className="dot dot--green"></div>
                            <div className="card-preview__title">Dashboard</div>
                        </div>
                        <div className="card-preview__body">
                            <div className="mini-chart"></div>
                            <div className="mini-list">
                                <div className="mini-list__item">
                                    <span className="pill pill--success">Active</span>
                                    <span className="mini-list__text">Components built</span>
                                    <span className="mini-list__num">18</span>
                                </div>
                                <div className="mini-list__item">
                                    <span className="pill pill--info">Draft</span>
                                    <span className="mini-list__text">In progress</span>
                                    <span className="mini-list__num">6</span>
                                </div>
                                <div className="mini-list__item">
                                    <span className="pill pill--warning">Review</span>
                                    <span className="mini-list__text">Needs polish</span>
                                    <span className="mini-list__num">3</span>
                                </div>
                            </div>
                            <div className="mini-cta">
                                <button className="btn btn--small btn--primary" type="button">Publish</button>
                                <button className="btn btn--small btn--ghost" type="button">Preview</button>
                            </div>
                        </div>
                    </div>
                    <div className="blob blob--1"></div>
                    <div className="blob blob--2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
