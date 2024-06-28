"use server";

import { streamText } from "ai";
import { mistral } from "@ai-sdk/mistral";
import { createStreamableValue } from "ai/rsc";

export const streamTextAction = async () => {
  const result = await streamText({
    model: mistral("mistral-large-latest"),
    temperature: 0.5,
    prompt: "Tell me a joke.",
  });
  return createStreamableValue(result.textStream).value;
};
