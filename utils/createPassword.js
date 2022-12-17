const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='



import { generatePassword} from "./generatePassword.js";

export const createPassword = (length = 30, hasSymbols = true) => {
    let chars = lowercase + uppercase + numbers

    hasSymbols ? (chars += symbols) : ''

    return generatePassword(length, chars)
}

