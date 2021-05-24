const kengu = document.getElementById("kengu");
let count = 0;
let nnn = null;
window.onkeydown = function (e) {
  if (e.keyCode == 32) {
    count++
    console.log('кнопка нажата')
    kengu.classList.add('jump_up');
    nnn = window.getComputedStyle(kengu).getPropertyValue("top")
  }
}
window.onkeyup = function (e) {
  if (e.keyCode == 32) {
    console.log('кнопка jng')
    document.documentElement.style
      .setProperty('--kenguTopcss', nnn);
    kengu.classList.remove("jump_up")
    kengu.classList.add("jump_down")
    setTimeout(function jump_down() {
      kengu.classList.remove('jump_down')
      
    }, 500)
  }
}
let r = setInterval(function () {
  s++;
const kengu = document.getElementById("kengu");
const cactus1 = document.getElementById("cactus1");
const cactus2 = document.getElementById("cactus2");
const cactus3 = document.getElementById("cactus3");
const cactus4 = document.getElementById("cactus4");
let count = 0;
let nnn = null;
window.onkeydown = function (e) {
  if (e.keyCode == 32) {
    count++
    console.log('кнопка нажата')
    kengu.classList.add('jump_up');
    nnn = window.getComputedStyle(kengu).getPropertyValue("top")
    console.log(nnn);
  }
}
},1000)
window.onkeyup = function (e) {
  if ((e.keyCode == 32)||(nnn == 100)) {
    console.log('кнопка jng')
    document.documentElement.style
      .setProperty('--kenguTopcss', nnn);
    kengu.classList.remove("jump_up")
    kengu.classList.add("jump_down")
    setTimeout(function jump_down() {
      kengu.classList.remove('jump_down')
      
    }, 500)
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min)) + min;
}
let num = 0;
let cact = setInterval(function(){
if (cact >  3){
  cactus1.classList.remove('cactusMov1');
  cactus2.classList.remove('cactusMov2');
  cactus3.classList.remove('cactusMov3');
  cactus4.classList.remove('cactusMov4');  
}
num = getRandomInt();
if (num == 1){
  cactus1.classList.add('cactusMov1');
}
if (num == 2){
  cactus2.classList.add('cactusMov2');
}
if (num == 3){
  cactus3.classList.add('cactusMov3');
}
if (num == 4){
  cactus4.classList.add('cactusMov4');
}
},3000)

let g = 0;
let s = setInterval(function () {
  g++;
  document.getElementById("number").innerHTML = g;
},1000)

let die = setInterval(function() {
  let kenguTop = parseInt(window.getComputedStyle(kengu).getPropertyValue("top"))
  let cactusLeft1 = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"));
  let cactusLeft2 = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
  let cactusLeft3 = parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));
  let cactusLeft4 = parseInt(window.getComputedStyle(cactus4).getPropertyValue("left"));
  if ((cactusLeft1 < -70) && (cactusLeft1 > -320) && (kenguTop >= 280)) {
    alert("GAME OVER!")
    nnn = null;
    g = 0;
  }
  if ((cactusLeft2 < -170) && (cactusLeft1 > -420) && (kenguTop >= 240)) {
    alert("GAME OVER!")
    nnn = null;
    g = 0;
  }
  if ((cactusLeft3 < -240) && (cactusLeft1 > -490) && (kenguTop >= 230)) {
    alert("GAME OVER!")
    nnn = null;
    g = 0;
  }
  if ((cactusLeft4 < -360) && (cactusLeft1 > -540) && (kenguTop >= 290)) {
    alert("GAME OVER!")
    nnn = null;
    g = 0;
  }
}, 10)
