const menuIcon = document.querySelector('.nav-icon');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})



var target = document.getElementById("manual");
var numerodeimagens = 101;

var counter = 0;
var img = new Array(numerodeimagens);
for (var i = 0; i < numerodeimagens; i++) {
    img[i] = new Image();
    img[i].src = 'images/Manual/M' + i + '.png';
}

function nextPic() {
    counter += 1;
    if (counter > img.length - 1) {
        counter = 0;
    }
    target.src = img[counter].src;
}

function prevPic() {
    counter += -1;
    if (counter == - 1) {
        counter = 100;
    }
    target.src = img[counter].src;
}
