import React, { useState } from 'react';
import Header from './components/Header';
import ConversionForm from './components/ConversionForm';
import Features from './components/Features';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <ConversionForm />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Emerald Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-6">
          <div className="max-w-6xl mx-auto">
            {renderPage()}
          </div>
        </main>
        <Footer onPrivacyClick={() => setCurrentPage('privacy')} />
      </div>
    </div>
  );
};

export default App;