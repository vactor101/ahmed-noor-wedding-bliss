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
              من يوم ما عرفتك وأنا كل يوم بحمد ربنا على النعمة اللي اسمها آلاء. كنت بدور على اللي تفهمني من نظرة، وتطمني بكلمة، وتخفف عني حتى من غير ما أتكلم. لقيت فيك الوطن قبل ما تكوني شريكة، والونس قبل ما تكوني زوجة. وعد مني قدام الدنيا كلها… هافضل حضنك وقت الخوف، وضهرك وقت الشدة، وقلبك اللي دايمًا معاكي في كل خطوة.
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
                الاء
              </h4>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <p className="text-lg font-amiri arabic-text leading-relaxed text-right">
          كبرت وأنا بدعي ربنا يرزقني بحدّ يحبني زي ما أنا، يحتويني وقت ضعفي، ويكون سندي وقت الحلو والمُر. ولما جيت إنت، عرفت إن الدعاء مش بس بيستجاب، ده بيتحقق بأجمل صورة. إنت مش بس شريك حياتي… إنت نعمة ربنا بعتهالي في وقتها الصح
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
