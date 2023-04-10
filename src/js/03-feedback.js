import throttle from 'lodash.throttle';

const FORM_DATA = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
let userData = {};

fillData();

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', submitData);

function saveData(event){
    userData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_DATA, JSON.stringify(userData));
}

function fillData(){
    const data = localStorage.getItem(FORM_DATA);
    if (data) {
        userData = JSON.parse(localStorage.getItem(FORM_DATA));
        if(userData.email) {
            email.value = userData.email;
        }
        if(userData.message) {
            message.value = userData.message;
        }
    }
}
function submitData(event){
  event.preventDefault();

  if (email.value === '' || message.value === '')  {
        alert('Please fill in all the fields!');
        return;
      }
    console.log(userData);
    userData = {};
    form.reset();
    localStorage.removeItem(FORM_DATA);
}
