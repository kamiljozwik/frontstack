import Image from "next/image";

import styles from "./icons.module.scss";

export const Icons = () => {
  return (
    <div className={styles.root}>
      {[
        "html",
        "css",
        "js",
        "ts",
        "github",
        "react",
        "vue",
        "svelte",
        "node",
        "sass",
        "docker",
      ].map((ico) => (
        <Icon ico={ico} key={ico} />
      ))}
    </div>
  );
};

const Icon = ({ ico }: { ico: string }) => (
  <Image
    src={`/assets/fe-icons/${ico}.svg`}
    alt={`${ico} icon`}
    width={60}
    height={60}
  />
);
