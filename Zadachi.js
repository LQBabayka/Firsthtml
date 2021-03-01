      //Работа с переменными.

Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin;
let name;
name = "John";
admin = "name";
alert( admin );

      //Числа

  --Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.
Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.
Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.
Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.
Мы можем получить его в результате деления на ноль:
alert( 1 / 0 ); // Infinity
Или задать его явно:
alert( Infinity ); // Infinity
NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
Значение NaN «прилипчиво». Любая операция с NaN возвращает NaN:
alert( "не число" / 2 + 5 ); // NaN
Если где-то в математическом выражении есть NaN, то результатом вычислений с его участием будет NaN.
  --BigInt
В JavaScript тип «number» не может содержать числа больше, чем (253-1) (т. е. 9007199254740991), или меньше, чем -(253-1) для отрицательных чисел. Это техническое ограничение вызвано их внутренним представлением.
Для большинства случаев этого достаточно. Но иногда нам нужны действительно гигантские числа, например, в криптографии или при использовании метки времени («timestamp») с микросекундами.
Тип BigInt был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины.
Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:
const bigInt = 1234567890123456789012345678901234567890n;
  --Строка
Строка (string) в JavaScript должна быть заключена в кавычки.
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
-В JavaScript существует три типа кавычек.
Двойные кавычки: "Привет".
Одинарные кавычки: 'Привет'.
Обратные кавычки: `Привет`.
Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.
-Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:
let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!
// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
-В JavaScript есть 8 основных типов.
number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
object для более сложных структур данных.
symbol для уникальных идентификаторов.
-Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
Имеет две формы: typeof x или typeof(x).
Возвращает строку с именем типа. Например, "string".
Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
*/
Вот так можнозаменить if при помощи операнда &&:
Приоритет оператора И && (выводит первое ложное значение) больше, чем ИЛИ ||(Выводит первое верное значение), так что он выполняется раньше.
Таким образом, код a && b || c && d по существу такой же, как если бы выражения && были в круглых скобках: (a && b) || (c && d).
Например:
let x = 1;
(x > 0) && alert("Больше нуля")
А так же это выражение можно представить через if:
let y = 1
if (y > 0) {
  alert("Больше нуля2");
}
null - это пустое или несуществующее значение
undefined чаще всего означает, что переменная была объявлена, но не определена
оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
Как правило, оператор ?? нужен для того, чтобы задать значение по умолчанию для потенциально неопределённой переменной.
Например, в следующем примере, если переменная user не определена, покажем модальное окно с надписью Аноним:
let user;
alert(user ?? "Аноним"); // Аноним
|| возвращает первое истинное значение.
?? возвращает первое определённое значение.
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
По соображениям безопасности JavaScript запрещает использование оператора ?? вместе с && и ||, если только приоритет явно не указан в круглых скобках.
