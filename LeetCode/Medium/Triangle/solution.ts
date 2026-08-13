function minimumTotal(triangle: number[][]): number {
  let MinArray = triangle.map(subArray => Math.min(...subArray));
  let output = 0
  for(let i=0 ; i< MinArray.length ; i++){
    output += MinArray[i];
  }


    return output
};
console.log(minimumTotal());
