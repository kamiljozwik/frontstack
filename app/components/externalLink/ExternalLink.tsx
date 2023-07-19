import { AnchorHTMLAttributes } from "react";

export const ExternalLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const { children, ...rest } = props;
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
