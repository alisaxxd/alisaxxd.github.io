let timeout;

function myFunction() {
    $('.record').css('opacity', '0')
    timeout = setTimeout(goHome, 6000);
}

function goHome() {

    location.href = 'homepage.html';
}

myFunction()