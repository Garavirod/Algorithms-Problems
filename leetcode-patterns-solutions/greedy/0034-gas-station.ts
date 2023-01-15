function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gasSum = gas.reduce((a: number, b: number) => a + b, 0);
    const costSum = cost.reduce((a: number, b: number) => a + b, 0);
    if (gasSum < costSum) return -1;

    let total = 0;
    let result = 0;
    for (let i = 0; i < cost.length; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }

    return result;
};