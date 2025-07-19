import React from "react";
import { Heart, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-wedding-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-wedding-gold animate-float" />
            <h3 className="text-3xl md:text-4xl font-playfair font-bold">
              Ahmed & Alaa
            </h3>
            <Heart
              className="w-8 h-8 text-wedding-gold animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <h4 className="text-xl md:text-2xl font-amiri arabic-text text-wedding-gold mb-8">
            أحمد وعلاء
          </h4>

          <p className="text-lg font-amiri arabic-text text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            نتشرف بحضوركم في أسعد يوم في حياتنا. دعواتكم وحبكم يعني لنا الكثير
          </p>
        </div>

        {/* Event Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Calendar className="w-8 h-8 text-wedding-gold mx-auto mb-3" />
            <h5 className="font-playfair font-semibold mb-2">Wedding Date</h5>
            <p className="text-wedding-gold font-bold">31 July 2025</p>
            <p className="text-sm text-gray-400 font-amiri arabic-text">
              31 يوليو 2025
            </p>
          </div>

          <div className="text-center">
            <MapPin className="w-8 h-8 text-wedding-gold mx-auto mb-3" />
            <h5 className="font-playfair font-semibold mb-2">Location</h5>
            <p className="text-wedding-gold">Wedding Venue</p>
            <p className="text-sm text-gray-400 font-amiri arabic-text">
              مكان الحفل
            </p>
          </div>

          <div className="text-center">
            <Heart className="w-8 h-8 text-wedding-gold mx-auto mb-3" />
            <h5 className="font-playfair font-semibold mb-2">Celebration</h5>
            <p className="text-wedding-gold">10:00 PM</p>
            <p className="text-sm text-gray-400 font-amiri arabic-text">
              الساعة 10:00 مساءً
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="outline"
            size="lg"
            className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white font-medium"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/omK2jNprVw3DvZhJ6?g_st=iw",
                "_blank",
              )
            }
          >
            <MapPin className="w-5 h-5 mr-2" />
            الموقع | Location
          </Button>

          <Button
            variant="default"
            size="lg"
            className="bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium"
            onClick={() => {
              const element = document.getElementById("contact-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            التقويم | Calendar
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              We can't wait to celebrate with you!
            </p>
            <p className="text-sm font-amiri arabic-text text-gray-500">
              نتطلع لمشاركتكم فرحتنا والاحتفال معكم
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
