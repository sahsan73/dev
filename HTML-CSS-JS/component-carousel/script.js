'use strict'

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const leftButton = document.querySelector('.btn--left');
const rightButton = document.querySelector('.btn--right');
let visibleItem = items[0], idx = 0;

leftButton.addEventListener('click', function(){
  visibleItem.classList.add('hidden');
  dots[idx].classList.remove('dot--fill');
  idx = (idx - 1 + items.length) % items.length;
  visibleItem = items[idx];
  visibleItem.classList.remove('hidden');
  dots[idx].classList.add('dot--fill');
});

rightButton.addEventListener('click', function(){
  visibleItem.classList.add('hidden');
  dots[idx].classList.remove('dot--fill');
  idx = (idx + 1) % items.length;
  visibleItem = items[idx];
  visibleItem.classList.remove('hidden');
  dots[idx].classList.add('dot--fill');
});

for(let i=0; i<dots.length; ++i) {
  dots[i].addEventListener('click', function(){
    visibleItem.classList.add('hidden');
    dots[idx].classList.remove('dot--fill');
    visibleItem = items[i];
    visibleItem.classList.remove('hidden');
    dots[i].classList.add('dot--fill');
    idx = i;
  });
}

/*
P.S.: lots of duplicate code, will refactor it later!
*/