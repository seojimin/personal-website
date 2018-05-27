// Jimin Seo 145803169 jseo22@myseneca.ca

// user name validation at least 6 and start with a letter
function username() {
    var name = document.getElementById('userName').value.trim();
    var ErrMessage = document.getElementById('ErrorMessage');
    ErrMessage.innerHTML = "";

    if (/^[A-Za-z]+$/.test(name) && name.length >= 6) {
        return true;
    }
    else{
        ErrMessage.innerHTML = "User name must start with a letter and have at least 6 characters.";
        return false;
    }
};

// zip code validation
function zip_code() {
var zipCode = document.getElementById('zipCode').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
ErrMessage.innerHTML = "";

if (/^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/.test(zipCode)) {
        return true;
    }
    else{
        ErrMessage.innerHTML = "Zip Code only Canadian format allowed (Letter Digit Letter Digit Letter Digit), for example M2N2N7";
        return false;
    }
};

// city name validation
function city_Name() {
var cityName = document.getElementById('city').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
    ErrMessage.innerHTML = "";

    if ((/^[A-Za-z]+$/.test(cityName)) == true) {
        return true;
    }
    else{
        ErrMessage.innerHTML = "City Name must contain letters only.";
        return false;
    }
};

// phone number validation
function phone_Number() {
var phoneNumber = document.getElementById('pNumber').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
    ErrMessage.innerHTML = "";

    if ((/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) == true) {
        return true;
    }

    else{
        ErrMessage.innerHTML = "Phone number must be 10 digits, hyphen in the 4th and 8th position, format allowed xxx-xxx-xxxx, for example 647-832-0098.";
        return false;
    }
};

// Street name validation 
function street() {
var streetName = document.getElementById('stName').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
    ErrMessage.innerHTML = "";
    if (/^([^0-9]*)$/.test(streetName)) {
        return true;
    }
    else{    
        ErrMessage.innerHTML = "Street name cannot contain digits.";
        return false;
    }
};

// password validation
function password() {
var passwordCheck = document.getElementById('pword').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
ErrMessage.innerHTML = "";

    if(passwordCheck.length >= 8 ){
        if(/[A-Za-z]/.test(passwordCheck[0])){
            if(passwordCheck.search(/[0-9]/) >=0){
                if(passwordCheck.search(/[A-Z]/) >=0){
                    return true;
                }
                else{
                    ErrMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
                        return false;
                }
            }
            else{
                ErrMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
                    return false;
            }
        }
        else{
            ErrMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
                return false;
    }
    }
    else{
        ErrMessage.innerHTML = "Password must be 8 characters long, must start with a character, must have at least 1 digit and 1 uppercase.";
            return false;
    }

};

// confirmed password validation 
function confirmed_Password() {
var confirmedPassword = document.getElementById('cfpword').value.trim();
var password= document.getElementById('password_').value.trim();
var ErrMessage = document.getElementById('ErrorMessage');
    ErrMessage.innerHTML = "";

    if (confirmedPassword == password) {
        return true;
    }
    else{
        ErrMessage.innerHTML = "Provided password and confirmed do not match. Please check it!";
        return false;
    }
};

function Validation(){
    if (username() == true && street() == true && zip_code() == true && city_Name() == true && phone_Number() == true && password() == true && confirmed_Password()) {
        return true;
    }
    else{
    return false;
    }
};