import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "يرجى ملء جميع الحقول",
        description: "الاسم والرسالة مطلوبان",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "شكراً لك!",
      description: "تم إرسال رسالتك بنجاح. نتطلع لرؤيتك في حفل زفافنا!",
    });

    setFormData({ name: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-wedding-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-dark mb-4">
              Share Your Wishes
            </h2>
            <h3 className="text-2xl md:text-3xl font-amiri arabic-text text-wedding-gold mb-6">
              شاركونا بذكرى تفضل معانا طول العمر
            </h3>
            <p className="text-lg text-muted-foreground">
              Send us your congratulations and well wishes
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-soft animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 text-lg font-amiri arabic-text"
                    style={{ textAlign: 'right' }}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="text-lg font-amiri arabic-text resize-none"
                    style={{ textAlign: 'right' }}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium font-amiri text-lg h-12"
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="text-xl font-amiri arabic-text text-wedding-gold mb-3">
                معلومات إضافية
              </h4>
              <p className="text-lg font-amiri arabic-text text-muted-foreground leading-relaxed">
                للاستفسار أو لأي معلومات إضافية، يرجى التواصل معنا
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;