import * as crypto from "crypto";

function generate(length: number = 16) : string {
    const uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
    const numbers: string = "0123456789";
    const symbols: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const all: string = uppercase + lowercase + numbers + symbols;
    let password: string = "";
    for (let index: number = 0; index < length; index++) {
      const randomNumber: number = crypto.randomInt(all.length);
      password += all.charAt(randomNumber);
    }
    return password;
}