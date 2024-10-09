/**
 * Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.
 */

function evenlyDivides(N)
{
    let num = N
    let count = 0
    while(num != 0){
      let rem = parseInt(num % 10)
      if(rem > 0 && parseInt(N%rem) == 0){
        count ++;
      }
      num = parseInt(num/10)

    }
    return count
}

console.log(evenlyDivides(23))

// Time complexity = O(n)