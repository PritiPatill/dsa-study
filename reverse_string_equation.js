/**
 * Reversing the equation
 */


function reverseEqn(s) {
    let temp='', ans=''
    for(let i= s.length -1 ; i>=0; i--){
      if(s[i] <=9 && s[i] >=0){
        temp = s[i] + temp
      }else{
        ans = ans + temp
        ans = ans + s[i]
        temp=''
      }
    }
    ans = ans + temp
    return ans
  }
  
  console.log(reverseEqn("5+2*56-2/4"))
  
  // Time Complexity = O(n)