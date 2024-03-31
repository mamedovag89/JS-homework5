// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const obj = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
// };
// console.log(obj["2"]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// const user = {
//     "name": 'Galya',
//     "surname": 'Mamedova',
//     "age": '34',

// };

// console.log(user.name + '-' + user.surname + '-' + user.age );

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// fatherName = prompt ('Enter fatherName');
// console.log(user.name + '-' + user.surname + '-' + user.age +'-' +user.fatherName );

// 4. Удалите свойство surname

// const user = {
//     "name": 'Galya',
//     "surname": 'Mamedova',
//     "age": '34',

// };
// let someVar ='name';
// delete user.age

// console.log(user.name + '-' + user.surname + '-' + user.age );

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
// const obj = {x: 1, y: 2, z: 3};
// Object.values(obj).map(function(value) {
//     console.log(value * value);

// });

// Задание 3
// const obj = {
// key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
// },
// key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
// },
// key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//  },
// };
// // Найдите сумму элементов приведенного объекта.

// let sum =0;
// Object.values(obj).map(function(value){
//     Object.values(value).map(function(value){
//         sum =sum +value;
//     });

// });
// console.log(sum);

// Задание 4
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

// const riddles  = {
//     question: 'Who are you?',
//     answer: 'Galya',
//     counter : 0,
//     askQuestion: function() {
//         let enteredAnswer = prompt(this.question);
//         if(enteredAnswer ===this.answer) {
//             console.log('You are right');
//         } else {
//             console.log('You are not right');
//             this.counter ++;
//             if (this.counter < 3) {
//                 this.askQuestion();
//             }
           
//         }
//     }
// };

// riddles.askQuestion();
