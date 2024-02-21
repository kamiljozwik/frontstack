import path from "path";
import fs from "fs";

const toolsDirectory = path.join(process.cwd(), "app", "biblioteki", "data");

const getFilenames = () =>
  fs.readdirSync(toolsDirectory).map((name) => name.replace(".ts", ""));

export { getFilenames };
