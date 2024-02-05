const svgs = document.querySelectorAll('.container svg');
const sound1 = document.getElementById('repetitive-sound1');
const sound2 = document.getElementById('repetitive-sound2');
const sound3 = document.getElementById('repetitive-sound3');
let contador = 0;

svgs[contador].classList.add('active');

document.addEventListener('click', function(){
    svgs[contador].classList.remove('active');
    if (contador === 2) {
        sound1.play();
    } else {
        sound1.pause();
        sound1.currentTime = 0;
    }
    
     if (contador === 5) {
        sound2.play();
    } else {
        sound2.pause();
        sound2.currentTime = 0;
    }
    
      if (contador === 7) {
        sound3.play();
    } else {
        sound3.pause();
        sound3.currentTime = 0;
    }
    contador = (contador + 1) % svgs.length;
    svgs[contador].classList.add('active');
});

