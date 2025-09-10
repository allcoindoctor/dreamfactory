
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
