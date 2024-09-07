// function isUnique(str) {
//     set = new Set();
//     for (let i = 0; i < str.length; i++){
//         let current = str[i]
//         if (set.has(current)) {
//             return false
//         }
//         set.add(current)
//     }
//   return true
// }


function isUnique(str) {
    return new Set(str).size === str.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
