function isHappy(n: number): boolean {
    let spplited = n.toString().split('');
    let visited = new Set([n]);
    while (true) {
        const result: number = spplited.reduce((total, item) => {
            const a = parseInt(item);
            total += (a*a);
            return total;
        }, 0);

        if (result === 1) {
            return true;
        } else if (visited.has(result)) {
            return false;
        } else {
            visited.add(result);
            spplited = result.toString().split('');
        }
    }
};