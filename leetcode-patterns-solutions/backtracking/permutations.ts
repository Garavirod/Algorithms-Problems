/* 
    46. Permutations
*/
function permute(nums: number[]): number[][] {
    let results:number[][] = [];

    const dfs = (permutation:number[]) => {
        if(permutation.length === nums.length){
            results.push([...permutation]);
            return;
        }

        for(let n of nums){
            if(!(permutation.includes(n))){
                permutation.push(n);
                dfs(permutation);
                permutation.pop();
            }
        }
    }
    dfs([]);
    return results;
};