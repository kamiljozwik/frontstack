"use client";

import { useEffect, useState } from "react";
import { saveMail, saveQuestion } from "@/app/firebase";
import useLocalStorageState from "use-local-storage-state";
import sanitizeHtml from "sanitize-html";

import styles from "./sendButton.module.scss";
import { Chat, QA } from "./Chat";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAIL_ANSWER =
  "Cieszę się, że chcesz zostać w kontakcie. Jeżeli masz dodatkowe pytania dotyczące kursu, możesz zadać je, kontynuując ten czat. Do usłyszenia już wkrótce! 🎉";

const BLOCK_TIME = 12;

export const SendButton = () => {
  const [mail, setMail] = useLocalStorageState("chat-mail", {
    defaultValue: "",
  });

  const [questions, setQuestions] = useLocalStorageState<string[]>(
    "chat-questions",
    {
      defaultValue: [],
    }
  );

  const [blockTime, setBlockTime] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const qa: QA[] = [
    mail ? { q: mail, a: EMAIL_ANSWER } : {},
    ...questions.map((q) => ({ q })),
  ];

  useEffect(() => {
    if (blockTime === 0) return;

    const interval = setInterval(() => {
      setBlockTime((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [blockTime, setBlockTime]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sanitized = sanitizeHtml(inputValue);
    const trimmed = sanitized.trim();

    if (!trimmed || blockTime !== 0) return;

    setLoading(true);

    try {
      if (emailRegex.test(trimmed)) {
        await saveMail(trimmed);
        setMail(trimmed);
        setBlockTime(BLOCK_TIME);
      } else if (mail) {
        await saveQuestion(trimmed, mail);
        setQuestions((q) => [...q, trimmed]);
        setBlockTime(BLOCK_TIME);
      }

      setInputValue("");
      setLoading(false);
    } catch (error) {
      alert(
        "Nie możemy zapisać Twojej wiadomości. Odśwież stronę i spróbuj ponownie."
      );
    }
  };

  const getSmallMsg = (): string => {
    switch (true) {
      case !mail:
        return "Po zostawieniu maila będziesz mógł tutaj zadawać dalsze pytania dotyczące kursu 🙂";
      case blockTime > 0:
        return `⌛ Następną wiadomość możesz wysłać za ${blockTime} s....`;
      case questions.length === 0:
        return "Masz pytania dotyczące kursu? Zadaj je w polu powyżej ☝️";
      case questions.length > 0:
        return "Odpowiedzi na najczęściej pojawiające się pytania umieścimy w naszym czacie 💬";

      default:
        return "";
    }
  };

  return (
    <>
      <Chat qa={qa} />
      <div className={styles.root}>
        <form onSubmit={handleSubmit}>
          <input
            disabled={loading || blockTime > 0}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            name="content"
            type="text"
            max={255}
            placeholder={
              mail
                ? "Twoje pytanie..."
                : "Zostaw maila, aby być na bieżąco z kursem"
            }
          />
          <button disabled={loading || blockTime > 0}>
            <SendIco />
          </button>
        </form>
        <small>{getSmallMsg()}</small>
      </div>
    </>
  );
};

const SendIco = () => (
  <svg viewBox="0 0 24 24" height="24" width="24" version="1.1" x="0px" y="0px">
    <path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
  </svg>
);
