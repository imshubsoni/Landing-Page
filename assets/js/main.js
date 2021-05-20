var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    let validityScore = 4;
    let nameInput = document.getElementById("fullname");
    let mobileInput = document.getElementById("mobile");
    let emailInput = document.getElementById("email");
    let dateInput = document.getElementById("startingdate");

    if(!nameInput.checkValidity()) {
        alert("Name should contain atleast 3 characters\nPlease enter correct name.");
        validityScore--;
    } else if(!mobileInput.checkValidity()) {
        alert("Mobile number should consist of only 10 digits and should start with 6\\7\\8\\9.\nPlease enter correct mobile number");
        validityScore--;
    } else if(!emailInput.checkValidity()) {
        alert("Please enter correct Email address.");
        validityScore--;
    } else if(!dateInput.checkValidity()) {
        alert("Date is not in correct format.\nPlease enter correct date.");
        validityScore--;
    }

    if(validityScore == 4) {
        alert("YOUR REQUEST SUBMITTED SUCCESSFULLY\nOur Executive will contact you within 24hours.\n\nTHANK YOU for chosing TRAVEL AGENT.");
        nameInput.value = "";
        mobileInput.value = "";
        emailInput.value = "";
        dateInput.value = "";
    }
});