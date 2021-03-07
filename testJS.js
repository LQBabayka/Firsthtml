//Это пример окна, в котором можно выбрать цифровые значения и увидеть замысел по сценарию
/*let age = prompt('Фразы из русского лото', "Ну давай, вводи");
  if (age === "11") {
    alert(`Барабанные палочки`);
  } else if (age === "69") {
      alert("Туда-сюда")
    } else if (age === "45") {
          alert("Баба ягодка опять")
        } else if (age === "1") {
              alert("Кол")
            } else if (age === "21") {
                    alert("Очко")
                  } else if (age === "50") {
                        alert("Полста")
                          } else {
    alert(`Данные по этой цифре не записаны`);
  }
*/
/*
let hour = 100;
let minutes = 500;
if (hour = 100 && minutes == 500) {
  alert("Стопиццот!");
}
*/
/*
let x = 1;
(x > 0) && alert("Больше нуля");
let y = 1
if (y > 0) {
  alert("Больше нуля2");
}
*/
/*
let age = 90
if (age => 14 && age <= 90) {
  alert("НЕ находится в диапазоне 14 и 90 включительно");
}
*/
/* Собственное решение блок схемы
let ask = prompt('Кто там?');
  if (ask == null) {alert('Отменено');}
    else if (ask === 'Админ') {let pas = prompt('Введите пароль')
      if (pas === null) {alert('Отменено');}
        else if (pas === 'Я главный') {alert('Здравствуйте')}
          else {alert('Неверный пароль')}
    }
  else {alert('Я Вас не знаю')}
*/
/* Предложенное решение блок схемы с операторами
let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
*/
/* тема ниже берет введенные числа и суммирует их, пока введеное значение не равно ничему
let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Сумма: ' + sum );
*/
/*
//тут про модуль switch, который используется вместо нескольких if'ов:
let aaa = 2+2

switch (aaa) {
  case 2:
  alert('not enought');
  break;
  case 3:
  alert('not enought2');
  break;
  case 4:// как раз он и стрельнет
  alert('to the point');
  break;
  case 5:
  alert('too enought');
  break;
  default: //этат ема нужна, если ни одно значение не подойдет
  alert('havent got numbers')
}
*/
/*
let httpstatus = prompt('введите статус http', 'Прям сюда');
switch (httpstatus) {
  case '500':
  alert('500 Internal Server Error _ внутренняя ошибка сервера');
  break;
  case '503':
  alert('503 Service Unavailable _ сервис недоступен')
  break;
  case '504':
  alert('504 Gateway Timeout _ шлюз не отвечает')
  break;
  case '505':
  alert('505 HTTP Version Not Supported _ версия HTTP не поддерживается')
  break;
  default:
  alert('это значение еще не ввел');
}
*/
/*
// Локальные переменные. Переменные, объявленные внутри функции, видны только внутри этой функции
let example1 = 100;
console.log(example1);//100
function some_start () {
let example1 = 100 * 2
console.log(example1);/200
}
some_start();
console.log(example1);//100
*/
//Задача Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min(aa, bb) {
  if (aa < bb) {
    return aa;
  } else {
    return bb;
  }
}
console.log(min(222, 222));
///////////////
//Задача Напишите функцию , которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз
function pow(xx, nn) {
  return xx ** nn;
}
console.log(pow(2,2));
///////////////////
/*
let age = prompt("Сколько Вам лет?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("маловато");
  };

} else {

  welcome = function() {
    alert("Здравствуйте!");
  };

}
welcome();// только после объявления  конструкция выше заработает
*/

