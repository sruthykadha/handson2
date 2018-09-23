function calculateSupply(age,amountperday){
   let maxage=100;
   let need=(amountperday * 365) * (maxage - age);
    console.log('you will need ' + need + ' to last you until the ripe of ' + maxage);   
}
calculateSupply(28, 36 );
calculateSupply(28, 2.5);
calculateSupply(28, 400);