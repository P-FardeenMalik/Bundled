# Email Setup Guide for Bundled

## Overview
This project is configured to send emails from the contact forms to `contact@bundled.finance` using Hostinger's SMTP service.

## Configuration

### 1. Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=contact@bundled.finance
EMAIL_PASS=your_actual_email_password
```

### 2. Hostinger SMTP Settings
The project is pre-configured with Hostinger's SMTP settings:
- **Host**: smtp.hostinger.com
- **Port**: 465
- **Security**: SSL/TLS
- **Authentication**: Required

### 3. Email Features
- **Home Page Contact Form**: Located at the bottom of the homepage
- **Contact Page Form**: Dedicated contact page with detailed form fields
- **Email Templates**: Professional HTML email templates with Bundled branding
- **Form Validation**: Client-side and server-side validation
- **Status Messages**: Success/error feedback to users

### 4. Setup Steps

1. **Update Environment Variables**:
   - Replace `YOUR_ACTUAL_EMAIL_PASSWORD` in `.env.local` with the actual password for `contact@bundled.finance`

2. **Test Email Functionality**:
   - Run the development server: `npm run dev`
   - Navigate to the contact form
   - Submit a test message
   - Check `contact@bundled.finance` inbox

### 5. Email Service Structure

#### API Endpoint
- **Path**: `/api/contact`
- **Method**: POST
- **Fields**: name, email, message, project, company, budget, timeline

#### Email Service
- **Location**: `src/lib/email.ts`
- **Features**: 
  - Reusable email service
  - Professional HTML templates
  - Type-safe interfaces
  - Error handling

### 6. Troubleshooting

#### Common Issues:
1. **Authentication Error**: Check email password in `.env.local`
2. **Connection Timeout**: Verify Hostinger SMTP settings
3. **SSL Certificate**: Ensure `secure: true` for port 465

#### Testing Email Delivery:
```bash
# Check environment variables
echo $EMAIL_USER
echo $EMAIL_PASS

# Test SMTP connection (if needed)
telnet smtp.hostinger.com 465
```

### 7. Production Deployment

#### Environment Variables for Production:
- Set `EMAIL_USER` and `EMAIL_PASS` in your hosting platform's environment variables
- Never commit actual passwords to version control

#### Hosting Platforms:
- **Vercel**: Add environment variables in project settings
- **Netlify**: Configure in site settings
- **Railway/Render**: Set in environment variables section

### 8. Security Notes
- Email passwords are stored as environment variables
- SMTP connection uses SSL/TLS encryption
- Form data is validated before processing
- Error messages don't expose sensitive information

## Email Templates

Both contact forms send professionally formatted emails with:
- Bundled branding
- Contact information display
- Message formatting
- Timestamp
- Responsive design

The emails are sent to `contact@bundled.finance` and include all form data in a structured, easy-to-read format.
