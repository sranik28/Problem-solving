// Write a code to calculate if the string is palindrome ? (Use javascript only)

let value = '121';

const revValue = () => {
    let reverseValue = value.split('').reverse().join('');
    if (reverseValue === value) {
        console.log('Palindrome is true')
    }
    else {
        console.log('palindrome is false')
    }
};

revValue()