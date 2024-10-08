/**
 * You are given a 3-digit number n, Find whether it is an Armstrong number or not.
 */


function armstrongNumber(n) {
    let num = n
    let rem = 0
    let sum = 0
    while(num != 0){
      rem = parseInt(num % 10)
      sum = sum + (rem * rem * rem)
      num = parseInt(num/10)
    }
    if(sum == n) return true
  
    return false
  }
  
  console.log(armstrongNumber(372))

//   Time complexity = O(1)