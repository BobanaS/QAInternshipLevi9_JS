/*
36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  
*/
function checklastdigit(a, b,c){
if(morethan0(a)&& morethan0(b)&& morethan0(c)){
    return lastdigit(a)===lastdigit(b)&&lastdigit(a)===lastdigit(c)&&lastdigit(b)&&lastdigit(c);
}else{
    return false;
}
}

function lastdigit(a){
    let s=a%10;
    return true;
}

function morethan0(a){
    let v=true;
    if(a>0){
        return v;
    }else{
        return !v;
    }
}

console.log(checklastdigit(10,30,400));