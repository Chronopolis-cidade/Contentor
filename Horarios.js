var horarios = ['horarios-01.svg','horarios-02.svg','horarios-03.svg','horarios-04.svg','horarios-05.svg','horarios-06.svg','horarios-07.svg','horarios-08.svg','horarios-09.svg'];

var randomshape = horarios[Math.floor(Math.random() * horarios.length)];


document.getElementById('horario').style.backgroundImage = "url(images/horarios/" + randomshape + ")";