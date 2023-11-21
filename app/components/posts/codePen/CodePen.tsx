import React from "react";

type Props = {
  id: string;
  defaultTab?: string;
} & React.HTMLAttributes<HTMLIFrameElement>;

export const CodePen = ({ id, defaultTab = "js", ...rest }: Props) => {
  return (
    <iframe
      height="300"
      style={{ width: "100%", marginBottom: "2rem" }}
      scrolling="no"
      title="CodePen"
      src={`https://codepen.io/frontstack/embed/preview/${id}?default-tab=${defaultTab}%2Cresult&editable=true`}
      frameBorder="no"
      loading="lazy"
      allowTransparency
      allowFullScreen
      {...rest}
    >
      Otwórz <a href={`https://codepen.io/frontstack/pen/${id}`}>CodePen</a>.
    </iframe>
  );
};
