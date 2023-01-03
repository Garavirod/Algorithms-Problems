def strongPassword(n:int, password:str) -> int:
    char_to_add = 0

    upper_case = set(list("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
    lower_case = set(list("abcdefghijklmnopqrstuvwxyz"))
    numbers =  set(list("0123456789"))

    rules = {
        "numbers":False,
        "lower_case":False,
        "upper_case":False,
        "special_chars":False,
    }

    i, compleat = 0

    if n >= 6:
        compleat += 1

    while i<n:
        if password[i] in numbers:
            if rules['numbers']:
                compleat += 1
        elif password[i] in lower_case:
            if rules['lower_case']:
                compleat += 1
        elif password[i] in upper_case:
            if rules['upper_case']:
                compleat += 1
        else:
            if rules['special_chars']:
                compleat += 1

        i +=1
        
    char_to_add = 5 - compleat

    if(n >= 6):
        return char_to_add
    elif n + char_to_add > 6:       
        return --char_to_add
    elif n + char_to_add == 6:
        return char_to_add
    else:
        char_to_add += 1
        return char_to_add
    
