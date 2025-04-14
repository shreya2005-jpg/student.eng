document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let fullName = document.getElementById("fullName").value.trim();
    let aadharNumber = document.getElementById("aadharNumber").value.trim();
    let panCard = document.getElementById("panCard").value.trim();
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let dob = document.getElementById("dob").value;

    // Splitting Full Name
    let nameParts = fullName.split(" ");
    let firstName = nameParts[0] || "";
    let middleName = nameParts.length > 2 ? nameParts[1] : "";
    let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
    
    console.log("First Name:", firstName);
    console.log("Middle Name:", middleName);
    console.log("Last Name:", lastName);

    // Aadhar Number Validation (12-digit numeric)
    let aadharRegex = /^\d{12}$/;
    if (!aadharRegex.test(aadharNumber)) {
        alert("Invalid Aadhar Number! It must be a 12-digit numeric value.");
        return;
    }

    // PAN Card Validation (Format: 5 letters, 4 digits, 1 letter)
    let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(panCard)) {
        alert("Invalid PAN Card Number! Format: ABCDE1234F.");
        return;
    }

    // Mobile Number Validation (10-digit numeric)
    let mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
        alert("Invalid Mobile Number! It must be a valid 10-digit number starting with 6-9.");
        return;
    }

    // Date of Birth Validation (should not be future date)
    let dobDate = new Date(dob);
    let today = new Date();
    if (dobDate > today) {
        alert("Invalid Date of Birth! It cannot be a future date.");
        return;
    }

    alert("Form submitted successfully!");
});