import { cn } from "@/utils";
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
    <header {...props} className={cn("mb-12", props.className)}>
      <h1 className="mt-8 text-4xl font-bold mb-2">{children}</h1>
      {desc ? <p className="text-gray-300">{desc}</p> : null}
    </header>
  );
};
