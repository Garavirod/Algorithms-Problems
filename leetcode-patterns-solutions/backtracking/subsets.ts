/**
 * 78. Subsets
 * @param nums 
 * @returns {Array}
 */
function subsets(nums: number[]): number[][] {
    let results: number[][] = [];
    let subset: number[] = [];

    let dfs = (i: number) => {
        if (i >= nums.length) {
            results.push([...subset]);
            return;
        }
        // Decission to include nums[i]
        subset.push(nums[i]);
        dfs(i + 1);

        // Decission to NOT include nums[i]
        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return results;
};