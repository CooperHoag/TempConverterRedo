// prompt user to enter F
// prompt('Provide a temp in F');
// create function to convert F to C
// (x°F − 32) × 5/9 = C

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9);
}
// console.log(convertToCelsius(65));

// Prompt the user to provide a temperature in Fahrenheit. 
const userInputFahrenheit = prompt(`Enter a degree in Fahrenheit:`);

// write a function that takes the F and returns a description according to README table
const celsius = convertToCelsius(userInputFahrenheit);

function describeTemperature(celsius) {
  if (celsius < 0) {
    return `very cold!`;
  } else if (celsius < 20) {
    return `cold!`;
  } else if (celsius < 30) {
    return `warm!`;
  } else if (celsius < 40) {
    return `hot!`;
  } else if (celsius >= 40) {
    return `very hot!`;
  }
}

// console.log(describeTemperature(celsius));

// Then, alert them with a message that tells them the 
// equivalent temperature in Celsius alongside a description 
// of what that temperature would feel like.
const description = describeTemperature(celsius)
alert(`That means it is ${celsius.toFixed(1)}C and it is ${description}`)

