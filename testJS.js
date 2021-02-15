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
/*
let ask = prompt('Кто там?');
  if (ask == null) {alert('Отменено');}
    else if (ask === 'Админ') {let pas = prompt('Введите пароль')
      if (pas === null) {alert('Отменено');}
        else if (pas === 'Я главный') {alert('Здравствуйте')}
          else {alert('Неверный пароль')}
    }
  else {alert('Я Вас не знаю')}
*/
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
