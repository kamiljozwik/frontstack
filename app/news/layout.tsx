import { PageHeader } from "../components/headers/Headers";

export const revalidate = 43200; // Refresh data every 12h

export const metadata = {
  title: "Wiadomości oraz ciekawe artykuły",
  description:
    "Nowości oraz polecane artykuły ze świata frontend oraz web development",
};

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <PageHeader desc="Co nowego w świecie web developmentu?">
        WebDev News
      </PageHeader>
      {children}
    </main>
  );
};

export default NewsLayout;
