function longestCommonPrefix(strs: string[]): string {
  let result="";

  for ( let i =0 ; i < strs[0].length ; i++){

    let currentchar = strs[0][i];
    let allmatch =strs.every(str => str.length > 0 && str[i] === currentchar  );

    if (allmatch){
      result += currentchar;
    } else break;

  }

    return result ;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
