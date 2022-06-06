
const vowelSum = (str) => {
    let counter = 0;

    const values_vowel = {
        'a' : 1,
        'e' : 2,
        'i' : 3,
        'o' : 4,
        'u' : 5
    }

    let counter_vowels = {
        'a' : 0,
        'e' : 0,
        'i' : 0,
        'o' : 0,
        'u' : 0
    }

    // Count how many vowels there are into string
    for(let w of str){
        if(w in counter_vowels){
            counter_vowels[w] += 1
        }
    }
    
    // Aplies formula (num_vowels_found*value_vowel)
    for(vowel in counter_vowels){
        counter += (counter_vowels[vowel] * values_vowel[vowel])
    }

    return counter
}

const sumVowelRecursively = (str) => {
    if(str.length === 0) // base case
        return 0
    if(str.length === 1)
        return vowelSum(str) // defined in previous question
    const n = Math.floor((str.length/2))    
    let left = str.slice(0,n) // string left'side
    let right = str.slice(n) // string remaining

    return sumVowelRecursively(left) + sumVowelRecursively(right);
}

const question2 = (array) => {
    return array.sort(() => Math.random() - 0.5);
}


/**
 * Retruns an array of words that satisfied the regexp
 * @param {*} str 
 * @returns {Array} 
 */
const regularExp = (str) => {
    /* Regexp rule */
    const reg = /(odoo|work|code)|\w{1,5}(odoo|work|code)|(odoo|work|code)\w{1,5}|\w{1,3}(odoo|work|code)\w{1,2}|\w{1,2}(odoo|work|code)\w{1,3}/gi
    /* returns a array with all words that satisfied the rules defined on 'reg'*/
    return str.match(reg) 
}


const main = () => {
    console.log("-----Question 2----");
    console.log(question2(['A','1','2','3','4','5','6','7','8','9','10','J','K','Q']));
    console.log("-----Question 3----");
    console.log(vowelSum("Welcome to Indonesia"));
    console.log("-----Question 4----");
    console.log(sumVowelRecursively("Welcome to Indonesia"));
    console.log("-----Question 5----");
    console.log(regularExp("I love work in odoo because is great to code on letcodeqwe in his officecode"));    
}

main();