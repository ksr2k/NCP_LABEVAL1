function formValidation() {
    var onlyNum = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;  
    var emailp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var dayp=/^0[1-9]|[12]\d|3[01]$/;
    var yearp=/^\d{4}$/;


    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email_name').value
    var password=document.getElementById('pwd').value
    var day=document.getElementById('day').value
    var year=document.getElementById('year').value
    var number=document.getElementById('number').value
    var c_email=document.getElementById('email_current').value
   
    var isValid = true

    if (!fname.match(letters)) {
        isValid = false
        alert('Enter only characters for name')
        document.getElementById('fname').focus()
        return isValid
    }
    if (!lname.match(letters)) {
        isValid = false
        alert('Enter only characters for name')
        document.getElementById('lname').focus()
        return isValid
    }

    if (!email.match(emailp)) {
        isValid = false
        alert('@gmail.com')
        document.getElementById('email_name').focus()
        return isValid
    }

    if (!password.match(paswd)) {
        isValid = false
        alert('password between 7 to 15 characters which contain at least one numeric digit and a special character')
        document.getElementById('pwd').focus()
        return isValid
    }
  

    if (!day.match(dayp)) {
        isValid = false
        alert('enter a day')
        document.getElementById('day').focus()
        return isValid
    } 
    
  
   
    if (!year.match(yearp)) {
        isValid = false
        alert('Enter only 4 digits for year')
        document.getElementById('year').focus()
        return isValid
    }

    if (!number.match(onlyNum)) {
        isValid = false
        alert('Enter 10 digits for number')
        document.getElementById('number').focus()
        return isValid
    }
    if (!c_email.match(emailp)) {
        isValid = false
        alert('enter a proper email')
        document.getElementById('email_current').focus()
        return isValid
    } 
   
   
    return isValid
}