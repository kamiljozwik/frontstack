import Image from "next/image";

import styles from "./socialLinks.module.scss";
import { ExternalLink } from "../externalLink/ExternalLink";

const socials = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kamil-jozwik/",
  },
  {
    name: "github",
    url: "https://github.com/kamiljozwik",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@frontstackpl",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/frontstackpl",
  },
  {
    name: "twitter",
    url: "https://twitter.com/thefrontnd",
  },
];

export const SocialLinks = () => {
  return (
    <div className={styles.root}>
      {socials.map((s) => (
        <ExternalLink key={s.name} href={s.url}>
          <Image
            src={`/assets/social/${s.name}.webp`}
            alt={`link do profilu na ${s.name}`}
            width="30"
            height="30"
          />
        </ExternalLink>
      ))}
    </div>
  );
};
