// Write a code on how to calculate the number of vowels and consonants in a string? (Use Javascript only)

const myString = 'FrontEndDeveloperDev';
let count = 0;
const vowel = ['a', 'e', 'i', 'o', 'u'];

for (let xyz of myString.toLowerCase()) {
    if (vowel.includes(xyz)) {
        count++;
    }
}
const TotalVowel = count
const consonant = myString.length - TotalVowel;

console.log(TotalVowel, consonant);