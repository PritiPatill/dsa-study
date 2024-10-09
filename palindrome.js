/**
 * Sum of Digit is Pallindrome or no
 */

function isDigitSumPalindrome(n){
    let num = n, add = 0, revNum=0
    while(num !=0){
        add = parseInt(num%10) + add
        num = parseInt(num/10)
    }
  
    let num1 = add 
    while(num1 != 0){
      revNum = parseInt(num1%10) + revNum * 10
      num1 = parseInt(num1/10)
    }
  
    if(add === revNum) return 1
  
    return 0
  }
  
  console.log(isDigitSumPalindrome(98))
  
  // Time complexity = O(1)