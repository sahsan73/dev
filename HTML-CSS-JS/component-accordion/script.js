"use strict"

const accordionItems = document.querySelectorAll('.item');

for(let i=0; i<accordionItems.length; ++i) {
  const icon = accordionItems[i].querySelector(".icon");
  const hiddenBox = accordionItems[i].querySelector(".hidden-box");
  icon.addEventListener('click', function(){
    if(hiddenBox.classList.contains('hidden')) {
      hiddenBox.classList.remove('hidden');
      accordionItems[i].classList.add('open');
    } else {
      hiddenBox.classList.add('hidden');
      accordionItems[i].classList.remove('open');
    }
  });
}
