function maxProfit(prices: number[]): number {
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let temp = prices[j] - prices[i];
      if (prices[j] - prices[i] > 0) {
        maxprofit = Math.max(maxprofit, temp);
      }
    }
  }

  return maxprofit;
}
