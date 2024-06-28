"use client";

import { useState } from "react";
import { ClientMessage } from "./action";
import { useActions, useUIState } from "ai/rsc";
import { nanoid } from "nanoid";
import { useTTS } from '@cartesia/cartesia-js/react';

function TextToSpeech() {
	const tts = useTTS({
		apiKey: "",
		sampleRate: 44100,
	})

	const [text, setText] = useState("");

	const handlePlay = async () => {
		// Begin buffering the audio.
		const response = await tts.buffer({
			model_id: "sonic-english",
			voice: {
				mode: "embedding",
				embedding: Array(192).fill(1.0),
			},
			transcript: text,
		});

		// Immediately play the audio. (You can also buffer in advance and play later.)
		await tts.play();
	}

	return (
		<div className="block mt-10 bg-slate-300">
			<input type="text" value={text} onChange={(event) => setText(event.target.value)} />
			<button onClick={handlePlay}>Play</button>

			<div>
				{tts.playbackStatus} | {tts.bufferStatus} | {tts.isWaiting}
			</div>
		</div>
	);
}

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();

  return (
    <div>
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
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button>Send Message</button>
      </form>

      <TextToSpeech />

    </div>
  );
}
