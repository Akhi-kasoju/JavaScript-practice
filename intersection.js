function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = new Set();

    for(let num of arr2) {
        if(set1.has(num)) result.add(num);
    }

    return [...result];
}

console.log(intersection([1,2,2,3], [2,3,4])); 


function intersection(arr1,arr2) {
    const set1 = new Set(arr1)
    const result =new Set()

    for(let num of arr2){
        if(set1.has(num)) result.add(num)
    }

    return [...result]
}

console.log(intersection([1,2,4,5,] , [5,7,8,2]))