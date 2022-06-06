

const question2 = (array) => {
    return array.sort(() => Math.random() - 0.5);
}


/**
 * Retruns an array of words that satisfied the regexp
 * @param {*} str 
 * @returns {Array} 
 */
const question5 = (str) => {
    /* Regexp rule */
    const reg = /\w{0,5}(odoo|work|code)\w{0,5}/gi
    return str.match(reg) 
}


const main = () => {
    console.log("-----Question 2----");
    console.log(question2(['A','1','2','3','4','5','6','7','8','9','10','J','K','Q']));
    console.log("-----Question 5----");
    console.log(question5("I love work in odoo because is great to code on letcodeqwe in his office"));    
}

main();