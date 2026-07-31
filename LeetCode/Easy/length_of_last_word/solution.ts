function lengthOfLastWord(s: string): number {
    let c = 0;
    let i = s.length - 1;
    while( i >= 0 && s[i] == " "){
        i--;
    }

    while (i>=0 && s[i]!=" "){
        c++;
        i--;
    }

   return c ;

};
