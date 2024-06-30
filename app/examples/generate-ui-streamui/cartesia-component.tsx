"use client";

import { useState, useEffect } from 'react';
import { useTTS } from '@cartesia/cartesia-js/react';

function TextToSpeech() {
  const tts = useTTS({
    apiKey: process.env.NEXT_PUBLIC_CARTESIA_API_KEY,
    sampleRate: 44100,
  });

  const [textQueue, setTextQueue] = useState([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (textQueue.length > 0 && !currentText) {
      setCurrentText(textQueue[0]);
      setTextQueue(prevQueue => prevQueue.slice(1));
    }
  }, [textQueue, currentText]);

  useEffect(() => {
    const handlePlay = async () => {
      if (currentText) {
        const response = await tts.buffer({
          model_id: "sonic-english",
          voice: {
            mode: "embedding",
            embedding: Array(192).fill(1.0),
          },
          transcript: currentText,
        });

        await tts.play();
        setCurrentText(""); // Clear current text after playing
      }
    };

    handlePlay();
  }, [currentText, tts]);

  const addToQueue = (text) => {
    setTextQueue(prevQueue => [...prevQueue, text]);
  };

  return (
    <div className="block mt-10 bg-slate-300">
      <input type="text" value={currentText} onChange={(event) => setCurrentText(event.target.value)} />
      <button onClick={() => addToQueue(currentText)}>Add to Queue</button>

      <div>
        {tts.playbackStatus} | {tts.bufferStatus} | {tts.isWaiting}
      </div>
    </div>
  );
}

export default TextToSpeech;
