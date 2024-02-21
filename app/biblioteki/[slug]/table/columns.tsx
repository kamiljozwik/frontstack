"use client";

import { PropsWithChildren } from "react";
import { Column, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { roundNumber } from "@/utils/numbers";
import { GithubReleases, Tool } from "../../type";
import { ExternalLink } from "@/app/components/externalLink/ExternalLink";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export const columns: ColumnDef<Tool>[] = [
  {
    id: "name",
    accessorFn: (originalRow: Tool) =>
      originalRow.name ?? originalRow.githubData?.name,
    header: "Name",
    cell: ({ row }) => {
      const logo = row.original.githubData?.owner?.avatar_url;
      return (
        <ExternalLink
          href={row.original.website ?? row.original.github ?? row.original.npm}
          className="text-white flex gap-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {logo && <img src={logo} alt="logo" width={20} />}
          {row.getValue("name")}
        </ExternalLink>
      );
    },
  },
  {
    id: "downloads",
    accessorFn: (originalRow: Tool) => originalRow.npmData?.downloads ?? 0,
    header: ({ column }) => {
      return <SortingBtn column={column}>Downloads</SortingBtn>;
    },
    cell: ({ row }) => {
      const downloads = (row.getValue("downloads") as number) || undefined;
      return row.original.npm ? (
        <ExternalLink
          href={`https://www.npmjs.com/package/${row.original.npm}`}
          className="text-white"
        >
          {roundNumber(downloads)}
        </ExternalLink>
      ) : (
        "—"
      );
    },
  },
  {
    id: "stars",
    accessorFn: (originalRow: Tool) =>
      originalRow.githubData?.stargazers_count ?? 0,
    header: ({ column }) => {
      return <SortingBtn column={column}>Stars</SortingBtn>;
    },
    cell: ({ row }) => {
      const stars = (row.getValue("stars") as number) || undefined;
      return row.original.github ? (
        <ExternalLink href={row.original.github} className="text-white">
          {roundNumber(stars)}
        </ExternalLink>
      ) : (
        "—"
      );
    },
  },
  {
    id: "issues",
    accessorFn: (originalRow: Tool) =>
      originalRow.githubData?.open_issues_count ?? 0,
    header: ({ column }) => {
      return <SortingBtn column={column}>Issues</SortingBtn>;
    },
    cell: ({ row }) => {
      const issues = (row.getValue("issues") as number) || undefined;
      return row.original.github ? (
        <ExternalLink
          href={`${row.original.github}/issues`}
          className="text-white"
        >
          {roundNumber(issues)}
        </ExternalLink>
      ) : (
        "—"
      );
    },
  },
  {
    id: "license",
    accessorFn: (originalRow: Tool) => {
      return originalRow.githubData?.license?.name;
    },
    header: "License",
    cell: ({ row }) => {
      const license = row.original.githubData?.license;

      return license?.url ? (
        <ExternalLink href={license?.url} className="text-white">
          {license?.spdx_id || license?.name}
        </ExternalLink>
      ) : (
        "—"
      );
    },
  },
  {
    id: "releases",
    accessorFn: (originalRow: Tool) => {
      return getLastRelease(originalRow.githubData?.releases)?.published_at;
    },
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={18} className="mr-1" />
              </TooltipTrigger>
              <TooltipContent>
                <>
                  Data ostatniego releasu pobierana jest z GitHuba, więc czasami
                  może nie pokrywać się z informacją w npm. Pracuję nad tym 🛠️
                </>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SortingBtn column={column}>Last release</SortingBtn>
        </div>
      );
    },
    cell: ({ row }) => {
      const lastRelease = row.getValue("releases") as string | undefined;
      const isOld =
        new Date(lastRelease ?? "") <
        new Date(new Date().setFullYear(new Date().getFullYear() - 2));

      return (
        <div>
          {lastRelease ? (
            <div className="flex items-center">
              <ExternalLink
                className="text-white"
                href={`${
                  getLastRelease(row.original.githubData?.releases)?.html_url
                }/tags`}
              >
                {new Date(lastRelease).toLocaleDateString("en-GB")}
              </ExternalLink>
              <span title="Possibly not maintained!" className="text-xs">
                {isOld && "⚠️"}
              </span>
            </div>
          ) : (
            <ExternalLink
              className="text-gray-400"
              href={`${row.original.github}/tags`}
            >
              Check tags
            </ExternalLink>
          )}
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

const getLastRelease = (releases?: GithubReleases[]) => {
  return releases
    ?.filter((r) => !r.prerelease && !r.draft)
    .sort((a, b) =>
      new Date(b.published_at ?? "") > new Date(a.published_at ?? "") ? 1 : -1
    )[0];
};
