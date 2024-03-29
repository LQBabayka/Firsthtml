    //Есть 8 типов данных:
/*
number
bigint для целых чисел произвольной длины
string
boolean
null для неизвестных значений
undefined для неприсвоенных значений
symbol для уникальных идентификаторов
object для более сложных структур данных (не примитивный)
*/

      // Про переменные
var message; //это одностройчный коментарий в JS (a-z, A-Z. 0-9, $) и только с буквы, есть хоткей "стракл + /"
/* Так начинается
многострочный
комментарий
и так заканчивается:
*/
message = "Сообщение"
var myNumber10 = 10;
var myNumber999 = 999
var string = "Чо, пацаны, Анимэ?"; // если указать число в кавычках, то тип числа изменится на строку
var boolean = true; //or false
var my_null = null; //только это значение
var undefined = undefined; //только это значение
var myObject1 = {
name: "Уася",
surname: "Петров",
age: 33,
getFullname: function() {
return this.name + " " + this.surname;
}
};
let myObjectS = {Kolya: 200, Vasya: 300, Petya: 400, Yan: 'ohuilyard'}
// Вообще объявление переменной через var - устаревшая практика, она объявляет для всего кода и даже для обращающихся файлов.
//В основном лучше использовать let и const ссылка: https://habr.com/ru/company/ruvds/blog/420359/
// продолжение темы объявления  переменных
let message11;
message11 = "Хаюшки";
//alert(message11); //показывает содержимое переменной
// также можно объявить несколько переменных в одной строке:
let user11 = 'John', age = 25, message21 = 'Hello'; //Такой способ может показаться короче, но мы не рекомендуем его. Для лучшей читаемости объявляйте каждую переменную на новой строке.
//Чтобы объявить константную, то есть, неизменяемую переменную, используйте const вместо let:
const myBirthday = '18.04.1982';
// Про числа
var result = 40 + 10;
console.log(40+11);
console.log(myNumber10 + 1);
console.log(myNumber999 * 99);
console.log("40" + myNumber10); //В кавычках уже не число, а строка. В этом случае 40 присоединяется к переменной. Это называется канкатенацией.
// Про строки
console.log(string + " Ну да, а чё?")
console.log(string. toLowerCase()); //Пример исползования метода. В этом случае приведение строки к нижнему регистру.
console.log(string. toUpperCase()); //Ну а тут метод  привел к верхнему регистру

//Про массивы (Arrays)
var massive = []; //Это пустой массив, индекс (нумерация) начинается с нуля [0]
var names = ["Дима", "Саша", "Кирилл"]; //Имена это элементы
console.log(names[2]); //Тут вернули Кирилла (0,1,2)
console.log(names[1].toUpperCase());//Еще применили к вернувшемуся элементу метод

names [0] = "Антон"; //Подменил элемент
console.log(names[0]); //И вывел его в консоль

names.push("Гриша"); //Добавил новый элемент в массив names (он будет под индексом 3)
console.log(names[3]);
console.log(names); //Таким образом можно вывести весь массив в консоль

//Про условия
//if () {}   В {} указывается выполняемый код,при условии совпадения в части ()
if (10 > 1) {
console.log("Первый ИФ)))");
}
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
//пояснение за знак =
if ("5" === 5) {
console.log("Знаки равенства имеют разные значения");
}// = это присваивание, == это сравнивание("5"==5), ===(сравнение конкретных значений)
//лучше использовать === во избежание проблем

//пояснение за знак != неравно
//!= простое, только значение. !== строгое, учитывает типы
if ("Дмитрий" !== "Димон") {
console.log("Он вам не Димон!");
} // Дмитрий неравно Димон - условие выполняется, подразумевается возвращение true

//использование логического И (AND) при помощи двойного амперсанда &&
if ("Дмитрий" !== "Димон" && myNumber999 > 100) {
console.log("Теперь амперсанд");
}
//использование логического ИЛИ (OR) при помощи ||
if (myNumber999 > 1000 || 2 === 2) {
console.log("Теперь ИЛИ");
}
//мешанина из нескольких И, а так же ИЛИ
if (myNumber999 > 9 && 2 === 2 && "стопка" === "стопка" && myNumber10 > 1 && 69 === 69 || "zhi" === "est") {
console.log("Пять условий");
}
//Теперь применение оператора else (Иначе, Еще, А так же) внутри if:
if (10 < 1) {
console.log("Десять больше одного");
} else {
console.log("Десять меньше одного");
} //Тут возле если возращается false и выполняется оператор else
console.log("Стопэ!!!!!!!!!!!!!!!!");

