class Solution {

    isPrime(n){
        
      if(n<=1) return 0
      
      for(let i=2; i*i<=n; i++){
          if(n%i==0) return 0
      }
      
      return 1
            
    }
}

// Time complexity = O(log n)