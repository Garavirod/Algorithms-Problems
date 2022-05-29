let dataInput = "";

process.stdin.on("data",(data)=>{
    dataInput = parseInt(data.toString().trim())
});


process.stdin.on("end",()=>{
    main()
})


function replaceAt(idx, str, replace){
    return str.substring(0, idx) + replace + str.substring(idx+1)
}

function main(){
    let copy = ""
    for(let i = 0; i<dataInput; i++ ){
        copy += "#"
    } 

    let i= 0;
    let s = copy;
    while(i<dataInput){        
        s = replaceAt(i, s, '*')
        console.log(s);
        i++
    }
}