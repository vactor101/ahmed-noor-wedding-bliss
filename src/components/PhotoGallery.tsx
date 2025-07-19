import React from 'react';
import { Camera, Heart } from 'lucide-react';

// Using uploaded images directly
const photos = [
  { src: '/lovable-uploads/94883e4a-7b96-40cc-831d-9a2b9e705499.png', alt: 'Ahmed & Noor - Beautiful Moment 1' },
  { src: '/lovable-uploads/c89e8ff0-8a90-476b-bb94-ed30492086d6.png', alt: 'Ahmed & Noor - Beautiful Moment 2' },
  { src: '/lovable-uploads/52fc0ba8-ebdc-41cc-8a1d-1b636445d11f.png', alt: 'Ahmed & Noor - Beautiful Moment 3' },
  { src: '/lovable-uploads/4b22a332-8c45-48ca-91c6-a24f1a3824b5.png', alt: 'Ahmed & Noor - Beautiful Moment 4' },
  { src: '/lovable-uploads/aaf78d6b-1b81-49cd-b9e6-9c42244a76ee.png', alt: 'Ahmed & Noor - Beautiful Moment 5' },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-wedding-gold" />
            <Heart className="w-6 h-6 text-wedding-gold animate-float" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-dark mb-4">
            Our Memories
          </h2>
          <h3 className="text-2xl md:text-3xl font-amiri arabic-text text-wedding-gold mb-6">
            ذكرياتنا الجميلة
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing the beautiful moments of our journey together
          </p>
          <p className="text-lg font-amiri arabic-text text-muted-foreground mt-2">
            لحظات جميلة من رحلتنا معاً
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft bg-white animate-fade-in hover:shadow-wedding transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex justify-center">
                    <Heart className="w-6 h-6 text-wedding-gold" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="bg-wedding-warm rounded-2xl p-8 shadow-soft max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-2xl font-playfair font-semibold text-wedding-dark mb-4">
              Every picture tells our story
            </h4>
            <p className="text-xl font-amiri arabic-text text-wedding-gold leading-relaxed">
              كل صورة تحكي قصة حبنا وفرحتنا معاً
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;