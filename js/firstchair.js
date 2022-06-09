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

const testCapital = new Capital('Viedma', 'Rio Negro');

function Capital (city, province) {
    this.city = city;
    this.province = province;
    this.getCity = function () {
        return `${this.city}`;
    }
    this.getProvince = function () {
        return `${this.province}`;
    }
    this.getCityAndProvince = function () {
        return `${this.city} ${this.province}`;
    }
}

Capital.prototype.setCity = function () {
    console.log('Santa Rosa') 
}
Capital.prototype.setProvince = function () {
    console.log('La Pampa');
}
Capital.prototype.getNewCityAndProvince = function () {
    console.log('Santa Rosa, La Pampa');
}



console.log(Object.keys(testCapital).length);
console.log(testCapital instanceof Capital);
console.log(testCapital.getCity());
console.log(testCapital.getProvince());
console.log(testCapital.getCityAndProvince());
console.log(testCapital.setCity());
console.log(testCapital.setProvince());
console.log(testCapital.getNewCityAndProvince());












