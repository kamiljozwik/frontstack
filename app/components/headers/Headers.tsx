import { PropsWithChildren } from "react";

type Props = {
  desc?: string;
};

export const PageHeader = ({ children, desc }: PropsWithChildren<Props>) => {
  return (
    <header>
      <h1 className="mt-8 text-4xl">{children}</h1>
      {desc ? <p>{desc}</p> : null}
    </header>
  );
};
