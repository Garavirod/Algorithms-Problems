

const question2 = () => {
    
}


/**
 * Retruns an array of words that satisfied the regexp
 * @param {*} str 
 * @returns {Array} 
 */
const question5 = (str) => {
    /* Regexp rule */
    const reg = /[a-z]{4,9})\w*/gi
    return str.match(reg) 
}


const main = () => {
    console.log("-----Question 5----");
    console.log(question5("I lovework in odoo because is great"));
    
}

main();