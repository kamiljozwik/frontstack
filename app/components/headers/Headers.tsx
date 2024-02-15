import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  desc?: string;
};

export const PageHeader = ({
  children,
  desc,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <header {...props}>
      <h1 className="mt-8 text-4xl">{children}</h1>
      {desc ? <p>{desc}</p> : null}
    </header>
  );
};
