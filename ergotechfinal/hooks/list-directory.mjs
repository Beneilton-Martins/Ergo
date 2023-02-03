import { readdir } from 'fs';

const dir = "/Users/nca/Documents/GitHub/ErgoTech-0.0.2/ProjetoTeste/ergotechfinal/src";

readdir(dir, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      console.log(file);
    })
  }
})