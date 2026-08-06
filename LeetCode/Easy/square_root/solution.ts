function mySqrt(x: number): number {
    let i = 0;
    while ( i*i <= x){
        i++;
    }
    return i-1 ;
};
console.log(mySqrt(16));

