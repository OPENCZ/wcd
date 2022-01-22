const fs = require("fs");
const path = require("path");

let result = {};

fs.readdirSync(path.resolve(__dirname, "../src")).forEach(async (dir) => {
  if (dir !== "base" && dir !== "utils" && !dir.includes(".")) {
    fs.readdirSync(path.resolve(__dirname, `../src/${dir}`)).forEach((file) => {
      !file.includes(".") ? (result[file] = `src/${dir}/${file}/index.js`) : "";
    });
  }
});

export default result;
