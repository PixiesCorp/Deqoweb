import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function handler(req, res) {
  if(req.method == 'POST'){
    const {name, email, message} = {name: string, email: string, message: string} = req.body
    const msg = {
      to: 'alex.003pacheco@gmail.com',
      from: 'alex.02pacheco@hotmail.com',
      suject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({success: true})
    } catch (error) {
      res.status(200).json({success: false})
    }
  }
  
}