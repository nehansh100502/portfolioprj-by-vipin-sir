
function updateProgressBar(progress, progressBarId, progressTextId) {
    var progressBar = document.getElementById(progressBarId);
    var progressText = document.getElementById(progressTextId);

    progressBar.style.width = progress + '%';
    progressText.innerText = progress + '%';
}

// Example: Update the progress bars sequentially
setTimeout(function() {
    updateProgressBar( 100,'myProgressBar1', 'progressText1');
},4000);

setTimeout(function() {
    updateProgressBar( 100,'myProgressBar2', 'progressText2');
}, 4000);

setTimeout(function() {
    updateProgressBar(100, 'myProgressBar3', 'progressText3');
}, 4000);

setTimeout(function() {
    updateProgressBar( 100,'myProgressBar4', 'progressText4');
}, 4000);

// faq js code
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("faq-show") == -1) {
      x.className += " faq-show";
    } else {
      x.className = x.className.replace("faq-show", "");
    }
  }

 
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}