import { toc } from "mdast-util-toc";

const renderChildren = (children: any) => {
  return children.map((child: any, index: any) => {
    if (child.type === "list") {
      return (
        <ul className="mb-2 pl-6 list-[circle]" key={index}>
          {renderChildren(child.children)}
        </ul>
      );
    } else if (child.type === "listItem") {
      return <li key={index}>{renderChildren(child.children)}</li>;
    } else if (child.type === "paragraph") {
      return <div key={index}>{renderChildren(child.children)}</div>;
    } else if (child.type === "link") {
      return (
        <a
          className="text-gray-400 hover:text-gray-300 text-base "
          key={index}
          href={child.url}
        >
          {renderChildren(child.children)}
        </a>
      );
    } else if (child.type === "text") {
      return <span key={index}>{child.value}</span>;
    } else {
      return null;
    }
  });
};

export const TableOfContents = ({ mdxContent }: { mdxContent?: any }) => {
  const tocTree: any = {
    type: "root",
    children: mdxContent
      .default()
      .props.children.filter(
        (i: any) => typeof i === "object" && ["h2", "h3", "h4"].includes(i.type)
      )
      .map((i: any) => {
        return {
          type: "heading",
          depth: i.type[1] - 1,
          children: [{ type: "text", value: i.props.children[1] }],
        };
      }),
  };

  const tableOfContent = toc(tocTree)?.map?.children ?? [];

  return (
    <div className="px-4 sticky top-2 overflow-auto max-h-screen scrollbar">
      <h2 className="text-2xl font-semibold mb-4">Spis treści</h2>
      <ul className="pl-5">{renderChildren(tableOfContent)}</ul>
    </div>
  );
};
