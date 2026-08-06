function lengthOfLongestSubstring(s: string): number {
    let left = 0 ;
    let maxlength = 0;

    for( let i = 0 ; i < s.length ; i++){
	    let dupindex = s.indexOf(s[i],left);
	    if ( dupindex != -1 && dupindex<i  ){
		    left = dupindex + 1 ;

	    }
	maxlength = Math.max(maxlength , i-left+1)  ;
    }
    return maxlength;
};

console.log(lengthOfLongestSubstring("abbsjsudkaaoisjj"));