//Тернарное выражение
//Можно записать конструкцию при помощи if'ов:
  let somePerem = false
  if (somePerem) {
    console.log('this is true')
  } else {
    console.log('this is false')
  }
//На следующее тернарное выражение:
somePerem ? console.log('this is true') : console.log('this is false')
//Это выглядит короче и умещается в одну строчку

      //Про циклы
//Они предназначены для повторения участков кода n количество раз
for (var i = 0; i < 10; i++) {
console.log(i);
} //где for - цикл, var i = 0 - введение переменной, i < 10 - условие, i++ - действие(увеличение на 1). Такая тема выведет числа от 1 до 10
console.log("Стопэ!!!!!!!!!!!!!!!!");
//Применим оператор break. Он прерывает цикл
for (var i = 0; i < 10; i++) {
console.log(i);
if (i == 5) {
break;
}
} //В этом случае цифра 5 вошла в значение консоли, так как консоль размещена в месте, где до 5 дошла очередь
console.log("Стопэ!!!!!!!!!!!!!!!!");
for (var i = 0; i < 10; i++) {
if (i == 5) {
break;
}
console.log(i);
} // Ну а тут консоль перенесена в место, после break и через if сработала команда break и после вывелся результат
console.log("Стопэ!!!!!!!!!!!!!!!!");
//Применим оператор continue для перехода к следующей итерации
for (var i = 0; i < 10; i++) {
if (i == 5) {
continue;
}
console.log(i);
} // При этом раскладе вышли все числа от 1 до 10 кроме 5, так как на 5 я прервал конкретный циклы
console.log("Стопэ!!!!!!!!!!!!!!!!");
//Проба прерывания цикла, а после его завершение
for (var i = 0; i < 10; i++) {
if (i == 5) {
continue;
}
if (i == 6) {
break;
}
console.log(i);
}
// пример использования свойства lenght, которое возвращает длину или количество элементов объекта
for (var y = 0; y < names.length; y++) {
console.log(names[y]);
}
console.log("Стопэ!!!!!!!!!!!!!!!!");
// Далее про цикл while. отличай от for заключается в объявлении переменной до цикла и прибавление(пересчет) указывается в фигурных скобках.
var u = 0
while (u < 5) {
console.log(u);
u++
}

          //Про Функции
//главная идея функций это избавиться от дублёжки кода. Далее пример простой функции выводящей текст в консоли:
function test() {
console.log("Функция тест, ёпта!");
} //Теперь, её нужно вызвать следующим образом:
test();
// Параметры функции:
function showMessage22(from1, text1) { // аргументы: from, text
  console.log(from1 + ': ' + text1);
  }
