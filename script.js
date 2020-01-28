function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let tabColor = ['red', 'yellow', 'green', 'purple', 'black', 'blue', 'pink'];

let change = function(val){
    document.getElementsByTagName('body')[0].style.backgroundColor= tabColor[getRandomInt(7)];
}
let timer = null;


function stop() {
   clearInterval(timer);
   timer = null;

};
function start() {
  if (timer !=null) {return};
  timer =setInterval(() => {change(true);}, 300);
};
