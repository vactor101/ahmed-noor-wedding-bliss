import React, { useCallback, useEffect } from "react";
import { Camera, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

// Using uploaded images directly
const photos = [
  {
    src: "/lovable-uploads/img1.jpeg",
    alt: "Ahmed & Alaa - Beautiful Moment 1",
  },
  {
    src: "/lovable-uploads/img2.jpeg",
    alt: "Ahmed & Alaa - Beautiful Moment 2",
  },
  {
    src: "/lovable-uploads/img3.jpeg",
    alt: "Ahmed & Alaa - Beautiful Moment 3",
  },
  
  {
    src: "/lovable-uploads/img4.jpeg",
    alt: "Ahmed & Alaa - Beautiful Moment 5",
  },
];

const PhotoGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Auto scroll every 4 seconds

    // Clear interval when component unmounts or emblaApi changes
    return () => clearInterval(autoPlay);
  }, [emblaApi]);

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

        {/* Photo Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="embla__container flex">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-soft bg-white hover:shadow-wedding transition-all duration-300">
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-wedding-gold text-wedding-gold hover:text-wedding-gold z-10 rounded-full w-12 h-12 shadow-wedding"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-wedding-gold text-wedding-gold hover:text-wedding-gold z-10 rounded-full w-12 h-12 shadow-wedding"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-wedding-gold/30 hover:bg-wedding-gold/60 transition-colors duration-200"
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div
            className="bg-wedding-warm rounded-2xl p-8 shadow-soft max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
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
