import {Resend} from 'resend';

const resend = new Resend('re_eNfC7MtN_GE1h7vgeV9URg3oregDUQq8C');

const sendWelcomeEmail = async (speakerData) => {
  try {
    const { firstname, lastname, email, organisation, designation } = speakerData;

    const emailContent = {
      from: 'Speaker Registration <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome! Speaker Registration Confirmed',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome, ${firstname} ${lastname}!</h2>
          <p style="font-size: 16px; color: #555;">
            Thank you for registering as a speaker with us.Your application is under the reviewing process.s
          </p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Registration Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p style="margin: 5px 0;"><strong>Organisation:</strong> ${organisation}</p>
            <p style="margin: 5px 0;"><strong>Designation:</strong> ${designation}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <p style="font-size: 14px; color: #777;">
            We'll be in touch with more details soon!
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            If you didn't register for this, please ignore this email.
          </p>
        </div>
      `
    };

    const data = await resend.emails.send(emailContent);
    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

export default sendWelcomeEmail;