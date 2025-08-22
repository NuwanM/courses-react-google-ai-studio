
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
        <section id="home">
          <Hero />
        </section>
        <section id="courses">
          <CoursesSection />
        </section>
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">About Our Program</h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
              We provide comprehensive industrial training programs designed to equip students with practical skills
              and industry knowledge. Our courses are developed in collaboration with industry experts to ensure
              relevance and effectiveness.
            </p>
          </div>
        </section>
        <section id="contact" className="py-16 bg-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Contact Us</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="text-lg text-slate-600 mb-4">
                Get in touch with us for more information about our training programs.
              </p>
              <p className="text-slate-600">
                Email: info@industrialtraining.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
