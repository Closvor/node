function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let tabCouleur = ['red', 'yellow', 'green', 'purple', 'black', 'blue', 'pink'];

let changer = function(val){
    document.getElementsByTagName('body')[0].style.backgroundColor= tabCouleur[getRandomInt(7)];
}
let timer = null;


function stop() {
   clearInterval(timer);
   timer = null;

};
function lancer() {
  if (timer !=null) {return};
  timer =setInterval(() => {changer(true);}, 300);
};
