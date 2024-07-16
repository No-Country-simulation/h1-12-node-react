import nodemailer from "nodemailer";
import { EMAIL_ADDRESS, EMAIL_PASS } from "./env.config.js";

export const gmailTransport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASS,
  },
});
