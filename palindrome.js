function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanStr.length - 1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("world"));
