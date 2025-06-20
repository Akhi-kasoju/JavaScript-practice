function intersection(arr1,arr2){
    const set1 = new Set(arr1)
    const result = new Set()

    for(let num of arr2){
        if(set1.has(num)) result.add(num)
    }

    return[result]
}

console.log(intersection([1,2,3,4,] , [4,7,2,5]))