import React, { createContext, useState } from 'react';

type TextToSpeechContextType = {
  currentText: string;
  setCurrentText: (text: string) => void;
  textQueue: string[];
  setTextQueue: (queue: string[]) => void;
  tts: any; // replace 'any' with the actual type of 'tts'
};

export const TextToSpeechContext = createContext<TextToSpeechContextType | null>(null);

export const TextToSpeechProvider: React.FC = ({ children, tts }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [textQueue, setTextQueue] = useState<string[]>([]);

  return (
    <TextToSpeechContext.Provider value={{ currentText, setCurrentText, textQueue, setTextQueue, tts }}>
      {children}
    </TextToSpeechContext.Provider>
  );
};