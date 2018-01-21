// Display menu

const logoElem = document.getElementsByClassName('nav__logo');
const menuElem = document.getElementsByClassName('nav__menu');
const iconElem = document.getElementsByClassName('nav__icons');

logoElem[0].addEventListener('click', function () {
    if (menuElem[0].classList.contains('slideInDown')) {

        menuElem[0].style.display = 'none';
        iconElem[0].style.display = 'none';

        menuElem[0].classList.toggle('slideInDown');
        iconElem[0].classList.toggle('slideInDown');

    } else {
        menuElem[0].style.display = 'flex';
        iconElem[0].style.display = 'flex';

        menuElem[0].classList.toggle('slideInDown');
        iconElem[0].classList.toggle('slideInDown');
    }
});

// Scroll

let linksElements = document.getElementsByTagName('a');
let RegExpression = /#$/;

let linksArray = Array.from(linksElements).filter(function(a) {
  return !RegExpression.test(a.href);
});

let linksHref = linksArray.map(function(a) {
  return a.href;
});

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    let scrollTo = e.target.href;
    let index = scrollTo.search(/#/);
    let id = scrollTo.slice(index + 1);
    let targetElem = document.getElementById(id);

    if (linksHref.includes(scrollTo)) {
      e.preventDefault();
      let targetPosition = targetElem.offsetTop;
      let timer = setInterval(frame, 20);
      let currentPosition = window.pageYOffset;
      let timeForScrolling = Math.abs(targetPosition - currentPosition);

      setTimeout(function () {
        clearInterval(timer);
      }, timeForScrolling);

      function frame() {
        if (window.pageYOffset >= targetPosition) {
          currentPosition -= 20;
          window.scroll(0, currentPosition);
        }

        if (window.pageYOffset < targetPosition) {
          currentPosition += 20;
          window.scroll(0, currentPosition);
        }
      }
    }
  }
});
