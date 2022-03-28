/* 
    You are actually very busy person, You have long 
    list activities. Your aim is to finish much as
    activities as posible.
    Given and start the finish times of activities,
    print the maximimum number of activities, input
    is already store in a vector of pairs.
    Each pair contain the start and the end of
    activity
*/

var dataInput = []

process.stdin.on("data", data => {
    dataInput.push(data.toString().trim().split(' '))
})


process.stdin.on("end", () => {
    dataInput = dataInput.map( e => ({ first:parseInt(e[0]), second:parseInt(e[1])}) )   
    main()
})


const maxNumberOfActivities = ( arr ) => {

    arr.sort( (a,b) => a.second - b.second)

    let reference = arr[0]
    let activities = 0
    for (let i = 0; i < arr.length - 1; i++) {       
       if (reference.second <= arr[i+1].first) {
           activities++
           reference = arr[i]
       }        
    }
    return activities
}


const main = () => {
    console.log(maxNumberOfActivities( dataInput ))

}

