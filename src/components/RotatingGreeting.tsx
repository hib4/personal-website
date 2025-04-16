import { useEffect, useState } from "react";

const greetings = [
  "Hi",
  "Hai",
  "Hola",
  "Bonjour",
  "مرحباً",
  "こんにちは",
  "नमस्ते",
  "Ciao",
  "Hallo",
  "Olá",
];

export function RotatingGreeting() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState("fade-in");
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartAnimations(true);
      // Immediately start the first transition after delay
      setFade("fade-out");
      setTimeout(() => {
        setIndex(1); // Set to "Hai" after first transition
        setFade("fade-in");
      }, 500);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!startAnimations) return;

    const interval = setInterval(() => {
      setFade("fade-out");

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setFade("fade-in");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [startAnimations]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      <span
        className={`inline-block ${
          startAnimations
            ? fade === "fade-in"
              ? "animate-fadeIn"
              : "animate-fadeOut"
            : ""
        }`}
      >
        {greetings[index]}
      </span>
      , I'm Hiba!
    </h1>
  );
}
