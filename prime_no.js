/*
Problem statement  - For a given number n check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.
*/


const isPrime = (n) => {
    let count = 0;
    if (n == 1) return 0;
    if (n == 2) return 1;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        count++;
      }
    }
  
    if (count == 0) {
      return 1;
    } else {
      return 0;
    }
  };

//   Time complexity = O(n)


// optimal solution

class Solution {

    isPrime(n){
        
      if(n<=1) return 0
      
      for(let i=2; i*i<=n; i++){
          if(n%i==0) return 0
      }
      
      return 1
            
    }
}

// Time complexity = O(sqrt(n))