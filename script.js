'use strict'

// let forma = document.querySelector("form");
// let input = document.querySelector("#three");
// let btn = document.querySelector(".but");
// let area = document.querySelector("#two");
 
//  console.log(forma);

 

//  btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(input.value);
//     console.log(forma.elements.two.value);
//     forma.reset(); //сброс инфі с полей
//  });
 
let filmList = document.querySelector(".film__list"),
    film = document.querySelector(".film"),
    btn = document.querySelector(".but"),
    form = document.querySelector("form"),
    inp = document.getElementById("three"),
    newList = ["Don-Don", "Raduga", "Star Wars"];



 
let NewFilm = document.createElement("li");
NewFilm.className = "film";

 

btn.addEventListener("click", (event) => {
     event.preventDefault();
     filmList.innerHTML += `<li class="film"> ${inp.value} </li>`;
     form.reset();
});


 

 





 //film.innerHTML += `<li class="film"> ${film} </li>`;




// Задачи из Learn JavaScript

/*
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/



/*
Используя конструкцию if..else, напишите код,
который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!»,
в противном случае – отобразить: «Не знаете? ECMAScript!»


let question = prompt ("Какое официальное название JS?", "");
if (question == "EcmaScript") {
alert("Верно!")
} else {
alert("EcmaScript. Не знали?");
}
*/






/*
Используя конструкцию if..else, напишите код,
который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

/*
let value = 61;
let ask = prompt("Какое число я загадал?", "");
if (ask == value) {
alert("Ничего себе! Верно!")
}else if (ask < 59) {
alert("Больше))")
}else if (ask > 62) {
alert ("Меньше))")
}else {
alert ("Нет! Но прям вот рядом!")
}
*/







/*
Перепишите if с использованием условного оператора '?':
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

/*
result = (a + b < 4) ? "Мало" : "Много";
*/






/*
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/
/*
let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' : 
'';
*/






/*
Напишите условие if для проверки, что переменная age 
находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age 
может быть равно 14 или 90.
*/
/*
let age = 56;

if (age >= 14 && age <= 90) {
    console.log(true);
}
*/







/*
Напишите условие if для проверки, что значение переменной age 
НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора 
НЕ !, второй – без этого оператора.
*/
/*
let age = 12;

if (!(age <= 14 && age >= 90)) {
    console.log(true);
}


if (age <= 14 || age >= 90) {
    console.log(true);
}
*/













/*
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если 
ничего не введено или нажата клавиша Esc – показать «Отменено», в 
противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
*/
/*
let ask = prompt("Ваш логин?", "");
let password = "Я главный";

if (ask == 'Админ') {
  let password = prompt("Пароль", "");
  if (password == "Я главный") {
    alert ('Здравствуйте!');
} else if (password == '' || password == null) {
    alert ("Отменено");
  }else {
    alert ('Неверный пароль');
}
} else if (password == '' || password == null) {
    alert ("Отменено");
  }else {
    alert ('Неверный пароль');
}
/*













/*
При помощи цикла for выведите чётные числа от 2 до 10.
*/
/*
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
*/









/*
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
/*
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
*/












/*
Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку 
нечисловых строк в этой задаче необязательно.
}
*/
/*
let number;
do {
    number = prompt("Введите число больше 100", "");
} while (number <= 100);
*/














/*
Создайте переменные m и n. В m поместите произвольное числовое значение. 
Напишите оператор ветвления if так, чтобы если m было больше 50, 
то в переменную n помещалось слово «большое», иначе — слово «маленькое»
}
*/
/*
let m = 45;
let n;

if (m >50) {
    n = alert("большое")
} else {
    alert("маленькое.")
}
*/















/*
Напишите скрипт, который используя оператор while выведет все числа от 45 до 67
}
*/
/*
let num = 45;

while (num <= 67) {
    console.log(num);
    num++;
}
*/










/*
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.
*/
/*
let n = 10;

Label: //Это метка
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue Metka; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}
*/

















/*
Напишите if..else, соответствующий следующему switch:
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
*/
/*
let browser = prompt("What kind of browser you use?");

if (browser == "Edge") {
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Opera") {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
*/









/*
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
/*
const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
    case 0:
    alert('Вы ввели число 0');
    break;

    case 1:
    alert('Вы ввели число 1');
     break;
     
    case 2:
    case 3:
    alert('Вы ввели число 2 или 3');
    break;

    default:
    alert("Упс...не знаю такого числа");
}
*/












/*
Напишите функцию pow(x,n), которая возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит 
результат pow(x,n).
*/
/*
function pow(x, n) {
    let result = x ** n;

    return result;
}

let x = prompt("x?");
let n = prompt("n?");

alert (pow(x, n));
*/

















/*
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}

ask ("Вы согласны?", () => alert("Вы согласились"), () => alert("Вы отменили выполнение"));
*/
 


 /*
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

*/


















/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/
/*
function Calculator() {

  this.read = function() {
    this.one = +prompt("Put number", "0");
    this.two = +prompt("Put number", "0");
  };

  this.sum = function() {
   return this.one + this.two;
  };

  this.mul = function() {
    return this.two * this.one;
  };

}

let Calc = new Calculator();
Calc.read();

alert("is: " + Calc.sum());
alert("is: " + Calc.mul());
*/











/*
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается 
в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь 
при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/
/*
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
     this.value += +prompt("Put your value", "");
  };
}

let accumulator = new Accumulator(20); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/
















// ЗАДАЧКА на Полиндром

/*
let str = "Anna";
str = str.toLowerCase();

function polindrom() {
 
  return str === str.split("").reverse().join("")
}


console.log(polindrom());

*/











/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

/*
let name = "dred";

function ucFirst(name) {
  if (name !== undefined) {
    return name[0].toUpperCase() + name.slice(1);
  }
  
}

alert(ucFirst(name));
*/














// ЗАДАЧКА ПО FizzBuzz 



/*

function FizzBuzz() {
  for(let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

FizzBuzz();
*/












/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/


/*
function checkSpam(str) {
  let string = str.toLowerCase();
  return string.includes("viagra") || string.includes("xxx");
}

alert(checkSpam("buy our candy"));
*/
















/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

/*
function extractCurrencyValue(str) {
    return str.slice(1);
  
}

alert(extractCurrencyValue("$120"));
*/









/*
Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/
/*




function truncate(str, maxlength) {              // название функции
  if(str.length > maxlength) {                   // проверка длинны строки str
    return str.slice(0, maxlength -1) + '…'      // возвращаем строку начиная с первого символа (0,...) и заканчивая последним символом(...-1) в пределах символов указанных в аргументе функции (у нас указано 10)
  } else {
    return str;
  }
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему", 10));

*/















/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

/*
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("rebekka"));

*/







/*

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1,5));
console.log(random(1,5));
console.log(random(1,5));

*/

// function filterRange(arr, a, b) {
//   return arr.filter(item => a <= item && item <= b)
// };


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr );