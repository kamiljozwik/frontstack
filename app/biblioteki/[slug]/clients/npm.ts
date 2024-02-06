import { NpmData } from "../../type";

export const npmClient = async (npm?: string) => {
  if (!npm) return undefined;

  if (
    process.env.NODE_ENV !== "production" ||
    process.env.VERCEL_ENV !== "production"
  ) {
    return {
      downloads: Math.floor(Math.random() * 1000),
    } as NpmData;
  }

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
