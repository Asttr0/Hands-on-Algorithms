function maxProfit(prices : number[]): number {
     let minprice = prices[0];
     let c = 0;


     for ( let i = 0 ; i < prices.length ; i++ ){
       if (prices[i] < minprice) {
         minprice = prices[i];
       }
     }

     while(prices[c] != minprice) c++;
     let maxprice = prices[c];

     for ( let j = c ; j<prices.length ; j++){
       if ( prices[j] > maxprice){
          maxprice = prices[j];
       }

     }

     if (maxprice < minprice){
       return 0;
     } else return (maxprice - minprice) ;
};

console.log(maxProfit([7,6,4,3,1]));
