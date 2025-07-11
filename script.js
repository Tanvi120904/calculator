const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

let currentInput = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;

    if (value === 'C') {
      currentInput = '';
    } else if (value === 'Del') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
