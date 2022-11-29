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


function stadiumMap(){
    window.location.href = "page7.html";
}


function references(){
    window.location.href = "page6.html";
}


function logOut() {
    window.location.href = "index.html";
}


function searchContent() {
    window.location.href = "page8.html";
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
    let fName = $('#fName').val();
    let lName = $('#lName').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    
    let form = new Form(fName, lName, email, phone, message);    
    let cookieString = JSON.stringify(form);
    SetCookie("userInfo", cookieString, 5);
    window.open("page5.5.html");
}


function GetCookieValues() {
    let cookieString = GetCookie("userInfo");
    let form = JSON.parse(cookieString)

    $('#fName').text(form.FirstName);
    $('#lName').text(form.LastName);
    $('#email').text(form.Email);
    $('#phone').text(form.Phone);
    $('#message').text(form.Message);
}


function loadServerPage() {
    GetCookieValues();
    var varTime = new Date(GetCookie("cookieTime"));
    var currentDate = Date.now();
    var datediff = new Date(currentDate - varTime);
    $('#time').text(datediff.getSeconds());
}


function SetCookie(cname, cvalue, exdays, path) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + path;
}


function storeTime() {
    const d = new Date();
    SetCookie("cookieTime", d, 5);
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









// function checkPlanet() {
//     //arrays containing data for 3 planets
//     var arrNames = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
//     var arrDias = ["1,390,000 km", "4,880 km", "12,103.6 km", "12,756.3 km", "6,794 km", "142,984 km",
//         "120,536 km", "51,118 km", "49,532 km"];
//     var arrDistances = ["Temperature: 5800 K (surface) 15,600,000 K (core)", "Orbit: 57,910,000 km (0.38 AU) from Sun",
//         "Orbit: 108,200,000 km (0.72 AU) from Sun", "Orbit: 149,600,000 km (1.00 AU) from Sun",
//         "Orbit: 227,940,000 km (1.52 AU) from Sun", "Orbit: 778,330,000 km (5.20 AU) from Sun",
//         "Orbit: 1,429,400,000 km (9.54 AU) from Sun", "Orbit: 2,870,990,000 km (19.218 AU) from Sun",
//         "Orbit: 4,504,000,000 km (30.06 AU) from Sun"];
//     var arrImgs = ["./Img/Sun.jpg", "./Img/Mercury.jpg", "./Img/Venus.jpg", "./Img/Earth.jpg", "./Img/Mars.jpg",
//         "./Img/Jupiter.jpg", "./Img/Saturn.jpg", "./Img/Uranus.jpg", "./Img/Neptune.jpg"];

//     var result, nPlanet, imgPlanet;
//     nPlanet = document.getElementById("PName").value.toLowerCase();

//     var index = -1;
//     var planetName;

//     for (var i = 0; i < arrNames.length; i++) {  //using loop for the search
//         if (arrNames[i] == nPlanet) {
//             index = i;
//             result = "Planet: " + arrNames[index].toUpperCase() +
//                 ", having Diameter of: " + arrDias[index] +
//                 " and " + arrDistances[index];
//             imgPlanet = arrImgs[index];
//             planetName = arrNames[index].toUpperCase();
//         }
//     }

//     if (index == -1) {  //no planet name was found
//         result = "Found no planet with this name!";
//         imgPlanet = "./Img/none.jpg";
//     }

//     document.getElementById("Res").innerHTML = result;
//     document.getElementById("Rimg").src = imgPlanet;
//     var cookiePlanetContent = planetName + "|" + Date.now();
//     SetCookie("cookiePlanet", cookiePlanetContent, 10, "/");
// }