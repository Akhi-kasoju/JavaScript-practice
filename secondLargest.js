function secondLargest(arr){
    let first= -Infinity, second = -Infinity
    for(let num of arr) {
        if(num > first) {
            second = first
            first = num
    }else if(num> second && num !== first) {
        second = num
    }

    }
    return second
}
console.log(secondLargest([8,7,5,9,4]))