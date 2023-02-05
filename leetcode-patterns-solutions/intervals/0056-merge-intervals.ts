
function merge(intervals: number[][]): number[][] {
    let output: number[][] = [];
    intervals.sort((a:number[], b:number[]) => a[0] - b[0]);
    output.push(intervals[0]);
    for(let [start, end] of intervals.slice(1)){
        let lastEnd = output.slice(-1)[0][1];
        if(start <= lastEnd)
            output.slice(-1)[0][1] = Math.max(lastEnd, end);
        else
            output.push([start,end]);
    }
    return output;
};