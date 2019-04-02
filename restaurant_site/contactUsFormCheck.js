function checkForm(){
  var name = document.forms["contactUsForm"]["fullName"].value;
  var email = document.forms["contactUsForm"]["email"].value;
  var phone = document.forms["contactUsForm"]["phone"].value;
  var reason = document.forms["contactUsForm"]["reasonMenu"].value;
  var addInfo = document.forms["contactUsForm"]["addInfo"].value;
  var yesC = document.forms["contactUsForm"]["yesChoice"].checked;
  var noC = document.forms["contactUsForm"]["noChoice"].checked;
  var monday = document.forms["contactUsForm"]["Monday"].checked;
  var tuesday = document.forms["contactUsForm"]["Tuesday"].checked;
  var wednesday = document.forms["contactUsForm"]["Wednesday"].checked;
  var thursday = document.forms["contactUsForm"]["Thursday"].checked;
  var friday = document.forms["contactUsForm"]["Friday"].checked;
  if(!name.includes(" ")){
    alert("enter your last name with space inbetween first and last!");
    document.forms["contactUsForm"]["fullName"].focus();
  }
  //else{
    //document.getElementById("fullNameValid").style.display = "block";
  //}
  if(!email.includes("@") && !email.includes(".")){
    alert("enter valid email address");
    document.forms["contactUsForm"]["email"].focus();
  }
if(!phone.includes("-")){
  alert("make sure to include two '-' characters!");
  document.forms["contactUsForm"]["phone"].focus();

}
else if(phone.toString().length!=12){
  alert("make sure the phone number is 12 total characters! (numbers and '-')")
  document.forms["contactUsForm"]["phone"].focus();
}

if(reason=="default"){
  alert("pick a reason for contacting us!");
  document.forms["contactUsForm"]["reasonMenu"].focus();
}

if(yesC == false && noC == false){
  alert("Have you been to our restaurant before or no?")
  document.forms["contactUsForm"]["yesChoice"].focus();
  document.forms["contactUsForm"]["noChoice"].focus();
}
if(monday == false && tuesday == false && wednesday == false && thursday == false && friday == false)
alert("pick what day is best for us to contact you!");
return false;
}

function checkForm2(){
  var name = document.forms["contactUsForm"]["fullName"].value;

  if(!name.includes(" ")){
    alert("enter your last name with space inbetween first and last!");
    document.forms["contactUsForm"]["fullName"].focus();
  }
return false;
}

function checkForm3(){
  var email = document.forms["contactUsForm"]["email"].value;
  if(!email.includes("@") || !email.includes(".")){
    alert("enter valid email address");
    document.forms["contactUsForm"]["email"].focus();
  }
  return false;
}

function checkForm4(){
  var phone = document.forms["contactUsForm"]["phone"].value;
  if(!phone.includes("-") || phone.toString().length!=12){
    alert("make sure to include two '-' characters! and enter 12 total characters!");
    document.forms["contactUsForm"]["phone"].focus();
  }
  return false;
  }

function checkForm5(){
  var reason = document.forms["contactUsForm"]["reasonMenu"].value;
  if(reason=="default"){
    alert("pick a reason for contacting us!")
    document.forms["contactUsForm"]["reasonMenu"].focus();
  }
  return false;
}

function checkForm6(){
  var yesC = document.forms["contactUsForm"]["yesChoice"].checked;
  var noC = document.forms["contactUsForm"]["noChoice"].checked;
  if(yesC == false && noC == false){
    alert("Have you been to our restaurant before or no?");
    document.forms["contactUsForm"]["yesChoice"].focus();
    document.forms["contactUsForm"]["noChoice"].focus();
  }
  return false;
}
