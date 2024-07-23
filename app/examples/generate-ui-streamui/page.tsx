"use client";

import { useState, useContext } from "react";
import { ClientMessage } from "./action";
import { useActions, useUIState } from "ai/rsc";
import { nanoid } from "nanoid";
import { useTTS } from '@cartesia/cartesia-js/react';
import TextToSpeech from "./cartesia-component";
import { TextToSpeechContext, TextToSpeechProvider } from "./TextToSpeechContext";

export default function Home() {
  // const { textQueue, setTextQueue } = useContext(TextToSpeechContext);
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();
  const [textQueue, setTextQueue] = useState<string[]>([]);

  return (
    <div>
      
      <h1 className="text-2xl font-semibold">Lets tell a story!</h1>
      <p>Start with a topic.</p>
      <div>
        {conversation.map((message: ClientMessage) => (
          <div key={message.id}>
            {message.role}: {message.display}
          </div>
        ))}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setTextQueue([input]);
          setInput("");
          setConversation((currentConversation: ClientMessage[]) => [
            ...currentConversation,
            { id: nanoid(), role: "user", display: input },
          ]);

          const message = await continueConversation(input);

          setConversation((currentConversation: ClientMessage[]) => [
            ...currentConversation,
            message,
          ]);
        }}
      >
        <input
          className="mt-4 border border-neutral-500 mr-2"
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button>Send Message</button>
      </form>

      <TextToSpeechProvider>
        <TextToSpeech />
      </TextToSpeechProvider>

    </div>
  );
}
