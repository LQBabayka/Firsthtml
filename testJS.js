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
  //task
let str = 'abcde'
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);// undefined after 'e' no string
//Напишите скрипт, который считает количество секунд в часе.
console.log(60*60*24);
//*****************************************************************************
  //Task
/*
let num  = 3
console.log(num);
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
let c = 15
let d =2
let result = c + d;
console.log(result);
*/
/*
let a = 17;
let b = 10;
let c = a - b
let d = 7
let result = c + d
console.log(result);
*/
/*
let str1 = 'Hi';
let str2 = 'World';
console.log(str1 + ' ' + str2);
let name = 'Alex';
console.log(str1 + ' ' + name);
let age = 29
console.log('i am' + ' ' + age + ' ' + 'year old');
//let name111 = prompt('what is your name?', '')
//alert(name111);
//let numberKV = prompt('number please, i get square of this number')
//alert(numberKV * numberKV);
*/
/*
let hour = 19
let min1 = 29
let sec = 33
console.log(hour + ':' + min1 + ':' + sec);
let mass = ["hi", "world", "!"]
console.log(mass[0] + ' ' + mass[1] + ' ' + mass[2]);
let text = mass[0] + ' ' + mass[1] + ' ' + mass[2]
console.log(text);
mass[0] = "Bye"
console.log(mass[0] + ' ' + mass[1] + ' ' + mass[2]);
/////////////////
let obj = {'Kolya':'1000', 'Vasya':'500', 'Petya':'200'};
console.log(obj['Kolya']);
let mass2 = [];
mass2[0] = 1;
mass2[1] = 2;
mass2[2] = 3;
console.log(mass2);
*/
/////////
/*
let i = 0//– она является так называемым счетчиком цикла. Счетчики используются для того, чтобы подсчитывать, сколько раз выполнился цикл.
while (i < 5) {
  i++
  console.log(i);
}
******
for (ii = 0; ii <= 9; ii++) {
  console.log(ii);// выведет цифры от 1 до 9
  //where:
  //ii = 0 - начальные команды (это то, что выполнится перед стартом цикла. Они выполнятся только один раз)
  // ii <= 9 - Условие окончания цикла (пока оно истинное, цикл будет работать)
  //ii++ - Команды после прохода цикла (это команды, которые будут выполнятся каждый раз при окончании прохода цикла)
  //console.log(ii); - тело цикла
}
*/
//Цикл for для массивов
//С помощью цикла for можно последовательно перебрать элементы массива:
/*
let arr2 = [1, 2, 3, 4, 5];
for (let ig = 0; ig <= arr2.length-1; ig++) {
  console.log(arr2[ig]);
  console.log(arr2.length);
}
let arr3 = ['suk1', 'suk2', 'suk3', 'suk4', 'suk5'];//Пробую перебирать массив из строк
for (let iii = 0; iii < arr3.length; iii++) {
  if (arr3[3] = 'suk4') {
    //alert('suk4')
    break// Без прерывания все зависает
  }
}
///////////////////////////////////////////////
var myObjectW = {
name: "Уася",
surname: "Петров",
age: 33,
};
console.log(myObjectW);
let myObjectS = {Kolya: 200, Vasya: 300, Petya: 400, Yan: 'ohuilyard'}
for (key in myObjectS) {
  console.log(key);//Kolya Vasya Petya Yan
}
for (key in myObjectS) {
  console.log(myObjectS[key]);//200 300 400 ohuilyard
}
*/
/////////////////////////
let arr33 = [2, 3, 4, 5];
let result1 = 1
for (var i = 0; i < 4; i++) {
  result1 = result1 * arr33[i];
}
console.log(result1);

