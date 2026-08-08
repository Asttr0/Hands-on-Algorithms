
function isPalindrome(x: number): boolean {
	if (x<0) return false;

	let s: number[] = Array.from(String(x),Number);

	for (let i=0; i < Math.floor(s.length/2); i++){
		if (s[i] !== s[s.length-i-1]) return false;
	}

	return true;

};
console.log(isPalindrome(1224548631221));
