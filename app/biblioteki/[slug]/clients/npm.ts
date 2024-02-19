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

  // https://registry.npmjs.org/${packageName}/latest // m.in dependencies / homepage / repository / bugs / license
  // https://registry.npmjs.org/${packageName} // wszystkie możliwe dane, ale b. duży response

  try {
    const npmData = await fetch(
      `https://api.npmjs.org/downloads/point/last-week/${npm}`
    );
    const downloads = await npmData.json();

    if (!npmData.ok) {
      console.log("⚠️ Can't fetch NPM data for:", npm);
      return undefined;
    }

    return { ...downloads } as NpmData;
  } catch (error) {
    console.log("💥 Can't fetch NPM data for: ", npm);
    return undefined;
  }
};
