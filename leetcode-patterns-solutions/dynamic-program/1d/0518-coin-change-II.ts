function change(amount: number, coins: number[]): number {
    let dp =  new Map<string,number>();
    const dfs = (total:number, i:number):number => {
        if(total === amount) return 1;
        const key = `${total}-${i}`;
        if(dp.has(key)) return dp.get(key)!;
        if(total > amount || i >= coins.length) return 0;

        const include = dfs(total + coins[i], i);
        const notInclude = dfs(total, i+1);        
        const res = include + notInclude;
        dp.set(key,res);
        return res;
    }
    return dfs(0,0);
};