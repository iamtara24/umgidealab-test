import React from 'react';
import Navbar from './navbarComp';
import FeaturedProduct from './featuredProduct';
import Footer from './footerComp';
import HeroBackground from '../../assets/img/hero-bg.jpg';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">
            Welcome to Our Store
          </h1>
        </div>
      </div>

      {/* Featured Product Section */}
      <FeaturedProduct />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
