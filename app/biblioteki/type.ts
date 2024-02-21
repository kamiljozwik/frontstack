export type Tool = {
  name?: string;
  github?: string;
  npm?: string;
  website?: string;
  githubData?: GithubRepoData;
  npmData?: NpmData;
};

export type GithubRepoData = {
  name: string;
  description?: string;
  stargazers_count: number;
  size?: number;
  homepage?: string;
  language: string;
  open_issues_count: number;
  owner?: {
    avatar_url?: string;
  };
  license?: {
    key: string;
    name?: string;
    spdx_id?: string;
    url?: string;
  };
  releases?: GithubReleases[];
};

export type GithubReleases = {
  html_url?: string;
  tag_name?: string;
  name?: string;
  draft?: string;
  prerelease?: string;
  created_at?: string; // "2022-06-14T19:51:27Z",
  published_at?: string; // "2022-06-14T19:54:21Z",
};

export type NpmData = {
  downloads: number;
  start: string;
  end: string;
  package: string;
  lastReleaseDate: string;
};
