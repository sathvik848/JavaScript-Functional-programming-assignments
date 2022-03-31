//function to return square of function
square = x => x*x;

// find takes x : array and fun : a funtion
//it performs the task defined in fun on every elemenr and returns the result as new array
map = function (x,fun) {
	let ar=[];
	for(let i of x)
  {
 		ar.push(fun(i));
  }
  return ar;
}

var array = [1, 3, 5, 4, 2];

// calling map with square function
console.log(map(array, square));

//Original array is unaltered
console.log("Original : "+array);

// calling map with Math library sqrt function
console.log(map(1, 4, 9, 16, 25, Math.sqrt));
