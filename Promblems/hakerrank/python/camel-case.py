def camelcase(s):
    unorder_set = set()
    for i in range(65,92):
        # converts num ascii code to char 
        unorder_set.add(chr(i)) 

    counter = 1 # first word
    for i in s:
        if i in unorder_set:
            counter +=1 # each time it finds a uppecase letter

    return counter  
