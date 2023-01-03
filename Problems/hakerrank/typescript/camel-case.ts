function camelCase(str: string): number {
    
    let counterwords = 0
    let unorderSet = new Set()

    for (let w = 65; w <= 91; w++)
        unorderSet.add(String.fromCharCode(w))
    
    for (let i = 0; i < str.length; i++) {
        if(unorderSet.has(str[i])){
            counterwords++
        }
    }
    counterwords++
    return counterwords
}
