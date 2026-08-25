function sum(a,b){
    return a+b;
    
}

function sumwithMsg(clbk,msg){
    const result= clbk(20,3);
    const fresult="Hii " + msg+" Your score is " +result;
    console.log(fresult);
}
sumwithMsg(sum,"rupak");