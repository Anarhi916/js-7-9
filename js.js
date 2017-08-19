
let button = document.querySelector('button');
let result = document.querySelector('.result');
let error = document.querySelector('.error');
let absent = 'Нет элемента: ';



button.addEventListener('click', info);

function info(){
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let h3 = document.querySelectorAll('h3');
let h4 = document.querySelectorAll('h4');
let h5 = document.querySelectorAll('h5');
let h6 = document.querySelectorAll('h6');


result.textContent = 'Количество h1: ' + h1.length + ', ' + '  h2: ' + h2.length + ', ' + '  h3: ' + h3.length + ', ' + '  h4: ' + h4.length + ', ' + '  h5: ' + h5.length + ', ' + '  h6: ' + h6.length;

if(h1.length == 0){
   absent += 'h1';
   showError();
}
if(h2.length == 0){
  absent += 'h2';
  showError();
}
if(h3.length == 0){
  absent += 'h3';
  showError();
}
if(h4.length == 0){
  absent += 'h4';
  showError();
}
if(h5.length == 0){
  absent += 'h5';
  showError();
}
if(h6.length == 0){
  absent += 'h6';
  showError();
}
}

function showError(){
  error.textContent = absent;
  error.style.color = 'red';
}