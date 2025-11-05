function firstWord(s) {
   for(let i=0;i<s.length;i++){
	   if(s[i]==" "){
		   return s.slice(0,i)
	   }
   }
	return s
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
