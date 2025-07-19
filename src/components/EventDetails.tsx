import React from "react";
import { Calendar, Clock, MapPin, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section className="py-20 bg-wedding-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-dark mb-4">
            Wedding Events
          </h2>
          <h3 className="text-2xl md:text-3xl font-amiri arabic-text text-wedding-gold">
            تفاصيل الحفل
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* The Ceremony */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-soft animate-fade-in">
            <div className="mb-6">
              <Wine className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold text-wedding-dark mb-2">
                The <em>Ceremony</em>
              </h3>
              <h4 className="text-xl font-amiri arabic-text text-wedding-gold mb-4">
                حفل الزفاف
              </h4>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>تبدأ الساعة 10:00 مساءً</span>
              </div>

              <p className="text-center font-amiri arabic-text text-lg leading-relaxed">
                دعوتنا لكم نابعة من القلب
                <br />
                فأنتم جزء من فرحتنا
              </p>
            </div>
          </div>

          {/* Wedding Reception */}
          <div
            className="text-center bg-white rounded-2xl p-8 shadow-soft animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6">
              <Calendar className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold text-wedding-dark mb-2">
                Wedding <em>Reception</em>
              </h3>
              <h4 className="text-xl font-amiri arabic-text text-wedding-gold mb-4">
                حفل الاستقبال
              </h4>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>تبدأ الساعة 11:00 مساءً</span>
              </div>

              <p className="text-center font-amiri arabic-text text-lg leading-relaxed">
                نرحب بكم لمشاركتنا أجمل لحظاتنا
                <br />
                وسط أجواء من الفرح والبهجة
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 text-center">
          <div
            className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <MapPin className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-semibold text-wedding-dark mb-4">
              Wedding Venue
            </h3>
            <h4 className="text-xl font-amiri arabic-text text-wedding-gold mb-6">
              مكان الحفل
            </h4>

            <p className="text-lg text-muted-foreground mb-6">
              Join us at our beautiful wedding venue
            </p>
            <p className="text-lg font-amiri arabic-text text-muted-foreground mb-6">
              انضموا إلينا في مكان حفل زفافنا الجميل
            </p>

            <Button
              variant="default"
              size="lg"
              className="bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
