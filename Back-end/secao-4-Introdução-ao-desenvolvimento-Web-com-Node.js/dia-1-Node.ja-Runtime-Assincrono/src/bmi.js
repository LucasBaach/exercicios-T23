const readL = require('readline-sync');

function bodyMassIndex(weight, height) {

    const meterConversion = height / 100;
    const meterHeight = meterConversion ** 2;

    const bmi = weight / meterHeight;
    return bmi;
}

const tableBMI = {
    'Underweight': {
        minBMI: 0,
        maxBMI: 18.4,
    },
    'Normal Weight': {
        minBMI: 18.5,
        maxBMI: 24.9,
    },
    'Overweight': {
        minBMI: 25,
        maxBMI: 29.9,
    },
    'Obese Class I': {
        minBMI: 30.0,
        maxBMI: 34.9,
    },
    'Obese Class II': {
        minBMI: 35,
        maxBMI: 39.9,
    },
    'Obese Class III': {
        minBMI: 40,
        maxBMI: 100, 
    },
};

function handleBMI (bmi) {

    const keysObj = Object.keys(tableBMI);
    const status = keysObj.find((item) => {
        const { minBMI, maxBMI } = tableBMI[item];

        return bmi >= minBMI && bmi <=maxBMI;
    }) 

    return status;
}

function main() {
    const weight = readL.questionFloat('What`s your weight?');
    const height = readL.questionInt('What`s your height?');
    const bmi = bodyMassIndex(weight, height);
    const results = handleBMI(bmi);
    console.log(results);
    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();