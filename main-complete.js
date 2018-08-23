let input_fn = document.getElementById("firstName");
let input_ln = document.getElementById("lastName");
let input_email = document.getElementById("email");
let submit = document.getElementById("submit-button");

window.onload = function() {
    input_fn.placeholder = "Required";
    input_ln.placeholder = "Required";
    input_email.placeholder = "Required";
};

function getInputData(){
    if (input_fn.value !== "" && input_ln.value !== "" && input_email.value !== ""){
        let data = {};
        data.firstName = input_fn.value;
        data.lastName = input_ln.value;
        data.email = input_email.value;
        document.cookie = "firstName=" + data.firstName;
        document.cookie = "lastName=" + data.lastName;
        document.cookie = "email=" + data.email;
        window.location.href = "http://127.0.0.1:5500/forms-complete/loggedIn.html";
    }
    else{
        alert("All fields are required");
    }
}

function checkData(){
    console.log(this.value);
    if(this.value === ""){
        this.classList.add("alert");
        this.placeholder = "Required";
    }
    else{
        this.classList.remove("alert");
    }

}

input_fn.addEventListener("blur",checkData);
input_ln.addEventListener("blur",checkData);
input_email.addEventListener("blur",checkData);
submit.addEventListener("click",getInputData);


