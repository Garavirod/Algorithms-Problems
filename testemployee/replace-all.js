
let dataInput = ""
process.stdin.on("data",(data)=>{
    dataInput = data.toString().trim()
})


process.stdin.on("end",()=>{
    main2()
})


function main(){
    console.log(dataInput.replace(/0/g,'*'))
}


function main2(){
    let arr = dataInput.split('')
    let arr2 = Array(arr.length)
    for(let i in arr){
        if(arr[i] === "0"){
            arr2[i] = "*"
        }else{
            arr2[i] = arr[i]
        }
    }

    console.log(arr2.join(''))
}