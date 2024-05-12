while (true) {
    // Prompting the user for weight in kilograms
    const mass = parseFloat(prompt('Enter your mass in Kg:'));

    // Prompting the user for height in feet and inches
    const feet = parseInt(prompt('Enter your height in feet:'));
    const inches = parseInt(prompt('Enter the remaining inches of your height:'));

    // Converting feet and inches to centimeters
    const heightInCm = (feet * 12 + inches) * 2.54;

    // Calculating BMI
    const bmi = mass /(heightInCm / 100)**2;

    // Providing BMI category based on the calculated BMI
    if (bmi < 18.5) {
        alert('Your are underweight.');
    } else if (bmi < 25) {
        alert('Your weight is normal.');
    } else if (bmi < 30) {
        alert('Your are overweight.');
    } else {
        alert('Your are obese.');
    }

    // Asking if the user wants to continue
    const answer = prompt('Would you like to continue? (Yes/No)').toLowerCase();
    if (answer !== 'yes') {
        break;
    }
}



