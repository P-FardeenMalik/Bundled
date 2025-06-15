import type { NextApiRequest, NextApiResponse } from 'next';
import { sendContactEmail, ContactFormData } from '@/lib/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, project, message, company, budget, timeline } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  try {
    // Prepare contact form data
    const contactData: ContactFormData = {
      name,
      email,
      message,
      project,
      company,
      budget,
      timeline
    };

    // Send email using the email service
    await sendContactEmail(contactData);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email. Please try again or contact us directly at contact@bundled.finance' 
    });
  }
}
