let faq = document.querySelectorAll('.l-sec__block');
// let answer = document.querySelectorAll('.l-sec__answer');
  for(let i = 0; i < faq.length; i++ ) {
    faq[i].addEventListener('click', function(e) {
      e.preventDefault();
      faq[i].querySelector('.l-sec__answer').classList.toggle('show');
    });
  }
