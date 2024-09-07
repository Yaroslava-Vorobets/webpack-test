// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
// Input: String
// Output: String
function removeDupes(str) { 
 
  const res = []
  
  for (i = 0; i < str.length; i++){
    const currentEl = str[i];

    if (!res[currentEl]) {
      res[currentEl] = true;
      res.push(currentEl)
    }   
  }
 return res.join('')
//  return Array.from(new Set(str)).join('')
}
console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'