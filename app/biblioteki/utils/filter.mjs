import fs from "fs";
import data from "./contentful.json" assert { type: "json" };

const gg = data
  .filter((item) => item.subcategory === "js_animations")
  .map((item) => {
    return {
      github: item.github,
      website: item.website,
      npm: item.npm?.replace("https://www.npmjs.com/package/", ""),
    };
  });

// save to file
fs.writeFileSync("./filtered.json", JSON.stringify(gg, null, 2));
