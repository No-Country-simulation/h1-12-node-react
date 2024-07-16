import nodemailer from "nodemailer";
import { EMAIL, EMAIL_PASS } from "./env.config";

export const gmailTransport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});
