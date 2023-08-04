const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 5000],
    connect: true,
    range: {
        'min': [0],
        'max': [5000],
    }
});

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  })
}
