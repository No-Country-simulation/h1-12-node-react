import { EMAIL_ADDRESS } from "../config/env.config.js";
import { gmailTransport } from "../config/mail.config.js";
import fs from "fs";

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

    let template = fs.readFileSync("src/mail-templates/template-1.html", "utf-8");

    template = template.replace(/{{roleLabel}}/g, roleLabel);
    template = template.replace(/{{email}}/g, payload.email);
    template = template.replace(/{{full_name}}/g, `${payload.first_name} ${payload.last_name}` );

    await gmailTransport.sendMail({
      from: `Justina io <${EMAIL_ADDRESS}>`,
      to: payload.email,
      subject: `Has sido registrado como ${roleLabel} en Justina io`,
      html: template,
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
