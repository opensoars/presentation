var press = {
  d: {
    active_slide: 0
  }
};

press.navigateLeft = function () {
  this.activateSlide(this.d.active_slide - 1);
};

press.navigateRight = function () {
  this.activateSlide(this.d.active_slide + 1);
};

press.activateSlide = function (n) {
  if (this.d.slides[n]) {
    this.deactivateSlide(this.d.active_slide);
    this.d.slides[n].style.display = 'block';
    this.d.active_slide = n;

    if (this.d.current_slide_el)
      this.d.current_slide_el.textContent = (n + 1);
  }
};

press.deactivateSlide = function (n) {
  if (this.d.slides[n])
    this.d.slides[n].style.display = 'none';
};

press.initKeyboard = function () {
  var _this = this;
  document.body.addEventListener('keydown', function (evt) {
    if (evt.which === 37)
      _this.navigateLeft();
    else if (evt.which === 39)
      _this.navigateRight();
  });
};

press.initArrows = function () {
  var _this = this;
  var left_arrow = document.createElement('button'),
      right_arrow = document.createElement('button');

  left_arrow.textContent = '<';
  right_arrow.textContent = '>';

  left_arrow.addEventListener('click', function () {
    _this.navigateLeft();
  });
  right_arrow.addEventListener('click', function () {
    _this.navigateRight();
  });

  var arrow_container = document.createElement('div');
  arrow_container.style.position = 'absolute';
  arrow_container.style.top = '0px';
  arrow_container.style.right = '0px';
  arrow_container.style.fontSize = '200%';
  arrow_container.appendChild(left_arrow);
  arrow_container.appendChild(right_arrow);
  document.body.appendChild(arrow_container);
};

press.initSlideNumbers = function () {
  var _this = this;

  var current_slide = document.createElement('span'),
      slash = document.createElement('span'),
      total_slides = document.createElement('span');

  current_slide.textContent = this.d.active_slide + 1;
  slash.textContent = ' / ';
  total_slides.textContent = this.d.slides.length;

  var container = document.createElement('div');
  container.appendChild(current_slide);
  container.appendChild(slash);
  container.appendChild(total_slides);
  container.style.position = 'absolute';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.padding = '10px';

  document.body.appendChild(container);

  this.d.current_slide_el = current_slide;
};

press.init = function (options) {
  options = options || {};

  this.options = options;

  this.d.slides = options.slides;
  this.activateSlide(0);

  if (options.keyboard)
    this.initKeyboard();
  if (options.arrows)
    this.initArrows();
  if (options.slide_numbers)
    this.initSlideNumbers();
};