showMessage22('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage22('Аня', "Как дела?"); // Аня: Как дела? (**)
//далее пример функции суммы:
function sum(y, i) {
console.log(y + i);
}
sum(11, 100);

//Для возвращения значения используем return. А для вывода инфы в консоль, вписываем функцию в лог
function sum2(o, p) {
return o + p;
}
console.log(sum2(150, 150));
console.log(sum2(55, 66));
console.log(sum2(22, 44));
//В верхнем примере выводятся нескололько параметров для одной функции.
    //Полезные функции:
console.log(Math.round(6.4)); //6 Округление до ближайшего целого числа автоматически
console.log(Math.ceil(3.00001)); // 4 Округление в большую сторону
console.log(Math.floor(2.9999)); // 2 Округление в меньшую сторону
console.log(Math.abs(-3)); // 3 Делает из отрицательного положительное
console.log(Math.min(-1, -100, -30, -25, 40));//-100 Выведение минимального числа из группы чисел
    let arr234 = [40, 20, 42, 100, 67];
    let min234 = Math.min.apply(null, arr234);//Таким способом можно вывести минимум из конкретного массива
    console.log(min234);//20
console.log(Math.max(1, 5, 10, 34, 100)); //100 Выведение максимального числа из группы чисел
    let arr354 = [1, 5, 10, 34, 100];
    let max354 = Math.max.apply(null, arr354);// Таким способом можно вывести максимум из конкретного массива
    console.log(max354);//100
console.log(Math.sqrt(4));//2 Выведение квадратного корня из 4
console.log(Math.pow(3, 4)); //81 возведение числа 3 в степень 4
console.log(Math.random());// Рандомное число. В таком виде от 0 до 1
console.log((32.6546878).toFixed(3));//32.655 Округление до числа с указанным количеством знаков после запятой
console.log((32.6546878).toFixed(0));//32


/*
//Функции можно задать переменную,еще и скопировать. Главное поставить (), чтобы ЖС понял, что это функция
function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)
/*
//Это пример объявления функции и использования нескольких
function hi() {
  alert('Hi everywhere');
}

function bye() {
  alert('Good bye');
}

function picture() {
  alert('this myght be picture');
}

let start = confirm('Hi, let start');
switch (start) {
  case true:
    hi()
    break;
  case false:
  bye()
  break;
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

/////////Полезная фича с аском: или функции колбэки
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
*/
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
//Функции, которые объявлены простым способом(не через переменную) могут быть вызваны до объявления.
//Функции, которые объявлены через переменную будут работать только после инициализации.
  //Функции-стрелки
//let func = (arg1, arg2, ...argN) => expression
//Давайте взглянем на конкретный пример:
let sum111 = (a1, b1) => a1 + b1;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum111(1, 2)); // 3

//Пример использования функции для записи переменной:
function calcYear(year) {
   return 2020 - year
}

let antonAge = calcYear(1990)
console.log(antonAge)


          // Про объекты
          //Объекты же используются для хранения коллекций различных значений и более сложных сущностей.
//В JavaScript объекты используются очень часто, это одна из основ языка
    //Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств.
//Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»),
//а значение может быть чем угодно.

let mqi = {
  photo: "fuji",
  photo2: "lubitel",
  "two words": false//можно впендюрить и два слова в ключ, только нужны кавычки
}

mqi.photo3 = "nikon"; //добавил новый ключ и значение к нему
mqi.foredelete = true;
delete mqi.foredelete;//удалил ключ и обозначение
//mqi."two words" = "false"; А добавить так не получилось((( для этого есть []
mqi["new three words"] = 5//А с квадратными скобками работает
delete ['two words']
let ytb = 'opa pa';
mqi[ytb] = false;//можно и переменную использовать в качестве ключа
mqi.newstring = [ytb];//и в качестве значения
console.log(mqi);
//Можно использовать промпт и ввод переменной:
//let promptkey = prompt('Введите ключ и узначете, что лежит под ним', 'new three words / newstring / opa pa / photo / photo2 / photo3');
//alert(mqi[promptkey]); если ввести photo2, алерт покажет lubitel
  //Проверка существования свойства, оператор «in»:
console.log('photo' in mqi);//true - mqi.photo существует. Без кавычек работала бы переменная
console.log('abrvlg' in mqi);//false - mqi.abrvlg не существует
//Вообще JS не выдает ошибку при обращении к несуществующему свойству, JS выведет undefined
//Проверка через in нужна, если undefined вписан в какой нибудь ключ

//Цикл «for…in»
//for (key in object) {тело цикла выполняется для каждого свойства объекта}
let user234 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user234) {
  // ключи
  //alert( key );  // name, age, isAdmin
  // значения ключей
  //alert( user234[key] ); // John, 30, true
}
//Про копирование и ссылки
let message99 = 'Hayuchki'
let stryhg = message99 // копируется не переменная, а ссылка
console.log(stryhg);
// Если изменить скопированный объект, основной тоже изменится.
let userss = { name: 'Ivan'};
let anotheruser = userss;
anotheruser.name = 'Petya';
console.log(userss.name);//Petya
//Пример создания клона объекта путем переберания объектов
let firstobj = {
  name: 'Ivan',
  shoes: 'V valenkax'
};

let cloneobj = {};

for (let key in firstobj) {
  cloneobj[key] = firstobj[key];
}
console.log(cloneobj);// покажет склонированный объект

    //Про метод Object.assign
