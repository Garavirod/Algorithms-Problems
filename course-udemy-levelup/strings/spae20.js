/*
    Given a string , write a function to replace
    all spaces in a string with '%20'. it is given 
    it is given that sring has sufficent space at
    the end  to hold the additional characters.
*/

let datainput = ""

process.stdin.on('data', (data) => {
    datainput =  data.toString().trim()
})


process.stdin.on('end',() => {
    main()
})


const space20 = ( str ) => {
    let s = str.split(' ')
    return s.join('%20')
}


const main = () => {
    console.log( space20( datainput ) );
}