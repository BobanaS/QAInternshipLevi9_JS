//5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

var word="w3resource";
var word1="";
for(var i=word.length-1;i>=0;i--){
 word1+=word[i];
}
console.log(word1);