interface node {
    value: number,
    min:number
}

class MinStack {
    minValue:number|null;
    stack:node[]

    constructor() {
        this.minValue = null
        this.stack = []
    }

    push(val: number): void {        
        if(this.stack.length === 0)
            this.stack.push({'value':val, 'min':val})
        else{
            const m = this.stack.slice(-1)[0].min
            this.stack.push({'value':val, 'min':Math.min(m,val)})
        }                
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack.slice(-1)[0].value
    }

    getMin(): number {
        return this.stack.slice(-1)[0].min
    }
}