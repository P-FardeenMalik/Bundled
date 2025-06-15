import nodemailer from 'nodemailer';

// Email configuration for Hostinger
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.EMAIL_USER || 'contact@bundled.finance',
    pass: process.env.EMAIL_PASS,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  project?: string;
  company?: string;
  budget?: string;
  timeline?: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  const { name, email, message, project, company, budget, timeline } = data;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'contact@bundled.finance',
    to: 'contact@bundled.finance',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">Contact Information</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></p>
            ${project ? `<p style="margin: 10px 0;"><strong>Project Type:</strong> ${project}</p>` : ''}
            ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            ${budget ? `<p style="margin: 10px 0;"><strong>Budget Range:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p style="margin: 10px 0;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-line; color: #374151;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the Bundled contact form<br>
              Received on ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export default transporter;
