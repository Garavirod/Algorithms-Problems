function strongPassword(n:number, password:string):number{
    let charsToAdd = 0

    const upper_case = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
    const lower_case = new Set("abcdefghijklmnopqrstuvwxyz".split(""))
    const numbers =  new Set("0123456789".split(""))
    
    let rules = {
        numbers:false,
        lower_case:false,
        upper_case:false,
        special_chars:false,
    }

    
    let i = 0
    let compleat = 0
    
    if(n>=6) compleat++                
    
    while(i<n){        
        if(numbers.has(password[i])){
            if(!rules.numbers){
                compleat++
                rules.numbers = true
            }
        }else if(upper_case.has(password[i])){
            if(!rules.upper_case){
                compleat++
                rules.upper_case = true
            }
        }else if(lower_case.has(password[i])){
            if(!rules.lower_case){
                compleat++
                rules.lower_case = true
            }
        }else{
            if(!rules.special_chars){
                compleat++
                rules.special_chars = true
            }
        }                              
        i++                    
    }
        
    charsToAdd = 5 - compleat

    if(n >= 6){
        return charsToAdd
    }else if(n + charsToAdd > 6){        
        return --charsToAdd
    }else if(n + charsToAdd === 6){
        return charsToAdd
    }else{
        return ++charsToAdd
    }     
}