//Синтаксис Object.assign(dest, [src1, src2, src3...])
//Где dest — целевой объект, rc1, ..., srcN являются исходными объектами
let cloneobj2 = Object.assign({}, firstobj); // задал новую переменную, в которую при  помощи метода скопировал объект firstobj
console.log(cloneobj2);
//Объединение нескольких объектов в один:
let sampleobj = {
key1: 'electron digitakt',
key2: 'korg volca'
};
let sampleobj2 = {key3: 'octatrack'};
let sampleobj3 = {key4: 'arturia keystep'};
Object.assign(sampleobj, sampleobj2, sampleobj3);//скопировал 2 и 3 в первый сэмпл
console.log(sampleobj);//если при объединении будут встречаться одинаковые ключи, они будут перезаписываться новыми значениями
/////////////////////////////////////////
    //Ключевое слово «this» в методах
    let useruser = {
      name: 'somename',
      age: 23,
      interes: 'music',//перебор объекта, необходимы запятые

      sayHi() {
        console.log(this.name);// this - это текущий объект
      },//перебор объекта, необходимы запятые
      showAge() {
        console.log(this.age);
      },//перебор объекта, необходимы запятые
      showInts() {
        console.log(this.interes);
      }
    };
    useruser.sayHi();// somename
    useruser.showAge();// 23
    useruser.showInts();// music
////////////
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
////////////
    //Конструкторы, создание объектов через "new"
//синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.
function User(name) {//Создаем функцию
  this.name = name;//Задаем свойство
  this.isAdmin = false//Задаем свойство
}
let user = new User('Vasyok');//Через переменную и оператор new при помощи заведенной функции создаем новый объект
console.log(user.name);
//
function MakeUser(some, any) {
  this.first = some,
  this.second = any
}
let word = new MakeUser('xxx', 'yyy');
console.log(word.first);//xxx
console.log(word.second);//yyy
console.log(word);//Object MakeUser
/////
//в this можно добавлять не только свойства, но и методы:
function Someuser(name, secondname) {
  this.name = name;
  this.secondname = secondname;
  this.SayHi = function() {// в свойство вписываем функцию
    console.log('Your name is ' + this.secondname + ' ' + this.name + ' !');
  };
}

let prob = new Someuser('Chfrcko', 'Kashtanov');//создаем\объявляем новый объект
prob.SayHi();//Your name is Kashtanov Chfrcko ! // вызываем метод
///////////////////////
//остановился на задачке "Создаём Accumulator"


console.log(myObject1);
console.log(myObject1.name);// можно показать определенный параметр объекта
myObject1.age = "35"; // можно изменить определенный параметр объекта
console.log(myObject1.age);
console.log(myObject1.getFullname());

//let myObjectS = {Kolya: 200, Vasya: 300, Petya: 400, Yan: 'ohuilyard'} уже объявлен в переменных
for (key in myObjectS) {
  console.log(key);//Kolya Vasya Petya Yan
} // такой цикл перебирает ключи
for (key in myObjectS) {
  console.log(myObjectS[key]);//200 300 400 ohuilyard
} // такой цикл перебирает объекты
/*
for (var ih = 1; ih <= 100; i++) { //А такой цикл находит все четные числа и выводит на хтмл страницу
  if(ih % 2 == 0) {
	document.write(ih + '<br>');
  }
}
*/
//Вышеуказанные примеры взяты из ролика: https://www.youtube.com/watch?v=4QHFhIjF2L0&t=3733s&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%9F%D0%B0%D1%83%D0%BA%D0%BE%D0%B2

//Про математику
//Взятие остатка от деления "%"
//Оператор взятия остатка %, несмотря на обозначение, никакого отношения к процентам не имеет. Результат a % b – это остаток от целочисленного деления a на b
console.log(1448 % 26);//правильный ответ 18: 1448/26=55,692. => 55. => 55*26=1430. => 1448-1430=18
//В выражении a ** b оператор возведения в степень умножает a на само себя b раз
console.log(3 ** 6);

//Плюс + существует в двух формах: бинарной, (2+2=22 лол), и унарной.
//Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число. Например:
let apples = "2";// Это строчка
let oranges = "3";//Тоже строчка
console.log(+apples + +oranges);
//Инкремент/декремент (можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке)
//Инкремент ++ увеличивает переменную на 1
//Декремент -- уменьшает переменную на 1
