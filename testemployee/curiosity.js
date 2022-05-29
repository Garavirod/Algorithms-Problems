// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input.trim();                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {   
    let i = 0;
    let j = 1;
    let good = input.split('');
    console.log(good);
    while(j < good.length){
        if(good[i] === good[j]){
            j++
        }else{
            good = [...good.slice(0, i+1),...good.slice(j)]
            i = j;
            j++
        }
    }
    
    console.log(good.join(''))
}




// Write your code here