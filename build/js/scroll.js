const navbarList = document.querySelector('.navbar ul');
const anchors = navbarList.querySelectorAll('a');

for (let anchor of anchors) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    var blockId = anchor.getAttribute('href');

    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
