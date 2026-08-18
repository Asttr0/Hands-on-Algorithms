function isPerfectSquare(num: number): boolean {
    for (let i=0 ; i<=num ; i++){
        if(i*i === num){ return true;}
        else if(i*i>num) break;
    }
    return false;
};
