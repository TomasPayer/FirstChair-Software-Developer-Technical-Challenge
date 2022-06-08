# FirstChair-Software-Developer-Technical-Challenge

Challenge #2: JavaScript Challenge

1)Using JavaScript, write a program that can solve the following requirements. You can use a web-based JavaScript Online Compiler such as Programiz to write and test your code.
Array Cleaner: You will be provided with an initial array (the first argument in the arrayCleaner function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.

function arrayCleaner(arr) 
{

   // Add Logic
   return arr;
   
}

arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3);

 
To test your code, if the following code snippet is run, you should get the following results:

console.log(arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3); // Returns [1, 1]
console.log(arrayCleaner(["tree", "taco", 53], "tree", 53)); // Returns ["taco"]
console.log(arrayCleaner([2, 3, 2, 3], 2, 3)); // Returns []

 
2)Spinal Case Converter: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCaseConverter(str) {
  return str;
}

spinalCaseConverter('CONVERT_This text To SpInal-Case');

 
To test your code, if the following code snippet is run, you should get the following results:

console.log(spinalCaseConverter("CONVERT_This text To SpInal-Case")); // Returns “convert-this-text-to-spinal-case”

console.log(spinalCaseConverter("AllThe-small Things")); // Returns “all-the-small-things”

 
3)Capital Object Constructor: Build out a constructor function for the Capital object that accepts a single string parameter that represents a Capital City and Province in which it is located (i.e. “Viedma, Rio Negro”). While the object should not have any properties, it should have the following 6 methods:

getCity() // Returns City
getProvince() // Returns Province
getCityAndProvince() // Returns City and Province
setCity(city) // Sets new City
setProvice(province) // Sets new Province
setCityAndProvince(cityAndProvince) // Sets new City and Province

If the following code snippet is run, you should get the following results:
const testCapital = new Capital('Viedma, Rio Negro');

console.log(Object.keys(testCapital).length); // Returns 6
console.log(testCapital instanceof Capital); // Returns true


console.log(testCapital.getCity()); // Returns “Viedma”
console.log(testCapital.getProvince()); // Returns “Rio Negro”
console.log(testCapital.getCityAndProvice()); // Returns “Viedma, Rio Negro”


console.log(testCapital.setCity(“Santa Rosa”));
console.log(testCapital.getCity()); // Returns “Santa Rosa”
console.log(testCapital.getCityAndProvince()); // Returns “Santa Rosa, Rio Negro”
console.log(testCapital.setProvince(“La Pampa”));
console.log(testCapital.getCityAndProvince()); // Returns “Santa Rosa, La Pampa”