//Минск - это Беларусь
let myObjectA = {Minsk: 'Belorussia', Moskow: 'Russia', Kiev: 'Ukraine'}
  for (let key in myObjectA) {
    console.log(key + ' - this is ' + myObjectA[key] + '.');
}
/////////////////
/*
for (var ih = 1; ih <= 100; i++) {
  if(ih % 2 == 0) {
	document.write(ih + '<br>');
  }
}
*/
let resul1 = 0
for (var i = 1; i <= 100; i++) {
  resul1 = resul1 + i;

}
console.log(resul1);
//
// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
//С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
let arr = ['a', 'b', 'c', 'd'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
//выведите на экран строку 'a+b, c+d'.
console.log(arr[0] + ' + ' + arr[1] + ',' + ' ' + arr[2] + ' + ' + arr[3]);
//Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr2 = [2, 5, 3, 9]
console.log((arr2[0] * arr2[1]) + (arr2[2] * arr2[3]));//(2*5)+(3*9)=10+27=37
let result111 = (arr2[0] * arr2[1]) + (arr2[2] * arr2[3]);
console.log(result111);
//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
var obj1 = {a: 1, b: 2, c: 3};
console.log(obj1.c);
console.log(obj1["c"]);
//Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
let objDays = {1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday'};
console.log(objDays[4]);
let day = 4;
console.log(objDays[day]);
//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива
let massM = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(massM);
console.log(massM[1][0]);//4
//Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
let massJ = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
console.log(massJ);
console.log(massJ.js[0]);//jQuery
console.log(massJ['js'][0]);//jQuery
//Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
//Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски,
//а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду
//по английски (пусть понедельник - это нулевой день).
let abrvalg = [];
console.log(typeof(abrvalg));//object
let massD = {ru:['пн', 'вт', 'ср', 'чт', 'пт',], en:['sun', 'mon', 'thu', 'wed', 'thur',]}
console.log(massD);
console.log(massD.ru[0] + ' ' + massD.en[2]);//пн thu
//Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
//а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
//То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
/*
let lang = ['ru', 'eng'];
if (lang == 'ru' || 'eng') {
  console.log('its work');
}
if (massD == 'ru' || 'en') {
    console.log('its work too!!!');
}
let day1
if (massD == ('ru' || 'en') ) {
    console.log('its work too!!!');
}
function getday(lan, day) {//Функция которая определяет день недели
  return massD[lan][day - 1];//минус нужен, так как счет идет с 0, а не с 1
}
let ff1 = prompt('type language', 'ru or en')
let ff2 = prompt('type numer of day', '1 to 5')
alert(getday(ff1, ff2));
console.log(getday('en', 3));//вводим язык и номер дня
*/
//Выведем квадратный корень из отрицательного b не целого числа, преобрпазовав его в целое положительное
console.log(Math.abs(-100.435));
console.log(Math.round(Math.abs(-100.435)));//100
///
//Давайте выведем случайное целое число от 10 до 100:
function getRandomtry(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomtry(10, 99));//Рандомное число в рамках введеных значений
/////////
console.log((32.6546878).toFixed(0));//32
/////////
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
let aaa3 = 10
let bbb3 = 5
console.log(aaa3 % bbb3);
//Даны переменные aaa3 и bbb3. Проверьте, что a делится без остатка на b.
//Если это так - выведите 'Делится' и результат деления,
//иначе выведите 'Делится с остатком' и остаток от деления.
if ((aaa3 % bbb3) == 0) {
  console.log('Delitsya' + ' ' + (aaa3 / bbb3));
} else {
  console.log('Ne delitsya' + ' ' + (aaa3 % bbb3));
}
//////////
//Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2,10);
console.log(st);//1024
//Найдите квадратный корень из 245.
console.log(Math.sqrt(245));//15.652475842498529
/////////////////////////
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
//Найдите квадратный корень из суммы кубов его элементов. c циклом
let arr323 = [4, 2, 5, 19, 13, 0, 10];
console.log(typeof(arr323));
console.log(arr323[0]);
console.log(arr323);
var summ = 0;
for (var ii = 0; ii < arr323.length; ii++) {
  summ = summ + Math.pow(arr323[ii], 3)
}
console.log(Math.sqrt(summ));// это решение
console.log(
  Math.pow(arr323[0], 3) +
  Math.pow(arr323[1], 3) +
  Math.pow(arr323[2], 3) +
  Math.pow(arr323[3], 3) +
  Math.pow(arr323[4], 3) +
  Math.pow(arr323[5], 3) +
  Math.pow(arr323[6], 3)
);
console.log(Math.sqrt(10253));
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let tyn = Math.sqrt(379)
console.log(tyn);// Квадратный корень из 379
console.log(Math.round(tyn)); // Целый
console.log((tyn).toFixed(1));//Дусятые
console.log((tyn).toFixed(2));//Сотые
//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
//запишите результаты округления в объект с ключами 'floor' и 'ceil'.
console.log(Math.sqrt(587));//квадратный корень из 587
console.log(Math.ceil(Math.sqrt(587)));//Округление в большую сторону
console.log(Math.floor(Math.sqrt(587)));//Округление в меньшую сторону
let newarr1 = {
  floor: Math.floor(Math.sqrt(587)),
  ceil: Math.ceil(Math.sqrt(587))
}
console.log(newarr1);//результаты записаны
////////////////////////////////////
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
//Math.min
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
/////////////////////////////////////////
//Заполните массив 10-ю случайными целыми числами.
let lds =[];
for (var iy = 0; iy < 10; iy++) {
  lds.push(getRandomtry(1, 500))
}
console.log(lds);
///////////////////////////////////////////
//Дан массив arr. Найдите среднее арифметическое его элементов.
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let ocharr = [12, 15, 20, 25, 59, 79];
let ochsumm = 0
for (var io = 0; io < ocharr.length; io++) {
  ochsumm = ochsumm + ocharr[io]
}
console.log(ochsumm / ocharr.length );
//////////////////////////////////////////////////
//Пробую записаль данный из промпт в массив
/*
let testarr = [];
let somenew = prompt('put here numbers', '0')

if (somenew !== NaN || null || undefined) {
  testarr.push(Number(somenew));
}
console.log(testarr);
*/ // не получилось
//////////////////////////////////////////////
let salaries = { //Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
  John: 100, //Если объект salaries пуст, то результат должен быть 0
  Ann: 160,
  Pete: 130
}
function sumSal() {
  return salaries.John + salaries.Ann + salaries.Pete;
}
let summm = sumSal();
console.log(summm);
let summm2 = 0;
for (let key in salaries) {
  summm2 += salaries[key];
}
console.log(summm2);
/////////////////////////////////////
let useruser = {
  name: 'somename',
  age: 23,
  interes: 'music',

  sayHi() {
    console.log(this.name);// this - это текущий объект
  },
  showAge() {
    console.log(this.age);
  },
  showInts() {
    console.log(this.interes);
  }
};
useruser.sayHi();// somename
useruser.showAge();// 23
useruser.showInts();// music
//У стрелочных функций нет «this»
//Стрелочные функции особенные: у них нет своего «собственного» this. Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции
//Пример:
let userexample = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

userexample.sayHi(); // Илья
