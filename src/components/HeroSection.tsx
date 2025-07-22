import React from "react";
import CountdownTimer from "./CountdownTimer";
// Using the uploaded image directly

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
    <div
  className="absolute inset-0 bg-no-repeat bg-center"
  style={{
    backgroundImage: `url(/lovable-uploads/94883e4a-7b96-40cc-831d-9a2b9e705499.png)`,
    backgroundSize: 'contain',
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>
</div>


      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-wedding-gold opacity-30 animate-float">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <path d="M30 0l7.5 22.5H60L42.5 35 50 57.5 30 45 10 57.5 17.5 35 0 22.5h22.5L30 0z" />
        </svg>
      </div>

      <div
        className="absolute bottom-10 right-10 text-wedding-gold opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <path d="M30 0l7.5 22.5H60L42.5 35 50 57.5 30 45 10 57.5 17.5 35 0 22.5h22.5L30 0z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h3 className="text-xl md:text-2xl font-playfair mb-4 text-wedding-gold italic">
            The Lovely <em>Wedding</em> of
          </h3>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 leading-tight">
            Ahmed & Alaa
          </h1>

          <div className="mb-8 text-lg md:text-xl">
            <p className="mb-2 font-playfair">Save The Date</p>
            <p className="text-2xl md:text-3xl font-bold text-wedding-gold mb-2">
              31-7-2025
            </p>
            <p className="text-lg font-playfair">Wedding Venue</p>
          </div>
        </div>

        <CountdownTimer />

        {/* Arabic Welcome */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "1s" }}>
          <h2 className="text-2xl md:text-3xl font-amiri arabic-text mb-4 text-wedding-gold">
            نتشرف بدعوتكم لحضور حفل زفافنا
          </h2>
          <p className="text-lg font-amiri arabic-text text-gray-200">
            شاركونا أجمل لحظات الفرح والسعادة
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
