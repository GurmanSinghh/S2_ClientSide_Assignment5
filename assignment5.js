var username = document.getElementById("username");
var email = document.getElementById("email");
var today = new Date();
var expiry = new Date(today.getTime() + 7 * 24 * 3600 * 1000);
var expired = new Date(today.getTime() - 24 * 3600 * 1000);

function setCookie(username, value) {
    document.cookie = username + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function storeValues(form) {
    setCookie("username", form.username.value);
    setCookie("email", form.email.value);
    
    return true;
}

function cookieLoading() {
    if (field1 = getCookie("username")) document.login.username.value = username;
    if (field2 = getCookie("email")) document.login.email.value = email;
}

    var expired = new Date(today.getTime() - 24 * 3600 * 1000); 

 function deleteCookie(name) {
        document.cookie = name + "=null; path=/; expires=" + expired.toGMTString();
    }

 function clearCookies() {
        deleteCookie("username");
        deleteCookie("email");
        alert('We have deleted your cookies.');
 }
