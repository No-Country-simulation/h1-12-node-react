import { EMAIL_ADDRESS, FRONT_LINK } from "../config/env.config.js";
import { gmailTransport } from "../config/mail.config.js";
import fs from "fs";
import { generateAccessToken } from "../utils/jwt.util.js";

export class MailsService {
  newUserNotification = async (payload, user) => {
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

    const token = generateAccessToken(user)
    const link = `${FRONT_LINK}/profile?token=${token}`

    let template = fs.readFileSync("src/mail-templates/welcome.template.html", "utf-8");

    template = template
      .replace(/{{roleLabel}}/g, roleLabel)
      .replace(/{{email}}/g, payload.email)
      .replace(/{{full_name}}/g, `${payload.first_name} ${payload.last_name}` )
      .replace(/{{link}}/g, link )
      .replace(/{{front-link}}/g, FRONT_LINK)

    await gmailTransport.sendMail({
      from: `Justina io <${EMAIL_ADDRESS}>`,
      to: payload.email,
      subject: `Has sido registrado como ${roleLabel} en Justina io`,
      html: template,
      attachments: [
        {
          filename: 'Justina.io.jpg',
          path: 'src/mail-templates/assets/Justina.io.jpg',
          cid: 'justina-logo'
        }
      ]
    });
  };

  passwordRestoration = async (email, user) => {
    const token = generateAccessToken(user)
    const link = `${FRONT_LINK}/reset-password?token=${token}`

    let template = fs.readFileSync("src/mail-templates/password-recovering.template.html", "utf-8");
    template = template
      .replace(/{{full_name}}/g, `${user.first_name} ${user.last_name}` )
      .replace(/{{email}}/g, email)
      .replace(/{{link}}/g, link)
      .replace(/{{front-link}}/g,  FRONT_LINK)

    const emailSent = await gmailTransport.sendMail({
      from: `Justina io <${EMAIL_ADDRESS}>`,
      to: email,
      subject: "Recuperación de contraseña",
      html: template,
      attachments: [
        {
          filename: 'Justina.io.jpg',
          path: 'src/mail-templates/assets/Justina.io.jpg',
          cid: 'justina-logo'
        }
      ]
    });
    return emailSent
  };
}
