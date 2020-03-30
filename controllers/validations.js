// ToolTips. To activate tooltips in Bootstrap 4

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

//Validations when forms change his state. Each input.
document.getElementById("contactForm").addEventListener("change", function(){
    var regExpOnlyLetters = /^[A-Z]+$/i;
    var userName = document.getElementById("name").value;
    if(!regExpOnlyLetters.test(userName)){
        document.getElementById("nameValidate").innerHTML = "Name can't have numbers, dude.";
        document.getElementById("nameValidate").classList.add("noValid");
        document.getElementById("name").focus();
    }

    var regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var userMail = document.getElementById("email").value;
    if(userMail.length != 0){
        if(!regExpMail.test(userMail)){
            document.getElementById("emailValidate").innerHTML = "Mail must be in that format: xxxx@xxxx.com";
            document.getElementById("emailValidate").classList.add("noValid");
            document.getElementById("email").focus();
        }
    }
    /*
    Validations for a password and his match
    -- Password have to be 8 characters. No other limitations. If we want, we can use  a RegExp instead <8.
    var pass = document.getElementById("password").value;
    var passRepeat = document.getElementById("passwordTwo").value;
        if(pass.length < 8){
            document.getElementById("passValidate").innerHTML = "Password have to be at least 8 characters.";
            document.getElementById("passValidate").classList.add("noValid");
            document.getElementById("pass").focus();
        }
        if(passTwo == pass){
            document.getElementById("passTwoValidate").innerHTML = "Paswords doesn't match. Try again.";
            document.getElementById("passTwoValidate").classList.add("noValid");
            document.getElementById("passTwo").focus();
        }
    */

    
});

//validate when send info
function validate(){
    var userName = document.getElementById("name").value;
    var userMail = document.getElementById("email").value;
    if (userName == ""){
        document.getElementById("nameValidate").innerHTML = "Name can't have numbers, dude.";
        document.getElementById("nameValidate").classList.add("noValid");
        document.getElementById("name").focus();
    }
    if(userMail == ""){
        document.getElementById("emailValidate").innerHTML = "Mail must be in that format: xxxx@xxxx.com";
        document.getElementById("emailValidate").classList.add("noValid");
        document.getElementById("email").focus(); 
    }
   var userPhone = document.getElementById("telephone").value;
    if(userPhone.length != 0){
        var regExpPhone = 9 && /^[679]{1}[0-9]{8}$/;
        if(!regExpPhone.test(userPhone)){
            document.getElementById("phoneValidate").innerHTML = "Phone is not required, but if you want to give us it, it must begin with 9, 6 or 7.";
            document.getElementById("phoneValidate").classList.add("noValid");
        }
    }
    else{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("book").value = "";
    }
    
}

 