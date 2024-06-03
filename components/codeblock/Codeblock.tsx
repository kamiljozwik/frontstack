import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";

type Props = {
  language?: string;
  children: any;
};

const Codeblock = ({ children, language }: Props) => {
  return (
    // @ts-expect-error
    <SyntaxHighlighter language={language || "tsx"} style={oneDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export { Codeblock };
