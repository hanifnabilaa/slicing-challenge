import React from 'react';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <a className="brand" href="#">
                    <span className="brand__logo" aria-hidden="true">◇</span>
                    <span className="brand__text">Idaz</span>
                </a>

                <nav className="nav" aria-label="Primary">
                    <a className="nav__link" href="#features">Features</a>
                    <a className="nav__link" href="#testimonials">Testimonials</a>
                    <a className="nav__link" href="#pricing">Pricing</a>
                    <a className="nav__link" href="#faq">FAQ</a>
                </nav>

                <div className="navbar__actions">
                    <a className="btn btn--ghost" href="#pricing">Sign in</a>
                    <a className="btn btn--primary" href="#pricing">Get started</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
