// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// shows the current value

// const slider = document.getElementById('range-input');
// const numberInput = document.getElementById('number-input')

// slider.addEventListener('input', () => {
//     numberInput.value = slider.value;
// });

// numberInput.addEventListener('input', () => {
//     slider.value = numberInput.value;
// });


const slider = document.getElementById('range-input');
const numberInput = document.getElementById('number-input');

slider.addEventListener('input', () => {
    numberInput.value = slider.value;
});

numberInput.addEventListener('input', () => {
    let val = parseInt(numberInput.value, 10);

    if (val > 200) {
        val = 200;
        numberInput.value = val;
    }

    // Update slider if valid
    if (!isNaN(val) && val >= 20) {
        slider.value = val;
    }
});

numberInput.addEventListener('change', () => {
    let val = parseInt(numberInput.value, 10);

    if (isNaN(val) || val < 20) {
        val = 20;
    } else if (val > 200) {
        val = 200;
    }

    numberInput.value = val;
    slider.value = val;
});