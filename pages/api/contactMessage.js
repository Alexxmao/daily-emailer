const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
   
    const body = JSON.parse(req.body)

    const data = {
        to: process.env.ROO_EMAIL,
        from: 'iloveroopali@gmail.com',
        subject: `I love you <3`,
        text: body,
        html: body.replace(/\r\n/g, '<br />'),
    }
    
    await mail.send(data)

    res.status(200).json({ status: 'OK' })
}