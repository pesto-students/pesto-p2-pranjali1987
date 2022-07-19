function buySellStocks(prices){
  if (prices.length < 1){
    return null;
  }
  let profit = 0,
  costPrice = prices[0];

  for(let i=1; i<prices.length; i++){
    if(prices[i] < costPrice){
      costPrice = prices[i];
      continue
    } 
    profit = Math.max(profit, prices[i] - costPrice);
  }
  return profit;
}
console.time();
console.log(buySellStocks([7,1,5,3,6,4]));
console.log(buySellStocks([5,4,3,2,1]));
console.log(buySellStocks([18]));
console.timeEnd();