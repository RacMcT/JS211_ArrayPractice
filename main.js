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

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

// Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(', ');
console.log(stringOfCars);

// Use the split method to convert stringOfCars back intro an array called totalCars.
totalCars = stringOfCars.split(", ");

//Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
//   alert(carsInReverse.indexOf('yourPrediction'));

carsInReverse.sort();
console.log(carsInReverse);
expectedCars= ["Aston Martin", "Ford", "Honda", "Honda", "Jaguar", "Porsche", "Tesla", "Toyota"]
alert(carsInReverse.indexOf("Aston Martin"))


//Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars 
//**BUT SLICE DOES NOT CHANGE THE ORIGINAL ARRAY?!?!**

carsInReverse.slice(1,3);
removedCars = carsInReverse.slice(1,3);
console.log(removedCars);

//Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place. 
//**BECAUSE SLICE DID NOT CHANGE ORIGINAL ARRAY, THIS JUST DUPLICATES IN THE ORIGINAL ARRAY

carsInReverse.splice(1, 0, "Ford", "Honda");
console.log(carsInReverse);

//Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

carsInReverse.push("Ford", "Honda");
console.log(carsInReverse);

//Use the pop method to remove and console.log the last item in the array carsInReverse.

carsInReverse.pop();
console.log(carsInReverse);

//Use the shift method to remove and console.log the first item in the array carsInReverse.


