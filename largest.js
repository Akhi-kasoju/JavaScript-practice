function findLargest(arr){
    let max = arr[0]
    for(let num of arr) {
        if(num > max) max= num
    }
    return max
}

console.log(findLargest([1,2,3,8,9,7]))