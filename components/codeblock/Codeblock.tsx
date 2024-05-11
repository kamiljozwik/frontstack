import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

type Props = {
  language?: string;
  children: any;
};

const Codeblock = ({ children, language }: Props) => {
  return (
    // @ts-expect-error
    <SyntaxHighlighter language={language || "tsx"} style={atomOneDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export { Codeblock };
