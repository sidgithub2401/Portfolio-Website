"use client";

import { useEffect, useState, useCallback } from "react";

export function useTypewriter(words: string[], typingSpeed = 80, deleteSpeed = 40, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
    } else {
      setText((prev) => currentWord.slice(0, prev.length + 1));
    }
  }, [wordIndex, isDeleting, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deleteSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, tick, typingSpeed, deleteSpeed, pause]);

  return text;
}
