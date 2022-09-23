//Imported from Grasshopper, saved as a snippet.
/*
	Meet the website: https://learn.grasshopper.com
*/
var Person = (name, gender, age) => {
    console.log('Hello there!');
    // document.write('Hello there!');
    console.log('My name is ' + (name + '!'));
    // document.write('My name is ' + (name + '!'));
    console.log('I am a ' + (gender + '.'));
    // document.write('I am a ' + (gender + '.'))
    console.log('I am ' + (age + ' years old!'));
    // document.write('I am ' + (age + ' years old!');
    //If your age is less than (or equal to) 5, you are a baby.
    if (age <= 5) {
        console.log('I am a baby.');
    }
    //If your age is greater than 5 and less than 13, you are learning so much in your school!
    if (age > 5 && age < 13) {
        console.log('I\'m a big ' + (gender + ', now!'));
    }
    //If your age is greater than (or equal to) 13 and less than 18, You are a teenager.
    if (age >= 13 && age < 18) {
        console.log('I\'m a teenager, now!');
    }
    //If your age is greater than (or equal to) 18, you are (almost) an adult!
    if (age >= 18 || age >= 25) {
        console.log('I am an adult, now!');
    }
};
