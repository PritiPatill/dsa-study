/*
 * Add Digits
 */

function add(num){
    let add = 0
    while(num !=0){
      add = parseInt(num%10) + add
      num = parseInt(num/10)
    }
    return add
}
  
var addDigits = function(num) {
    let n = num
    while(n >= 10){
    n = add(n)
    }
    return n
};

// Time complexity = O(1)