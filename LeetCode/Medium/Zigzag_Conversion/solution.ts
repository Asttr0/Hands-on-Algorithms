function convert(s: string, numRows: number): string {

	if (numRows === 1 || s.length <= numRows) return s;


	let result ="";
	const jump = 2*numRows-2;

        

	for( let i = 0 ; i<numRows ; i++){
		for( let j = 0 ; j+i<s.length ; j+=jump){
			result += s[j+i];
			if (i!=0 && i!=numRows-1 && j+jump-i<s.length){
			result += s[j+jump-i];
			}

		}
	}

	return result;

    
};
console.log(convert("PAYPALISHIRING",3));
