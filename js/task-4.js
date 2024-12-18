const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', event =>{
    event.preventDefault();
    const emailValue = formEl.elements.email.value;
    const passwordValue = formEl.elements.password.value;
    if (emailValue.length>0 & passwordValue.length>0) {
        const formData={
            [formEl.elements.email.name] : formEl.elements.email.value,
            [formEl.elements.password.name] : formEl.elements.password.value
             };
        formEl.reset();
        console.log(formData);    }
    else {
        alert('All form fields must be filled in maket');
        };
  
})
