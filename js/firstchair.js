// First Challenge//
function arrayCleaner (arr, value) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return arr.filter(function(element) {
      return args.indexOf(element) === -1;
    });
  }
   
 console.log(arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3));

 // Second Challenge//

 function spinalCaseConverter(str) {
     let camelCaseHandled = str.replace(/([a-z]) ([A-Z])/g, "$1 $2");
     let spacesAndDashedHAndled = camelCaseHandled.replace(/\s|_/g, "-")
    return spacesAndDashedHAndled.toLowerCase();
  }

  let result = spinalCaseConverter('CONVERT-This-text-To-SpInalCase');
  
  console.log(result);
  
 