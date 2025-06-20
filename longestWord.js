
function longestWord(sentence){
    const words = sentence.split(' ')
    return words.reduce((longest, word) => word.length > longest.length ? word:longest, '')
}

console.log(longestWord("JavaScript is one of the programming language used world wilde"))


function longestWord(sentence){
    const words =sentence.split(' ')
    return words.reduce((longest,word)=> word.length > longest.length ? word:longest, '')
}

console.log(longestWord("JavaScript is one of the programming language used world wide"))