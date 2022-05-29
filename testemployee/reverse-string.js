let dataInput = ""

process.stdin.on("data" , (data)=>{
    dataInput = data.toString().trim();
})


process.stdin.on("end" , ()=>{
    console.log(main())
})


function main(){
    let arrWords = dataInput.trim().split(' ')
    let n = arrWords.length
    let reversed = "";
    for(let i= n-1; i>=0; i--){
        if(arrWords[i] !== "")
            reversed += arrWords[i] + " "
    }
    return reversed.slice(0,reversed.length-1)
}


