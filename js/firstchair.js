// First Challenge //
// here I am transforming the arguments object into an array with shift I get the first element of the array 
//this returns me a new array which goes through each element and asks if that element is included in the args, 
//if it is not included then I add it to the new array that returns filter//

function arrayCleaner(arr, value) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return arr.filter(function (element) {
        return args.indexOf(element) === -1;
    });
}

console.log(arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3));

// Second Challenge //
//first I pass the entire string to lowercase and then I do a regular expression to replace spaces, underscores and so on, 
//then I do a split that will generate an array with each 
//element separated by whitespace and then I do a join with what will return a string with all the elements joined by the//

function spinalCaseConverter(str) {
    let camelCaseHandled = str.toLowerCase().replace(/\s|_|-/g, " ").split(' ').join('-');;
    let spacesAndDashedHAndled = camelCaseHandled.replace(/\s|_/g, "-")
    return spacesAndDashedHAndled;
}

let result = spinalCaseConverter('CONVERT-This-text-To-SpInalCase');

console.log(result);

// Third Challenge //
//here the exercise said that the capital object should only receive a single parameter which is a string which puts province and city 
//separated by commas but in a single string so a single argument//
//then with the split I separate from the string the parts separated by the comma and I keep the first one that was city//
//I´creating a kind of private variable of the object that I will be able to use in the methods but that is not a property of the object//
class Capital {
    constructor(place) {
        var _city = place.split(',')[0];
        var _province = place.split(',')[1];
        this.getCity = function () {
            return _city;
        }
        this.getProvince = function () {
            return _province.trim();
        }
        this.getCityAndProvince = function () {
            return `${_city}, ${_province}`;
        }
        this.setCity = function (newCity) {
            _city = newCity
        }
        this.setProvince = function (newProvince) {
            _province = newProvince
        }
        this.setCityAndProvince = function (newPlace) {
            _city = newPlace.split(',')[0];
            _province = newPlace.split(',')[1];
        }
    }
}

//The rest of the excersice said to use the methods 
//and that ones are able to be used from outside of the object thats why i can use testCapital.getcity()//

const testCapital = new Capital('Viedma, Rio Negro');


console.log(Object.keys(testCapital).length);
console.log(testCapital instanceof Capital);
console.log(testCapital.getCity());
console.log(testCapital.getProvince());
console.log(testCapital.getCityAndProvince());
console.log(testCapital.setCity("Santa Rosa"));
console.log(testCapital.getCity());
console.log(testCapital.getCityAndProvince());
console.log(testCapital.setProvince("La Pampa"));
console.log(testCapital.getCityAndProvince());