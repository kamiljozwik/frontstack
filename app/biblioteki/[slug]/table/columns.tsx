"use client";

import { PropsWithChildren } from "react";
import { Column, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { roundNumber } from "@/utils/numbers";
import { GithubReleases, Tool } from "../../data/type";

export const columns: ColumnDef<Tool>[] = [
  {
    accessorFn: (originalRow: Tool) =>
      originalRow.name ?? originalRow.githubData?.name,
    id: "name",
    header: "Name",
  },
  {
    accessorFn: (originalRow: Tool) => originalRow.npmData?.downloads,
    id: "downloads",
    header: ({ column }) => {
      return <SortingBtn column={column}>Downloads</SortingBtn>;
    },
    cell: ({ row }) => {
      const downloads = (row.getValue("downloads") as number) || undefined;
      return <div>{roundNumber(downloads)}</div>;
    },
  },
  {
    accessorFn: (originalRow: Tool) => originalRow.githubData?.stargazers_count,
    id: "stars",
    header: ({ column }) => {
      return <SortingBtn column={column}>Stars</SortingBtn>;
    },
    cell: ({ row }) => {
      const stars = (row.getValue("stars") as number) || undefined;
      return <div>{roundNumber(stars)}</div>;
    },
  },
  {
    accessorFn: (originalRow: Tool) =>
      originalRow.githubData?.open_issues_count,
    id: "issues",
    header: ({ column }) => {
      return <SortingBtn column={column}>Issues</SortingBtn>;
    },
    cell: ({ row }) => {
      const issues = (row.getValue("issues") as number) || undefined;
      return <div>{roundNumber(issues)}</div>;
    },
  },
  {
    accessorFn: (originalRow: Tool) => {
      return originalRow.githubData?.releases
        ?.filter((r) => !r?.prerelease && !r?.draft)
        ?.sort((a, b) =>
          new Date(b?.published_at ?? "") > new Date(a?.published_at ?? "")
            ? 1
            : -1
        );
    },
    id: "releases",
    header: ({ column }) => {
      return <SortingBtn column={column}>Last release</SortingBtn>;
    },
    cell: ({ row }) => {
      const releases =
        (row.getValue("releases") as GithubReleases[]) || undefined;
      return (
        <div>
          {releases?.[0]?.published_at
            ? new Date(releases[0].published_at).toLocaleDateString("en-GB")
            : undefined}
        </div>
      );
    },
  },
];

const SortingBtn = ({
  column,
  children,
}: PropsWithChildren<{ column: Column<Tool, unknown> }>) => {
  return (
    <Button
      variant="link"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="px-0 !text-gray-400 hover:!text-gray-50"
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
