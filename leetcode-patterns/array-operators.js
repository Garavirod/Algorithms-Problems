

function reduce2Func(arr){
    return arr.reduce((acc,el)=>(acc+el),0)
}


function reduce1Func(){
    const a = [
        {nombre:"Rodrigo", edad:27, alias:"Rodri"},
        {nombre:"Jesus", edad:21, alias:"Jes"},
        {nombre:"Willow", edad:2, alias:"Willi"},
        {nombre:"Cardigan", edad:7, alias:"Cardi"},
    ]

    const b = a.reduce((acc, item) => ({
        ...acc,
        [item.nombre]:item
    }), {})

    return b
}


function main(){
    // Reduce

    //console.log(reduce1Func());
    console.log(reduce2Func([1,2,3,4,5,6,7,8,9]));
}


main()