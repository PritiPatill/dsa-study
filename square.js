/**
 * Consider a sample space S consisting of all perfect squares starting from 1, 4, 9 and so on. You are given a number N, you have to output the number of integers less than N in the sample space S
 **/

const square = (n) => {
    let count = 0
    for(let i=1; i*i<n; i++){
      count++;
    }
    return count;
    }
    
console.log(square(3));


// Time complexity = O(sqrt(n))
