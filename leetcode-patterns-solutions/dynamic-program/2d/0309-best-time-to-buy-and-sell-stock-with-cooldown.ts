function maxProfit(prices: number[]): number {

    let dp = new Map<string,number>();

    const dfs = (it:number, action:boolean):number => {
        if(it >= prices.length) return 0;
        const key = `${it},${action}`;
        if(dp.has(key)) return dp.get(key)!;

        const cooldown = dfs(it+1,action);

        if(action){// true -> buy
            const buy = dfs(it+1, !action) - prices[it];
            dp.set(key,Math.max(buy,cooldown));
            //console.log("The new > ", buy);
        }else{// false -> Sell
            const sell = dfs(it+2, !action) + prices[it];
            dp.set(key,Math.max(sell,cooldown));
        }
        return dp.get(key)!;
    }
    return dfs(0,true);
};