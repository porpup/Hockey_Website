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


function backHome() {
    window.location.href = "home.html";
}


function page3() {
    window.location.href = "page3.html";
}


function page4() {
    window.location.href = "page4.html";
}


function page4_5() {
    window.location.href = "page4.5.html";
}


function contactUs() {
    window.location.href = "page5.html"
}


function stadiumMap() {
    window.location.href = "page7.html";
}


function references() {
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


class SearchLink {
    constructor(key, internalLink, description) {
        this.key = key;
        this.internalLink = internalLink;
        this.description = description;
    }
}


var arrLinks = [
    new SearchLink("League rivalries", "page4.html#box1", "The National Hockey Association (NHA), the forerunner of the National Hockey League (NHL)..."),
    new SearchLink("NHL", "page4.html#box4", "Like some of its predecessors, the NHA had its dissenters..."),
    new SearchLink("International ice hockey", "page4.html#box8", "For much of the 20th century, amateur athletes dominated international competition..."),
    new SearchLink("Women’s hockey", "page4.html#box11", "Though considered a male sport, hockey has been played by women..."),
    new SearchLink("Rink and equipment", "page4.5.html#box1", "NHL hockey is typically played on a standard-size rink shaped like a round-cornered..."),
    new SearchLink("Rules and principles of play", "page4.5.html#box5", "The modern game on every level—amateur, collegiate, international..."),
    new SearchLink("Birth of hockey", "page3.html#box2", "It is impossible to claim the exact time of the birth of hockey..."),
    new SearchLink("Name hockey", "page3.html#box3", "The name “hockey” is thought to be derived from the French..."),
    new SearchLink("The first set of rules of ice hockey", "page3.html#box4", "J. G. Creighton was the Canadian from Halifax, Nova Scotia..."),
    new SearchLink("Soft hockey", "page3.html#box7", "Soft hockey has been played in the ancient period by different..."),
    new SearchLink("The first Olympic Hockey Competition", "page3.html#box8", "The first Olympic Hockey Competition for men took place in London in..."),
    new SearchLink("Roller Skate Hockey", "page3.html#box10", "Another hockey sport, which was played for the first time in the city of..."),
    new SearchLink("Indoor Hockey", "page3.html#box11", "Indoor hockey is very similar to field hockey but only adapted for...")
];


function searchResult() {
    document.getElementById('results').innerHTML = '';
    document.getElementById('boxSearch').innerHTML = '';
    var searchResult = "<a href='page3.html' title='@box2'>";

    var str = $("#txt_term").val();
    const html = "<a href='@link' title='@title'>" +
        "<b>@title</b>" +
        "</a><br>" +
        "<cite>@link</cite><br>" +
        "<p>@description</p><br>";

    var quantityFound = 0;

    if (str.length > 2) {
        arrLinks.forEach(el => {
            if (new RegExp(str, 'i').test(el.key)) {
                quantityFound++;
                var li = html.replace(/@title/g, el.key);
                li = li.replace(/@link/g, el.internalLink);
                li = li.replace(/@description/g, el.description);
                $("#results").append(li);
            }
        });
    }

    if (quantityFound == 0) {
        $("#boxSearch").append("<h4>not found...</h4>");
        $("#boxSearch").append("<h5>You could be interested in:</h5>" + "<br>");

        for (var i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * (arrLinks.length - 5));
            var li = html.replace(/@title/g, arrLinks[index].key);
            li = li.replace(/@link/g, arrLinks[index].internalLink);
            li = li.replace(/@description/g, arrLinks[index].description);
            $("#results").append(li);
        }
    }
}