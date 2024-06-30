import { DeepPartial } from "ai";
import { z } from "zod";

export const jokeSchema = z.object({
  beginning: z.string().describe("the start of a story"),
  // punchline: z.string().describe("the punchline of the joke"),
});

export type Joke = DeepPartial<typeof jokeSchema>;
