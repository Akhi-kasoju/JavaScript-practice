function Anagram(str1,str2){
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g , "")
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g , "")

    if(cleanStr1.length !== cleanStr2.length) return false

    const charCount = {}

    for(let char of cleanStr1) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    for(let char of cleanStr2) {
        if(!charCount[char]) return false
    }

    return true
}

console.log(Anagram("race" , "care"))
console.log(Anagram("work" , "kore"))