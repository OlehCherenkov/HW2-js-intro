console.log('------------- # 4');
const num1 = 3;
const num2 = 8;
const sum = num1 + num2;
console.log('суммирование двух чисел: ' + sum);
const sub = num2 - num1;
console.log('вычитание двух чисел: ' + sub);
const mul = num1 * num2;
console.log('умножение двух чисел: ' + mul);
const div = num1 / num2;
console.log('деление двух чисел: ' + div);

console.log('------------- # 5');
let asc = '';
for (let i = 1; i < 6; i++) {
    asc += i + ' ';
}
console.log(asc);

console.log('------------- # 6');
let desc = '';
for (let i = 5; i > 0; i--) {
    desc += i + ' ';
}
console.log(desc);

console.log('------------- # 7');
function getMarkInfo(condition) {
    if(condition === 10) console.log('У вас максимальный балл');
    else console.log('У вас средний балл');
}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- # 8');
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday')
            break;
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        default:
            console.log('Wrong data')
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('------------- # 9');
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3)
console.log(arr);

console.log('------------- # 10');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log('------------- # 11');
const fixNum = 7;
let sumNumFirst = 0;
for (let i = 1; i <= fixNum; i++) {
    sumNumFirst += i;
}
console.log(sumNumFirst);

const userNum = prompt('Задание 11. Введите любое целое положительное число', '');
if(userNum) {
    let sumNumSecond = 0;
    for (let i = 1; i <= userNum; i++) {
        sumNumSecond += i;
    }
    console.log(sumNumSecond);
}