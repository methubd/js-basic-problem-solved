// 1. Reverse Letter
const reverseString = (string) => {
    let letters = '';

    for(i = string.length - 1; i >= 0; i--){
        const reverseLetters = string[i];  
        letters = letters + reverseLetters;
    }

    return letters;
}

const string = "cum cum";
const reversedString = reverseString(string);
// console.log(reversedString);

// 2. Sum Only Positives Numbers
const sumPositiveFigure = (figures) => {
    
    let sum = 0;
    for (const figure of figures){
        if(figure > 0){
            sum = figure + sum;
        }
    }
    return sum;
}

const figures = [3, 5, -6, 3, -2];
const totalSum = sumPositiveFigure(figures);
// console.log(totalSum);

// 3. Most frequent element in an array

const findFrequentElement = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) return null;

    const frequencyMap = {};
    let mostFrequentNumber = null;
    let maxFrequency = 0;

    for (const number of numbers) {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            mostFrequentNumber = number;
        }
    }

    return mostFrequentNumber;
};


const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequentNumber = findFrequentElement(numbers);
// console.log(mostFrequentNumber);


// 4. Simple JS Calculator
const jsCalculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;

        default:
            break;
    }
}

const calculatedResult = jsCalculator(5, 2, '-')
// console.log(calculatedResult);

// 5. Generate Random Password
const generateRandomPassword = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharecters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const allLetters = uppercaseLetters + lowercaseLetters + numbers + specialCharecters;

    let generatedPassword = '';
    for (let i = 0; i < 8; i++) {
        const random = Math.round(Math.random() * allLetters.length);
        generatedPassword += allLetters[random];
    }

    return generatedPassword;
};

const givenPassword = generateRandomPassword();
// console.log(givenPassword);

// 6. Roman to Number Converter
const romanToNumber = (inputNumber) => {
    const romanIdentities = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    let result = 0;
    let prevValue = 0;
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const currentNumber = inputNumber[i];
        const currentValue = romanIdentities[currentNumber];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
};

const convertedNumber = romanToNumber('XXL')
// console.log(convertedNumber);


