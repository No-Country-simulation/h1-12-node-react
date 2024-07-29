import { AiService } from "../services/ai.service.js";
import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";

export class AiController {
  constructor() {
    this.aiService = new AiService();
  }

  transcribe = async (req, res, next) => {
    try {
      const transcription = await this.aiService.transcribe(req);
      res.status(HTTP_CODES.SUCCESS).send({text: transcription});
    } catch (error) {
      next(error);
    }
  };
}
