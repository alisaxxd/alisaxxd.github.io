const button = document.querySelector('button');
const progress = document.querySelector('.progress');
const h2 = document.querySelector('h2');
var i = 0;
var x = 100;

progress.style.width = '0%';


let timeout;

function myFunction() {
    $('.record').css('opacity', '0')
    timeout = setTimeout(goHome, 4000);
}

function goHome() {

    location.href = 'homepage.html';
}

myFunction()


if (progress.style.width === '0%') {
    setInterval(speed, 20);
    
    function speed(){

    if (i < 100) {
        i++;
        h2.innerHTML = i + '%';
        progress.style.width = i + '%';
      }

    }
  }

  else{
    setInterval(sss, 20);

    function sss(){

    if (x > 0) {
      x--;
      h2.innerHTML = x + '%';
      progress.style.width = x + '%';
    }

    }

    
  }



