let dataInput = []

process.stdin.on("data",(data)=>{
    dataInput.push(data.toString().trim())
})

process.stdin.on("end",()=>{
    main()
})

function main(){
    let resp = []
    for(let item of dataInput){
        resp.push(item.replace(/0/g,'*'))
    }

    for(let r of resp) console.log(r);  
}

