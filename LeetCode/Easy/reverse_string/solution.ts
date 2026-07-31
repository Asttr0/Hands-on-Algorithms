/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	let n = s.length ;

	for (let i = 0 ; i < Math.floor(n/2) ; i++) {

		let c = s[n - (i+1)];
		s[n -(i+1)] = s[i];
		s[i] = c;
	}



};
