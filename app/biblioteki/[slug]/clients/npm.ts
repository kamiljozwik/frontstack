import { NpmData } from "../../data/type";

export const npmClient = async (npm?: string) => {
  if (!npm) return undefined;

  // TODO: use mock data for development
  try {
    const npmData = await fetch(
      `https://api.npmjs.org/downloads/point/last-week/${npm}`
    );

    if (!npmData.ok) {
      console.log("⚠️ Can't fetch NPM data for:", npm);
      return undefined;
    }

    return (await npmData.json()) as NpmData;
  } catch (error) {
    console.log("💥 Can't fetch NPM data for: ", npm);
    return undefined;
  }
};
