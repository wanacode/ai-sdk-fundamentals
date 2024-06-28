import { mistral } from "@ai-sdk/mistral";
import { generateText } from "ai";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const result = await generateText({
    model: mistral('mistral-large-latest'),
    prompt: "Tell me a joke.",
  });

  console.log(result.text);
}

main().catch(console.error);
