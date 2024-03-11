const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {email, password} = event.target.elements;

    const info = {
        email: email.value.trim(),
        password: password.value.trim()
    }
    if (info.password === '' || info.email === '' ){alert('All form fields must be filled in')}
     console.log(info);
    
   event.target.reset(); 
}
