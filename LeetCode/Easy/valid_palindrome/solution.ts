function isPalindrome(s: string): boolean {
    
	let n = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("");
	 if (n == s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "")) return true;
	 return false;
	

};
