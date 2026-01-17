import React from 'react';
import SectionHead from './components/SectionHead';

const FAQ = () => {
    return (
        <section className="section section--alt" id="faq">
            <div className="container">
                <SectionHead title="FAQ" subtitle="Each item can become its own component." />

                <div className="faq">
                    <details className="faq__item" open>
                        <summary className="faq__question">What does “slicing” mean?</summary>
                        <div className="faq__answer">
                            Slicing means breaking a page into reusable UI components, then rebuilding it using those components.
                        </div>
                    </details>

                    <details className="faq__item">
                        <summary className="faq__question">Should we slice by section or by UI pattern?</summary>
                        <div className="faq__answer">
                            Start by section, then extract repeated patterns like buttons, cards, badges, and layout wrappers.
                        </div>
                    </details>

                    <details className="faq__item">
                        <summary className="faq__question">Can we change the design?</summary>
                        <div className="faq__answer">
                            Yes. After slicing, you can theme it, add dark mode, or replace content as long as structure remains
                            similar.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
