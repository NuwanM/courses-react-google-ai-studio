
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
   