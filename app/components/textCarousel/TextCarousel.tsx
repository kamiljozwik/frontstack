"use client";

import { useState, useEffect } from "react";
import styles from "./textCarousel.module.scss";

type Props = {
  words: string[];
};

export const TextCarousel = ({ words }: Props) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((index) => (index + 1) % words.length);
        setIsAnimating(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return words.length > 1 ? (
    <span className={styles.textCarousel}>
      <span
        className={`${styles.text} ${isAnimating ? styles.fadeOut : ""}`}
        key={index}
      >
        {words[index]}
      </span>
      <span
        className={`${styles.text} ${isAnimating ? styles.fadeIn : ""}`}
        key={(index + 1) % words.length}
      >
        {words[(index + 1) % words.length]}
      </span>
    </span>
  ) : null;
};
