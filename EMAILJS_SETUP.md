# EmailJS Setup Instructions

Follow these steps to set up free email sending for your wedding contact form:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set the **To Email** field to: `{{to_email}}`
4. Use this template content:

**To:** {{to_email}}

**Subject:** New Wedding Message from {{from_name}}

**Body:**
```
New message from your wedding website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your wedding website contact form.
Reply to: {{reply_to}}
```

5. Save the template and copy the **Template ID**

## 4. Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** and copy it

## 5. Update Environment Variables
1. Open the `.env.local` file in your project
2. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Configure Email Recipients
The form is already configured to send emails to:
- ahmedmubarrakk@gmail.com
- alaagawish30@gmail.com

To change these, edit the `templateParams` in `src/components/ContactForm.tsx`

## 7. Restart Your Development Server
After updating the environment variables, restart your development server:
```bash
npm run dev
```

## Free Tier Limits
- 200 emails per month
- No cost for basic usage
- Reliable email delivery

## Troubleshooting

### 400 Bad Request Error
If you get a 400 error:
1. **Check Template Configuration**: Make sure your email template has `{{to_email}}` in the "To Email" field
2. **Verify Template Variables**: Ensure all variables (`{{from_name}}`, `{{message}}`, etc.) match your template
3. **Check Service Status**: Verify your EmailJS service is active and properly configured
4. **Test Template**: Use EmailJS dashboard to test your template manually

### Other Common Issues
- Make sure your environment variables are properly set in `.env.local`
- Check the browser console for any error messages
- Verify your EmailJS service and template are active
- Ensure your Gmail/email provider allows the EmailJS service
- Restart your development server after changing environment variables

### Still Having Issues?
1. Check your EmailJS dashboard for error logs
2. Try sending a test email from the EmailJS dashboard
3. Verify your service is connected to the correct email account

Your contact form will now send real emails to both specified addresses!
