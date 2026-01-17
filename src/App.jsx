import React from 'react';
import Navbar from './features/landing/Navbar';
import Hero from './features/landing/Hero';
import Stats from './features/landing/Stats';
import Features from './features/landing/Features';
import Testimonials from './features/landing/Testimonials';
import Pricing from './features/landing/Pricing';
import FAQ from './features/landing/FAQ';
import Footer from './features/landing/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
