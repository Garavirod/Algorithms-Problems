function trap(height: number[]): number {
    let waterTrap = 0;
    const n = height.length;
    let l = 0; 
    let r = 1; 
    let maxHeightIndex = 0;

    // look for the index that belongs to max height
    for(let i = 1; i<n; i++)
        if(height[i] > height[maxHeightIndex]) 
            maxHeightIndex = i;

    // count water trap from left to maxHeighIndex
    while(r <= maxHeightIndex){
        if( height[l] <= height[r]) l = r;
        else waterTrap += (height[l] - height[r]);                
        r++;
    }

    // count water trap from right to maxHeighIndex
    r = n - 1;
    l = r - 1;
    while(l >= maxHeightIndex){
        if( height[r] <= height[l]) r = l;
        else waterTrap += (height[r] - height[l]);                
        l--;
    }
    return waterTrap;
};
