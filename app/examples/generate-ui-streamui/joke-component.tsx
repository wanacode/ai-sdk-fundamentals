"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Joke } from "./joke";

export const JokeComponent = ({ joke }: { joke?: Joke }) => {
  const [showPunchline, setShowPunchline] = useState(false);
  return (
    <div className="bg-neutral-100 p-4 rounded-md flex items-center justify-between">
      <p>{joke?.beginning}</p>
    </div>
  );
};
