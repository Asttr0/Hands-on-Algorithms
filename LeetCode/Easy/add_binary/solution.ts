function addBinary(a: string, b: string): string {
    let n = a.length-1;
    let m = b.length-1;
    let c =  '';
    let reserve = 0 ;

    for(let i = 0 ; n >= 0 || m >= 0 || reserve > 0; i++){
        let bitA = 0;
        let bitB = 0;

        if (n>=0) {
            if(a[n] == "1") bitA = 1 ;
            n--;
        }
        if (m >= 0){
            if ( b[m] == "1") bitB = 1;
            m--;
        }

        let sum = bitA + bitB + reserve ;
        c = (sum % 2) + c;
        reserve = Math.floor(sum / 2);
    }

    return c ;



};

console.log(addBinary("101010","10110"));
