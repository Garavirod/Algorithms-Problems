/*
  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. 
  In how many distinct ways can you climb to the top?

*/


function climbStairs(n: number, memo={}): number {
    if(n == 1 || n == 0) return 1
    if(n in memo) return memo[n]
    
    const resp = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    
    memo[n] = resp
    return resp
};
