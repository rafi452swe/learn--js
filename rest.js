function abcd(...v){
    let total=0;
    v.forEach(function(score){
        total=total+score;
    })
    return total;
   
        
    

}
console.log(abcd(10,20,30,40,50,60,70,80));