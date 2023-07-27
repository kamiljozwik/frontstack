"use client";

import { useState } from "react";
import { saveMail, saveQuestion } from "@/app/firebase";
import useLocalStorageState from "use-local-storage-state";

import styles from "./sendButton.module.scss";
import { Chat, QA } from "./Chat";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAIL_ANSWER =
  "Cieszę się, że chcesz zostać w kontakcie. Jeżeli masz dodatkowe pytania dotyczące kursu, możesz zadać je, kontynuując ten czas. Do usłyszenia już wkrótce! 🎉";

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

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const qa: QA[] = [
    mail ? { q: mail, a: EMAIL_ANSWER } : {},
    ...questions.map((q) => ({ q })),
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    setLoading(true);

    try {
      if (emailRegex.test(trimmed)) {
        await saveMail(trimmed);
        setMail(trimmed);
      } else if (mail) {
        await saveQuestion(trimmed, mail);
        setQuestions((q) => [...q, trimmed]);
      }

      setInputValue("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSmallMsg = (): string => {
    switch (true) {
      case !mail:
        return "Po zostawieniu maila będziesz mógł tutaj zadawać dalsze pytania dotyczące kursu 🙂";
      case questions.length === 0:
        return "Masz pytania dotyczące kursu? Zadaj je w polu powyżej ☝️";
      case questions.length > 0:
        return "Na najczęściej pojawiające się pytania odpowiemy aktualizując powyższy czat 💬";

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
            disabled={loading}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            name="content"
            placeholder={
              mail
                ? "Twoje pytanie..."
                : "Zostaw maila, aby być na bieżąco z kursem"
            }
          />
          <button disabled={loading}>
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
