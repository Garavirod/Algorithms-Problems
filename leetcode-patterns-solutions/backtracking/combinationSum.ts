/* 
    39. Combination Sum
    complexity O(2^target)
*/
function combinationSum(candidates: number[], target: number): number[][] {
    let results: number[][] = [];
    const dfs = (i: number, combination: number[], total: number): any => {
        if (total === target) {
            results.push([...combination]);
            return;
        }
        // Not posible solution
        if (i >= candidates.length || total > target) return;

        // Include i as part of combination
        combination.push(candidates[i]);
        dfs(i, combination, total + candidates[i]);
        //i is NOT include it as part of combination
        combination.pop();
        dfs(i + 1, combination, total);
    }
    dfs(0,[],0);
    return results;
};