  // Scroll horizontally on vertical wheel
  document.querySelector('.scroll-wrapper').addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      this.scrollLeft += e.deltaY;
    }
  });
