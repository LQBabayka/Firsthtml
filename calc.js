function sum() {
  let arg_1 = prompt('Введите первое значение', '0');
  let arg_2 = prompt('Введите второе значение', '0');
  let arg1 = Number(arg_1);
  let arg2 = Number(arg_2);
  return arg1 + arg2;
}

function umnozh() {
  let arg_1 = prompt('Введите первое значение', '0');
  let arg_2 = prompt('Введите второе значение', '0');
  let arg1 = Number(arg_1);
  let arg2 = Number(arg_2);
  return arg1 * arg2;
}

function delen() {
  let arg_1 = prompt('Введите первое значение', '0');
  let arg_2 = prompt('Введите второе значение', '0');
  let arg1 = Number(arg_1);
  let arg2 = Number(arg_2);
  return arg1 / arg2;
}

function vuchet() {
  let arg_1 = prompt('Введите первое значение', '0');
  let arg_2 = prompt('Введите второе значение', '0');
  let arg1 = Number(arg_1);
  let arg2 = Number(arg_2);
  return arg1 - arg2;
}

function getperemen() {
  alert('1')
}



let firstcalc = prompt('Введите необходимое действие:', '* / - +');
switch (firstcalc) {
  case '*':
  alert(umnozh());
  break;
    case '/':
  alert(delen());
  break;
    case '-':
  alert(vuchet());
  break;
    case '+':
  alert(sum());
  break;
}