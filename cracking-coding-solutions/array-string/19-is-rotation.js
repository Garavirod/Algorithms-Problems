/* 
    9.- String rotation

    Assume you have a method i 5Su b 5 tr ing which checks if one word is a substring 
    of another. Given two strings, 51 and 52, write code to check if 52 is a rotation 
    of 51 using only one 
    call to i5Sub5tring (e.g., "waterbottle" is a rotation of"erbottlewat").

    Input 
    s1 = "helloworld"
    s2 = "lloworldhe"
    
    a = he b = lloworld

    s1 = ab
    s2 = ba

    
    c = ab+ab = abab
    c = "helloworldhelloworld"

    therefore

    s2 is a substring of c then it is a rotation of s1
*/


const isRotation = ( s1, s2 ) => {
    if (s1.length != s2.length) return false;
    return (s1+s1).includes(s2)
}


const main = () => {
    const s1 = "helloworld"
    const s2 = "lloworldhe"

    console.log(isRotation(s1,s2));
}


main();