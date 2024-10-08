/**
 * Create the multiplication table of a given number N and return the table as an array.
 */

function getTable(N) {
    let arr=[]
    for(let i=1; i<=10;i++){
        arr.push(N*i)
    }
    return arr;
  }
  
  console.log(getTable(9))

//   Time complexity = o(1)