// Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
//  Если таких строк несколько, то нужно вернуть первую, идя слева на право.


function highestFrequency(array) {
    const res = [];
    let counter = 0;
    let element = array[0]

    for (let i = 0; i < array.length; i++){
        const current = array[i];
        if (res[current]) {
            res[current]++
        } else {
            res[current] =1
        }
         if (res[current] > counter) {
        counter = res[current];
        element = current
    }
    }
   
    return element
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi