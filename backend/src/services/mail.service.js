import { EMAIL_PASS, EMAIL_ADDRESS } from "../config/env.config.js";
import { gmailTransport } from "../config/mail.config.js";

export class MailsService {
  newUserNotification = async (payload) => {
    let roleLabel;
    switch (payload.role) {
      case 'patient':
        roleLabel = 'paciente'
        break;
      case 'professional':
        roleLabel = 'profesional de la salud'
        break;
      case 'insurance':
        roleLabel = 'obra social'
        break;
      case 'institution':
        roleLabel = 'institución de salud'
        break;
      default:
        roleLabel = 'usuario'
        break;
    }
    await gmailTransport.sendMail({
      from: `Justina io <${EMAIL_ADDRESS}>`,
      to: payload.email,
      subject: `Has sido registrado como ${roleLabel} en Justina io`,
      html: `
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <div class="main-container">
                            ${JSON.stringify(payload)}
                        </div>
                    </body>
                </html>
            `,
    });
  };

  passwordRestoration = async () => {
    await gmailTransport.sendMail({
      from: "",
      to: "",
      subject: "",
      html: "",
    });
  };
}
