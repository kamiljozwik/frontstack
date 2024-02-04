import { GithubReleases, GithubRepoData } from "../../data/type";

export const githubClient = async (url?: string) => {
  if (!url) return undefined;

  const splitted = url?.split("/").filter(Boolean);
  const length = splitted.length;

  const owner = splitted[length - 2];
  const name = splitted[length - 1];

  // TODO: use mock data for development
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

    // TODO: use mock data for development
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
