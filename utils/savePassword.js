import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const savePassword = (password, filename) => {
const filepath =path.join( __dirname, '../', filename)


        fs.writeFile(filepath, password + os.EOL , { flag: 'a' },  (err) => {

console.error(err)
                console.log(chalk.green(`Password saved to ${filename}`))
    })
}
