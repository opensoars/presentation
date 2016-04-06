var press = {};

press.navigateLeft = function () {
  console.log('left');
};

press.navigateRight = function () {
  console.log('right');
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
  var left_arrow = document.createElement('button'),
      right_arrow = document.createElement('button');

  left_arrow.textContent = '<';
  right_arrow.textContent = '>';

  left_arrow.addEventListener('click', this.navigateLeft);
  right_arrow.addEventListener('click', this.navigateRight);

  var arrow_container = document.createElement('div');
  arrow_container.style.position = 'absolute';
  arrow_container.style.bottom = '0px';
  arrow_container.style.right = '0px';
  arrow_container.style.fontSize = '200%';
  arrow_container.appendChild(left_arrow);
  arrow_container.appendChild(right_arrow);
  document.body.appendChild(arrow_container);
};

press.init = function (options) {
  options = options || {};

  if (options.keyboard)
    this.initKeyboard();
  if (options.arrows)
    this.initArrows();
};