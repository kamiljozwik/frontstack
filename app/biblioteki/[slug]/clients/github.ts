import { GithubReleases, GithubRepoData } from "../../type";

export const githubClient = async (url?: string) => {
  if (!url) return undefined;

  const splitted = url?.split("/").filter(Boolean);
  const length = splitted.length;

  const owner = splitted[length - 2];
  const name = splitted[length - 1];

  if (
    process.env.NODE_ENV !== "production" ||
    process.env.VERCEL_ENV !== "production"
  ) {
    return mockData(name);
  }

  try {
    const repoData = await fetch(
      `https://api.github.com/repos/${owner}/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!repoData.ok) {
      console.log("⚠️ Can't fetch repo data for:", url);
      return undefined;
    }

    const githubRepoData = (await repoData.json()) as GithubRepoData;

    const releases = await fetch(
      `https://api.github.com/repos/${owner}/${name}/releases?per_page=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (!releases.ok) {
      console.log("⚠️ Can't fetch releases data for:", url);
      return { ...githubRepoData };
    }

    const githubReleases = (await releases.json()) as GithubReleases[];

    return { ...githubRepoData, releases: githubReleases };
  } catch (error) {
    console.log("💥 Can't fetch GitHub data for: ", url);
    return undefined;
  }
};

const mockData = (name: string) => {
  return {
    name,
    description: "Lorem Ipsum",
    stargazers_count: Math.floor(Math.random() * 1000),
    language: "TypeScript",
    homepage: "https://google.com",
    open_issues_count: Math.floor(Math.random() * 100),
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
    },
    releases: [
      {
        published_at: randomDate(),
      },
    ],
  } as GithubRepoData;
};

function randomDate(start = new Date(2021, 0, 1), end = new Date()) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
}
