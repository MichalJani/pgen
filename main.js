#!/usr/bin/env node

import {program} from 'commander';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
const log = console.log
import  {createPassword} from './utils/createPassword.js';
import  {savePassword} from './utils/savePassword.js';

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '30')
    .option('-s, --save [path]', 'save password to [passwords.txt]' )
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-nc, --no-clipboard', 'do not copy to clipboard')
    .option('-np, --no-print', 'do not print')
    .parse()

const { length, save,clipboard,print,  symbols } = program.opts()

const generatedPassword = createPassword(length, symbols)

if (save) {




    let filename = 'passwords.txt'
    if(typeof save ==='string'){
       filename=save
    }

    savePassword(generatedPassword,filename )
}

if(print){
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
}


if(clipboard) {
clipboardy.writeSync(generatedPassword)
log(chalk.yellow('Password copied to clipboard'))
}

