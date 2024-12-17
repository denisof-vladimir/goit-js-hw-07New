function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const linkBody=document.querySelector('body');

const linkButton = document.querySelector('.change-color');

const linkSpan = document.querySelector('.color');

linkButton.addEventListener('click', event =>{
   const newColor=getRandomHexColor();
 
   linkSpan.textContent=newColor;
   linkBody.style.background   =newColor;  
})
