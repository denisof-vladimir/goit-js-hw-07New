function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const linkBox=document.querySelector('#boxes');
const linkInput=document.querySelector('#name-input');
const linkCreate=document.querySelector('button[data-create]');
const linkDestroy=document.querySelector('button[data-destroy]');
 
linkInput.addEventListener('input', () =>{
 
})

linkCreate.addEventListener('click', () =>{
    const quantityBox = linkInput.valueAsNumber;
    if (quantityBox>100) {
      alert("Нууу, це дуже багато. Не більшє 100 !!");
      }
      else {  
        let newInner = "";
        for (let index = 1; index <= quantityBox; index++) {
          const nn = createBoxes(index);
          newInner += nn;
          };
        if (newInner.length > 0) {
            linkBox.innerHTML=newInner;
        }
      }
    linkInput.value="";
})


linkDestroy.addEventListener('click', () =>{
  linkBox.innerHTML="";
})



function  createBoxes(amount) {
  const sizeBox=20 +amount*10;
  return `
   <div  style="width:${sizeBox}px; height:${sizeBox}px; background-color: ${getRandomHexColor()};"></div>
  `;
  }

