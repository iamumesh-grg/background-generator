var greet = document.querySelector('.greet');

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');


const date = new Date();
const hours = date.getHours();
let timeOfDay;
const getTime = () => {
  if(hours < 12){
    timeOfDay = 'Morning';
    greet.style.color = 'white';
  }
  else if(hours > 12 && hours < 17){
    timeOfDay = 'Afternoon';
    greet.style.color = 'blue';
  }
  else{
    timeOfDay = 'Night';
    greet.style.color = 'green';
  }
  return timeOfDay;
}
greet.textContent = 'Good ' + getTime() + ' Users';

const setGradient = () => {
  body.style.background = 'linear-gradient(to right, '+ color1.value+ ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', () => {
  setGradient();
});

color2.addEventListener('input', () => {
  setGradient();
});