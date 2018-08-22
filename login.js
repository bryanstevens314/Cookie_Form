let congrats = document.getElementById("congrats");

window.onload = function() {
    var firstName = readCookie('firstName');
    var lastName = readCookie('lastName');
    var email = readCookie('email');
    congrats.innerHTML = "Congrats! You just stored your first cookie " + firstName + " " + lastName + ". Your email is " + email;
  };

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}