import React from 'react';
import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import CoupleStory from '@/components/CoupleStory';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <CoupleStory />
      <div id="contact-form">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
