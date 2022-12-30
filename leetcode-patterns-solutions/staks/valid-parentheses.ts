function isValidParenthesis(s:string): boolean{
    let closed = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    let stack:string[] = []

    for(let i of s){
        if(i in closed){// does It close a braket ?
            // Isn't empty and the last added to stak matches ?
            if(stack.length > 0 && stack.slice(-1)[0] === closed[i] )
                stack.pop()
            else
                return false            
        }else{ // is an open bracket
            stack.push(i)
        }
    }

    return stack.length === 0
}