// var arr=["cricket","tennis","chess"];
// // var length=arr.length;
// console.log(arr.length)


// var arr=["papaya","banana","apple"];
// arr.push("mango");
// console.log(arr)

// var arr=["kajal","anushka","keerthi suresh","nithyameenan"];
// arr.pop();
// console.log(arr)

// var arr=["prabhas","maheshbabu","nithin","pavankalyan"];
// arr.unshift("alluarjun");
// console.log(arr)

// var arr=["prabhas","maheshbabu","nithin","pavankalyan"];
// arr.shift();
// console.log(arr)

// var arr=["prabhas","maheshbabu","nithin","pavankalyan"];
// arr.reverse();
// console.log(arr)


// var arr=["prabhas","maheshbabu","nithin","pavankalyan"];
// console.log(arr.indexOf("maheshbabu"))


// var arr=["prabhas","maheshbabu","nithin","pavankalyan"];
// console.log(arr.includes("nithin"))


// var arr=[3,5,4,2,1];
// console.log(arr.sort())

  var arr=[1,2,3,4,5];
  var str=arr.join(",");
  console.log(str)

// Write a code snippet that adds an element to the end of an array, then removes the first element.

// var arr=["pineaple","kivi","guava"];
// arr.push("mango")
// console.log(arr)
// arr.shift();
// console.log(arr)


// How can you reverse an array and then join the elements into a string?

var arr=["pineaple","kivi","guava"];
arr.reverse();
console.log(arr)
var str=arr.join("")
console.log(str)


// Write a code that first sorts an array in ascending order, then removes the last element.
var arr=[7,8,5,9,3,1,2];
arr.sort()
console.log(arr)
arr.pop()
console.log(arr)

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

var arr=["meghana","cholleti","siddi"];
arr.unshift("vennela","samyukatha")
console.log(arr)
arr.shift()
console.log(arr)
var length=arr.length
console.log(length)

// How do you combine two arrays, sort the combined array, and then remove the last element?
var arr=["meghana","cholleti","siddi"]
var arr1=["sam","vennela"]
var combine_arr=arr.concat(arr1);
combine_arr.sort();
combine_arr.pop();
console.log(combine_arr)
