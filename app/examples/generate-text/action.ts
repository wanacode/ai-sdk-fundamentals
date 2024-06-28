"use server";

import { generateText } from "ai";
import { mistral } from "@ai-sdk/mistral";

export const generateTextAction = async () => {
  const result = await generateText({
    model: mistral('mistral-large-latest'),
    temperature: 1,
    prompt: "Tell me a joke.",
  });
  return result.text;
};
