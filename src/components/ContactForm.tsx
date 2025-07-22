import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast({
        title: "يرجى ملء جميع الحقول",
        description: "الاسم والر��الة مطلوبان",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration - Get these from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email || 'noreply@wedding.com',
        message: formData.message,
        reply_to: formData.email || 'noreply@wedding.com'
      };

      // Send to first email using correct API format
      const response1 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: {
            ...templateParams,
            to_email: 'ahmedmubarrakk@gmail.com'
          }
        })
      });

      if (!response1.ok) {
        const errorText = await response1.text();
        throw new Error(`Failed to send to first email: ${errorText}`);
      }

      // Send to second email using correct API format
      const response2 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: {
            ...templateParams,
            to_email: 'alaagawish30@gmail.com'
          }
        })
      });

      if (!response2.ok) {
        const errorText = await response2.text();
        throw new Error(`Failed to send to second email: ${errorText}`);
      }

      toast({
        title: "شكراً لك!",
        description: "تم إرسال رسالتك بنجاح. نتطلع لرؤيتك في حفل زفافنا!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسا��ة. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
              شاركونا بذكرى تفضل معانا طول ال��مر
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
                  <Input
                    name="email"
                    type="email"
                    placeholder="البريد الإلكتروني (اختياري)"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 text-lg font-amiri arabic-text"
                    style={{ textAlign: 'right' }}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="اكتب ��سالتك هنا..."
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
                  disabled={isLoading}
                  className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium font-amiri text-lg h-12 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 ml-2" />
                  {isLoading ? 'جاري الإرسال...' : 'إرسال'}
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
                للاستفسار أو لأي ��علومات إضافية، يرجى التواصل معنا
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
