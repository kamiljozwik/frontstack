import styles from "./chat.module.scss";

export type QA = {
  q?: string;
  a?: string;
};

type Props = {
  qa: QA[];
};

export const Chat = ({ qa }: Props) => {
  return (
    <>
      {qa.map((item, index) => (
        <div key={index} className={styles.qa}>
          {item.q ? (
            <div className={styles.q}>
              <div className={styles.tail} />
              <div className={styles.bubble}>{item.q}</div>
            </div>
          ) : null}

          {item.a ? (
            <div className={styles.a}>
              <div className={styles.bubble}>{item.a}</div>
              <div className={styles.tail} />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};
