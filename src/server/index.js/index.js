import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10kb" }));
const scamAnalysisLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    error: "Too many analysis requests. Please try again later.",
  },
});

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
app.post(
  "/api/analyze-scam",
  scamAnalysisLimiter,
  body("message")
    .isString()
    .withMessage("Message must be text.")
    .trim()
    .isLength({ min: 3, max: 5000 })
    .withMessage("Message must be between 3 and 5000 characters."),
  async (req, res) => { try {
 const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({
    error: "Please provide a valid message.",
    details: errors.array().map((error) => error.msg),
  });
}

const message = req.body.message.trim();
    const prompt = `
You are SafeNet Guardian, an online safety assistant.

Analyze this message for possible scams or cyber threats.

Give:
1. Risk level: Safe, Suspicious, or High Risk
2. Warning signs
3. Why it may be dangerous
4. What the user should do
5. What the user should NOT do

Keep the answer clear and easy to understand.

Message:
"${message}"
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({
      result: response.text,
    });
  } catch (error) {
    console.error("AI error:", error);

    res.status(500).json({
      error: "Unable to analyze the message right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`SafeNet AI server running on http://localhost:${PORT}`);
});