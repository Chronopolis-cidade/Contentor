const menuIcon = document.querySelector('.nav-icon');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

var slider_content = document.getElementById('manual-book');

// contain images in an array
var image = ['M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12','M13','M14','M15','M16','M17','M18','M19','M20','M21','M22','M23','M24','M25','M26','M27','M28','M29','M30','M31','M32','M33','M34','M35','M36','M37','M38','M39','M40','M41','M42','M43','M44','M45','M46','M47','M48','M49','M50','M51','M52','M53','M54','M55','M56','M57','M58','M59','M60','M61','M62','M63','M64','M65','M66','M67','M68','M69','M70','M71','M72','M73','M75','M76'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src=images/Manual/"+image[i-1]+".png>";
}


// function for prew slide

function prewImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src=images/Manual/"+image[i-1]+".png>";

}