window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("formjs");
	contactForm.onsubmit= validate;
}
function validate(){
	var check = true;
	var name = document.getElementById("custname").value;
	var mail = document.getElementById("email").value;
	var phone = document.getElementById("telephone").value;
	var password = document.getElementById("password").value;

	
	if(name == ""){
		alert('Name is Required !');
		check= false;
	}
	
	if(mail == ""){
		alert('E-mail is Required !');
		check= false;
	}

	if(password == ""){
		alert('Password is Required !');
		check= false;
	}
	if (phone == "") {
		alert('Phone is Required !');
		check= false;
	}
	

	if (!name.match(/^[A-Za-z ]+$/)){ //space------------------------------
		alert("Only Letters or Spaces  are Allowed in Name Field");
		check= false;
	}
	
	if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}

	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		alert("Password is Not Valid, It must contain (8) Characters: (1) Uppercase: (1) Lowercase, (1) Number and (1) and (1) Special Character at least");
		check=false;
	}
	
	if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not Valid: It must be (11) Number and Contains only Digits");
		check=false;
	}

    if (check == true)
    {
        alert("Thanks You For Registeration");
        window.location.href = './index1.html';
        check = true;
    }
	return check;
	
}



