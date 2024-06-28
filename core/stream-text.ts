import { mistral } from "@ai-sdk/mistral";
import { streamText } from "ai";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const result = await streamText({
    model: mistral('mistral-large-latest'),
    prompt: "Tell me a joke.",
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
}

main().catch(console.error);
