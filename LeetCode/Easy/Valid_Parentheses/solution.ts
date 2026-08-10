function isValid(s: string): boolean {

  const str = Array.from(s);
  let charcheck = str.every(char => char == '[' || char == ']' || char == '{' || char == '}' || char == '(' || char == ')' );

  if (!charcheck) return false ;

  const open = ['(' , '{' , '['];
  const close = [')' , '}' , ']'];

  for (let i = 0 ; i<str.length ; i++){

    const closeindex = close.indexOf(str[i]);

    if (closeindex !== -1){
      if (i>0 && str[i-1] === open[closeindex]){
        str.splice(i-1 , 2);
        i -= 2;
      } else return false;
    }
  }

  return str.length === 0;

};
console.log(isValid("{}[]()"));
