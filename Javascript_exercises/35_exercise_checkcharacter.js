/*
35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  
*/
function findChar(a,b) {
    let c=false;
    if (a.length < 2) {
        console.log(a);
    }
    for(let i =1 ;i<=3;i++){
        if(a.charAt(i)===b){
            console.log("Karakter " + b + " se nalazi na " + (i+1) +". mestu u stringu:'" + a+"'.");
            c=true;
            break;
        } 
    }
    if(!c){
            console.log("Karakter " + b + " se ne nalazi na trazenim pozicijama u stringu:'" + a+"'.");
    }
}

findChar("Bobana",'b');
findChar("Sara",'s');
findChar("Milena","a");
findChar("Bob","b");
findChar("B","b");