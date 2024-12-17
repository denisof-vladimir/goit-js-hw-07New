const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', event =>{
    event.preventDefault();
    const formData={
        [formEl.elements.email.name] : formEl.elements.email.value,
        [formEl.elements.password.name] : formEl.elements.password.value
   };
   formEl.reset();
  
})
