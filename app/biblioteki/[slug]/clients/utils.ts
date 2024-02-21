// export const isLocal = () => false;

export const isLocal = () =>
  process.env.NODE_ENV !== "production" ||
  process.env.VERCEL_ENV !== "production";
