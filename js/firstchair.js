// First Challenge//
function arrayCleaner (arr, value) {

    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return arr.filter(function(element) {
      return args.indexOf(element) === -1;
    });
  }
   
 console.log(arrayCleaner([1, 2, 3, 1, 2, 3], 2, 3));
 