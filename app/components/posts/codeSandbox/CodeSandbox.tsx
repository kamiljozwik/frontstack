import React from "react";

export const CodeSandbox = ({
  embedId,
  title = "CodeSandbox",
}: {
  embedId: string;
  title: string;
}) => {
  return (
    <div style={{ margin: "12px 0 24px 0" }}>
      <iframe
        src={`https://codesandbox.io/embed/${embedId}?fontsize=14&amp;hidenavigation=1&amp;theme=dark`}
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title={title}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
