const fs = require('fs');

export function listImg(tombId) {
  const filesList = [];
  fs.readdir(`assets/${tombId}`, (err, files) => {
    files.forEach(file => {
        filesList.push(file);
    });
  });
  return filesList;
}
