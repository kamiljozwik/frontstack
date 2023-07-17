import React from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export const Figure = ({ src, alt, caption }: Props) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption style={{ marginBottom: "24px" }}>
        <small>{caption}</small>
      </figcaption>
    </figure>
  );
};
