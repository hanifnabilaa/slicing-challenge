import React from 'react';

const Stats = () => {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats__grid">
                    <div className="stat">
                        <div className="stat__num">3</div>
                        <div className="stat__label">Page sections</div>
                    </div>
                    <div className="stat">
                        <div className="stat__num">12</div>
                        <div className="stat__label">Reusable components</div>
                    </div>
                    <div className="stat">
                        <div className="stat__num">1</div>
                        <div className="stat__label">CSS file</div>
                    </div>
                    <div className="stat">
                        <div className="stat__num">0</div>
                        <div className="stat__label">Dependencies</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
