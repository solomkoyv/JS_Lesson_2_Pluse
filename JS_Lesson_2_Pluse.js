// Задача №1

// Вариант №1
// let week = [],
//   toDay = 'пт';

// for (let i = 0; i < 7; i++) {
//   week.push(prompt(` Введите дни недели `, ''));

//   if (week[i] == 'сб' || week[i] == 'вс') {
//     document.write(`<p><b>${week[i]}</b></p>`);
//   } else if (week[i] == toDay) {
//     document.write(`<p><i>${week[i]}</i></p>`);
//   } else {
//     document.write(`<p>${week[i]}</p>`);
//   }
// }
// console.log(week);

// Вариант №2
// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//   toDay = new Date().getDay() - 1;

// for (let i = 0; i < week.length; i++) {
//   if (i == toDay) {
//     if (week[i] == 'сб' || week[i] == 'вс') {
//       document.write(`<p><b><i>${week[i]}</i></b></p>`);
//     } else {
//       document.write(`<p><b>${week[i]}</b></p>`);
//     }
//   } else if (week[i] == 'сб' || week[i] == 'вс') {
//     document.write(`<p><b>${week[i]}</b></p>`);
//   } else {
//     document.write(`<p>${week[i]}</p>`);
//   }
// }
// console.log(week);

//Задача №2 

// Вариант №1 с фиксированными числами
// let arr = ['245', '5678', '458', '355', '325', '789', '4905'];

// arr.forEach((e) => {
//   if (e[0] == '3' || e[0] == '7') {
//     document.write(`<br>${e}`);
//   }
// });


// Вариант №2 с введением любых чисел
// let arr = [];

// for (let i = 0; i < 7; i++) {
//   arr.push(prompt(` Введите дни недели `, ''));
// }
// arr.forEach((e) => {
//   if (e[0] == '3' || e[0] == '7') {
//     document.write(`<br>${e}`);
//   }
// });