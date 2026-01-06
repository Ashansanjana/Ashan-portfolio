# Portfolio Enhancement - EmailJS Setup Guide

## 📧 Setting Up EmailJS for Contact Form

To enable the contact form to send emails, you need to configure EmailJS. Follow these steps:

### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- In your EmailJS dashboard, click "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Save the **Service ID**

### 3. Create aemail Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

- Save the **Template ID**

### 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key**

### 5. Update Contact.tsx
Open `src/components/Contact.tsx` and replace the placeholders around line 20-22:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### Example:
```typescript
const serviceId = 'service_abc1234';
const templateId = 'template_xyz5678';
const publicKey = 'user_def9012';
```

## 🎨 Portfolio Features

### New Components Added
- ✅ **LoadingScreen** - Animated loading screen with progress bar
- ✅ **ScrollProgress** - Gradient progress bar at top of page
- ✅ **ThemeToggle** - Light/Dark theme switcher
- ✅ **FloatingNav** - Quick navigation button
- ✅ **Experience** - Timeline-based work experience section
- ✅ **Certifications** - Professional certifications grid
- ✅ **Testimonials** - Client testimonials carousel

### Enhanced Features
- 🎯 Scroll-triggered animations throughout
- 🌓 Dark/Light theme with smooth transitions
- 📧 EmailJS contact form integration
- 🎨 Enhanced animations and hover effects
- 📱 Fully responsive design
- ♿ Improved accessibility

## 🚀 Running the Portfolio

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 Customization

### Update Personal Information
Edit the following components:
- `Hero.tsx` - Update name, roles, description, social links
- `About.tsx` - Update about text and skills
- `Experience.tsx` - Add your actual work experience
- `Certifications.tsx` - Add your real certifications
- `Testimonials.tsx` - Add client testimonials
- `Projects.tsx` - Update with your projects
- `Contact.tsx` - Update contact information

### Theme Colors
Modify `src/index.css` to change theme colors in CSS variables section.

### Content Updates
- Profile images: Update image URLs in Hero and About sections
- Project images: Update in Projects section
- Certification data: Update in Certifications section

## 🎯 Next Steps

1. Set up EmailJS (follow guide above)
2. Replace placeholder content with your actual information
3. Add your real projects and experiences
4. Test the contact form
5. Deploy to GitHub Pages

## 📦 Dependencies Added
- `@emailjs/browser` - Email sending functionality
- `react-hot-toast` - Toast notifications

Enjoy your enhanced portfolio! 🎉
