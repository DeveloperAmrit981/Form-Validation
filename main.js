const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitError = document.getElementById("submitError");
const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';

document.querySelectorAll(".input").forEach(function(inputElement) {
    inputElement.addEventListener("blur", function(e) {
        let value = e.target.value;
        // Trim leading and trailing spaces
        value = value.trim();
        // Replace multiple consecutive spaces with a single space
        value = value.replace(/\s+/g, ' ');
        e.target.value = value;
    });
});




function validateName() {
    let name = document.getElementById("contactName").value.trim();
    const errorDisplay = () => nameError.style.display = "block";
    const errorColor = () => nameError.style.color = "red";

    if (name.length === 0){
        nameError.innerHTML = `${errorIcon} <span >Name cannot be Empty</span>`;
        errorDisplay();
        errorColor();
        return false;
    } 
    if (!name.match(/^[A-Za-z]+ {1,3}[A-Za-z]+$/)){
        nameError.innerHTML = `${errorIcon} <span >Please Enter first and last Name</span>`;
        errorDisplay();
        errorColor();
        return false; 
    }
    
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        errorDisplay();
        nameError.style.color = "green";
        return true;
    
}

function validatePhone() {
    let phone = document.getElementById("contactPhone").value.replace(/\s+/g, '');
    const errorDisplay = () => phoneError.style.display = "block";
    const errorColor = () => phoneError.style.color = "red";

    if (phone.length === 0){
        phoneError.innerHTML = `${errorIcon} <span >Phone number cannot be empty</span>`;
        errorDisplay();
        errorColor();
        return false;
    } else if (phone.match(/[^0-9]/)){
        phoneError.innerHTML = `${errorIcon} <span >Please enter digits only</span>`;
        errorDisplay();
        errorColor();
        return false;
    } else if (phone.length !== 10){
        phoneError.innerHTML = `${errorIcon} <span >Phone number must be 10 characters</span>`;
        errorDisplay();
        errorColor();
        return false;
    }else {
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        errorDisplay();
        phoneError.style.color = "green";
        return true;
    }
}

document.getElementById("contactPhone").addEventListener("input", function (e) {
    let currentPhone = e.target.value.replace(/\s+/g, ''); // Remove existing spaces
    let formattedValue = '';
    for (let i = 0, j = 0; i < currentPhone.length && j < 12; i++, j++) {
        if ((i === 4 || i === 7) && j < 11) {
            formattedValue += ' '; // Add a space after the 3rd and 6th character
            j++; // Increment j to account for the added space
        }
        formattedValue += currentPhone[i];
    }

    e.target.value = formattedValue; // Set the formatted value
});

function validateEmail(){
    var email = document.getElementById("contactEmail").value;
    const errorDisplay = () => emailError.style.display = "block";
    const errorColor = () => emailError.style.color = "red";

    if (email.length === 0){
        emailError.innerHTML = `${errorIcon} <span >Email address cannot be empty</span>`;
        errorDisplay();
        errorColor();
        return false;
    } else if (!email.match(/^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = `${errorIcon} <span >requested format: example@gmail.com</span>`;
        errorDisplay();
        errorColor();
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        errorDisplay();
        emailError.style.color = "green";
        return true;
    }
}

function validateMessage(){
    var message = document.getElementById("Message").value;
    const errorDisplay = () => messageError.style.display = "block";
    const errorColor = () => messageError.style.color = "red";
    var required = 40;
    var maxAllowed = 300;
    var left = required - message.length;
    var maxLeft = maxAllowed - message.length;

    if (left >= 0){
        messageError.innerHTML = `${errorIcon} ${left} more characters required minimum`;
        errorDisplay();
        errorColor();
        return false;
    }else {
        messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${maxLeft} more characters left`;
        errorDisplay();
        messageError.style.color = "green";
        return true;
    }


}










