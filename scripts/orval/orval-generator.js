const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');

const ORVAL_PATH =
  'https://api-dev-xcroll-fyhvc8ezcfa4a7be.koreacentral-01.azurewebsites.net/schema';
// eslint-disable-next-line no-undef
const oravlConfigPath = path.join(__dirname, './orval.config.js');

async function genOpenApiFile() {
  const response = await axios.get(ORVAL_PATH);

  // eslint-disable-next-line no-undef
  await fs.writeFile(path.join(__dirname, '/openapi.yaml'), JSON.stringify(response.data, null, 2));
}

function runOrvalCommand() {
  return new Promise((resolve, reject) => {
    console.log('Config: ', oravlConfigPath);
    exec(`npx orval generate --config ${oravlConfigPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        console.log(error);
        return;
      }
      resolve(stdout);
    });
  });
}

async function main() {
  await genOpenApiFile();
  await runOrvalCommand();
  console.log('Orval generation is done!');
}

main();
