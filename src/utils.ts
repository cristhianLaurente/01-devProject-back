import * as fs from "fs";

// This file is just for utils function

export const readFile = (path: fs.PathLike) =>
  new Promise<string>((resolve, reject) => {
    fs.readFile(path, "utf8", (err, contents) => {
      if (err) {
        reject(err);
      }
      resolve(contents);
    });
  });
