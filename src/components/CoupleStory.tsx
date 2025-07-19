import React from "react";
import { Heart, Users } from "lucide-react";

const CoupleStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-dark mb-4">
            Our Story
          </h2>
          <h3 className="text-2xl md:text-3xl font-amiri arabic-text text-wedding-gold">
            قصتنا
          </h3>
          <p className="text-lg font-amiri arabic-text text-muted-foreground mt-4 max-w-2xl mx-auto">
            شاركونا بذكرى تفضل معانا طول العمر
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Groom */}
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <Users className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
              <h4 className="text-lg text-muted-foreground font-amiri arabic-text mb-2">
                العريس
              </h4>
              <h3 className="text-3xl font-playfair font-bold text-wedding-dark mb-6">
                Ahmed
              </h3>
              <h4 className="text-2xl font-amiri arabic-text text-wedding-gold mb-6">
                أحمد
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <p className="text-lg font-amiri arabic-text leading-relaxed text-right">
                من أول ما شوفتها و حسيت إن دي هي البنت اللي كنت مستنيها.. شريكة
                العمر و الكفاح و النجاح. و ابتدينا سوا مشوار جديد كله حب و رضا.
              </p>
            </div>
          </div>

          {/* Bride */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-8">
              <Heart className="w-12 h-12 text-wedding-gold mx-auto mb-4" />
              <h4 className="text-lg text-muted-foreground font-amiri arabic-text mb-2">
                العروسة
              </h4>
              <h3 className="text-3xl font-playfair font-bold text-wedding-dark mb-6">
                Alaa
              </h3>
              <h4 className="text-2xl font-amiri arabic-text text-wedding-gold mb-6">
                علاء
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <p className="text-lg font-amiri arabic-text leading-relaxed text-right">
                من و أنا صغيرة كنت بحلم بيوم زي ده... ألبس الفستان الأبيض، وأكون
                مع اللي قلبي اختاره. والنهاردة الحلم بقى حقيقة.
              </p>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="mt-16 text-center">
          <div
            className="bg-gradient-wedding rounded-2xl p-8 shadow-wedding max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl md:text-3xl font-amiri arabic-text text-white mb-6">
              أهلاً بأحلى أهل و صحاب
            </h3>
            <p className="text-xl font-amiri arabic-text text-white/90 leading-relaxed">
              مستنيينكم تشاركونا أحلى لحظة في عمرنا فرحتنا مش هتكمل من غيركم
              وجودكم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
