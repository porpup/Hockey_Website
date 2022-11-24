let userName = "admin";
let password = "123";

function SubmitLogin() {
    let v1, v2;
    
    v1 = document.getElementById("userName").value.toLowerCase();
    v2 = document.getElementById("password").value;
    if (v1 == userName && v2 == password) {
        window.location.href = "home.html";
    } else {
        alert("Enter:\nUser Name: admin\nPassword: 123");
    }
}


function backHome(){
    window.location.href = "home.html";
}


function page3(){
    window.location.href = "page3.html";
}


function page4(){
    window.location.href = "page4.html";
}


function page4_5(){
    window.location.href = "page4.5.html";
}


function contactUs(){
    window.location.href = "page5.html"
}


function lasalleLink(){
    window.open("https://www.lasallecollege.com/");
}


function references(){
    window.location.href = "page6.html";
}


function logOut() {
    window.location.href = "index.html";
}



class Form {
    constructor(fName, lName, email, phone, message) {
        this.FirstName = fName;
        this.LastName = lName;
        this.Email = email;
        this.Phone = phone;
        this.Message = message;
    }
}


function SendForm() {
    //First let's get the values from the input fields using Jquery
    let fName = $('#fName').val();
    let lName = $('#lName').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    
    let form = new Form(fName, lName, email, phone, message);    
    let cookieString = JSON.stringify(form);
    SetCookie("userInfo", cookieString, 5);
    $(location).attr('href','page5.5.html');
}


function GetCookieValues() {
    let cookieString = GetCookie("userInfo");
    let form = JSON.parse(cookieString)

    let fname = $('#fName').val(form.FirstName);
    let lname = $('#lName').val(form.LastName);
    let email = $('#email').val(form.Email);
    let phone = $('#phone').val(form.Phone);
    let message = $('#message').val(form.Message);
}


function loadServerPage() {
    GetCookieValues();
}


function SetCookie(cname, cvalue, exdays, path) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path;
}


function GetCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}