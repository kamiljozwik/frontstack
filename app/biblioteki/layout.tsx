import { PageHeader } from "../components/headers/Headers";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <PageHeader>Biblioteki</PageHeader>
      <div>breadcrumbs here...</div>
      {children}
    </main>
  );
}
