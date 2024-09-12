'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); 
  const [displayedText, setDisplayedText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [speed, setSpeed] = useState(100); 


  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex].text;
      if (!isDeleting) {
 
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {

        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); 
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex, words, speed]);

  return (
    <div
      className={`text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ${className}`}
    >
      <span className={words[currentWordIndex].className}>
        {displayedText}
      </span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`inline-block w-[3px] h-4 md:h-6 lg:h-10 mx-1 bg-black/50 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};
