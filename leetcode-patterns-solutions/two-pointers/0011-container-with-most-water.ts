function maxArea(height: number[]): number {
    let _maxArea = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        const minHeight = Math.min(height[l], height[r]);
        _maxArea = Math.max(
            _maxArea,
            minHeight * Math.abs(l-r)
        );

        if(height[l] <= height[r]) l++;
        else r--;
    }

    return _maxArea;
};