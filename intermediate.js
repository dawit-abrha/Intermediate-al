// 1. find the largest number from array
// define an array
// apply for loop
//find the large number
// put the value to the new array
// print the new array
let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
let newArr  = [];
for(let  i = 0; i < arr.length; i++) {
  let max = arr[i][0];
  for( let j  = 0; j < arr[i].length; j++){
    if(arr[i][j] > max) {
      max = arr[i][j];
    }
  }
  newArr.push(max);

}
console.log(newArr);

//2.  find the longest word in the array
// define function that finds the long word from array
// convert the string to an array 
//apply for loop to iterate through the array
//check the length of the array elements
//return the longest word.

function findLong(str){
  let max = 0;
  let arr = str.split(' ');
  for(let i = 0 ; i< arr.length ; i++){
    if( max < arr[i].length){
      max = arr[i].length;
    }
  }
  return max;
}
let  str = "this course is  about the js programming language";
console.log(findLong(str));

// 3. Title Case
// define function that converts the string to title case
//  convert the string to an array
// apply for loop
// convert the string  to lower case
//print the output
function titleCase(srt){
  let arr = str.toLowerCase().split(' ');
  for( let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}
let str = "i am the man of the match";
console.log(titleCase(str));


//4. finding the the sum of any range
// define function  that finds the sum of any range
//declare sum to zero
//apply for loop
// add the number to the sum
//return the sum

function sumRange(arr){
  let sum = 0;
  for( let i = Math.min(...arr) ;  i <= Math.max(...arr) ; i++){
    sum += i;
  }
  return sum;

}
let arr = [10,5];
console.log(sumRange(arr));

// 5. find the nth of fibonacci
// define function that finds the nth of fibonacci
// declare a and b to 0 and 1
// apply for loop
function  fibonacci(n){
    let seq =1;
    let seq1 =0;
    let seq2 =0;
    
    for( let i = 2; i < n ; i++){
     seq2 = seq1;
     seq1 = seq;
     seq = seq1 + seq2;
    }
    return  seq;
   }
   console.log(fibonacci(4));
   