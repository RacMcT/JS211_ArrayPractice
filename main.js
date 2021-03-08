//String Array with 4 cars- must contain "Ford" as [0] and include somewhere "Honda"
const cars = ["Ford" , "Honda" , "Toyota" , "Jaguar"];
console.log(cars);
console.log(cars.length);

//Create another array called, "moreCars" with 4 more types of cars, last should be "Honda"
//concat combines cars and moreCars arrays into array called totalCars

const moreCars = ["Tesla" , "Aston Martin", "Porsche", "Honda"];
console.log(moreCars);
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// Use the indexOf method to console.log the index of Honda
// Use the lastIndexOf method to console.log the index of Ford
//Ask if he wants us to loop through for both times it shows a "Honda"?

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = console.log(totalCars.join(', '));

// // Use the split method to convert stringOfCars back intro an array called totalCars.
// let totalCars = stringOfCars.split(", ");
//error because already declared totalCars

// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

let carsInReverse = console.log(totalCars.reverse());

// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
//   alert(carsInReverse.indexOf('yourPrediction'));
// Run the program.



