// First Challenge //
function arrayCleaner(arr, value) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return arr.filter(function (element) {
        return args.indexOf(element) === -1;
    });
}

console.log(arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3));

// Second Challenge //

function spinalCaseConverter(str) {
    let camelCaseHandled = str.replace(/([a-z]) ([A-Z])/g, "$1 $2");
    let spacesAndDashedHAndled = camelCaseHandled.replace(/\s|_/g, "-")
    return spacesAndDashedHAndled;
}

let result = spinalCaseConverter('CONVERT-This-text-To-SpInalCase');

console.log(result);

// Third Challenge //

class Capital {
    constructor(place) {
        var _city = place.split(',')[0];
        var _province = place.split(',')[1];
        this.getCity = function () {
            return _city;
        }
        this.getProvince = function () {
            return _province;
        }
        this.getCityAndProvince = function () {
            return `${_city}, ${_province}`;
        }
        this.setCity = function(newCity) {
            _city = newCity
        }
        this.setProvince = function(newProvince) {
            _province = newProvince
        }
        this.setCityAndProvince = function(newPlace) {
            _city = newPlace.split(',')[0];
            _province = newPlace.split(',')[1];
        }
    }
}


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
















