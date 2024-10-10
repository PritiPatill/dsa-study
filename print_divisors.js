/*
 * All divisors of a Number
 */



function print_divisors(n){
    let ans = []
    for(let i =1; i<= n ;i++){
      if(n%i==0){
        ans.push(i)
      }
    }
    return ans
  }
  
  console.log(print_divisors(21191))
  
  // Time Complexity = O(n)