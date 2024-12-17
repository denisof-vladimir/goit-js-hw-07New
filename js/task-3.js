const fieldInput = document.querySelector('#name-input');
const nameOutput = document.querySelector(`#name-output`);

fieldInput.addEventListener('input', () =>{
     const inputValue = fieldInput.value.trim();
    nameOutput.textContent = inputValue || `Anonymous!!!`;
   
})