/*
25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
*/

function proveri(a){
    if(a>0){
        if(a%3===0 || a%7===0){
            console.log(true);
        }else{
            console.log(false);
        }
        }else{
            console.log("Nije pozitivan broj");
        }
    }

    proveri(70);
    proveri(10);
    proveri(30);
    proveri(21);
    proveri(-8);


