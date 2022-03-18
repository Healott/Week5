const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middleinitial = document.getElementById('middleinitial');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    //get values
    const firstnameVal = firstname.value.trim();
    const middleinitialVal = middleinitial.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    let w, x, y ,z;

    if(firstnameVal === ''){
      setErrorFor(firstname, 'First name cannot be blank');
      w=0;
    }
    else {
      setSuccessFor(firstname);
      w=1;
    }

    if(middleinitialVal === ''){
      setErrorFor(middleinitial, 'Middle initial cannot be blank');
      x=0;
    }
    else {
      setSuccessFor(middleinitial);
      x=1;
    }

    if(lastnameVal === ''){
      setErrorFor(lastname, 'Last name cannot be blank');
      y=0;
    }
    else {
      setSuccessFor(lastname);
      y=1;
    }
    if(emailVal === ''){
      setErrorFor(email, 'Email cannot be blank');
      z=0;
    }else if (!isEmail(emailVal)) {
      setErrorFor(email, 'Email is not Valid')
      z=0;
    }
    else {
      setSuccessFor(email);
      z=1;
    }
    if(w==1&&x==1&&y==1&&z==1){
      let result = alert("Success! You are now signed up!")};



}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
