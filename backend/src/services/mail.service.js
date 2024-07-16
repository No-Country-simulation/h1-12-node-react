import { EMAIL, EMAIL_ADRESS } from "../config/env.config";
import { gmailTransport } from "../config/mail.config";

export class MailsService {
  newUserNotification = async (payload) => {
    await gmailTransport.sendMail({
      from: `Justina io <${EMAIL_ADRESS}>`,
      to: payload.email,
      subject: `Has sido registrado como ${payload.role} en Justina io`,
      html: `
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <div class="main-container">
                            ${payload}
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
