document.addEventListener("DOMContentLoaded", function () {
    // Get all the form input fields
    const fullName = document.getElementById("fullName");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const nationality = document.getElementById("nationality");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const pobox = document.getElementById("pobox");
    const emergencyPhone = document.getElementById("emergencyPhone");
    const passportNumber = document.getElementById("passportNumber");
    const visa = document.getElementById("visa");
    const departureCity = document.getElementById("departureCity");
    const destinationCity = document.getElementById("destinationCity");
    const submitMessage = document.getElementById("submit-message");
  
    // Error elementswe
    const fullNameError = document.getElementById("fullNameError");
    const genderError = document.getElementById("genderError");
    const dateError = document.getElementById("dateError");
    const nationalityError = document.getElementById("nationalityError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const poboxError = document.getElementById("poboxError");
    const emergencyPhoneError = document.getElementById("emergencyPhoneError");
    const passportNumberError = document.getElementById("passportNumberError");
    const visaError = document.getElementById("visaError");
    const departureCityError = document.getElementById("departureCityError");
    const destinationCityError = document.getElementById("destinationCityError");
  
    // Function to validate fields
    function validateField(input, errorElement, validationFn) {
      if (!validationFn(input.value)) {
        errorElement.style.display = "inline";
        input.style.border = "1px solid red";
        return false;
      } else {
        errorElement.style.display = "none";
        input.style.border = "1px solid green";
        return true;
      }
    }
  
    // Validation functions for each field
    function isNotEmpty(value) {
      return value.trim() !== "";
    }
  
    function isValidPhoneNumber(value) {
      const phoneRegex = /^[0-9]{10}$/; // Adjust the regex for your region if needed
      return phoneRegex.test(value);
    }
  
    function isValidEmail(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
  
    function isValidDate(value) {
      return value !== "";
    }
  
    // Form submission event listener
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      let isValid = true;
  
      // Validate all fields
      isValid &= validateField(fullName, fullNameError, isNotEmpty);
      isValid &= validateField(gender, genderError, isNotEmpty);
      isValid &= validateField(dob, dateError, isValidDate);
      isValid &= validateField(nationality, nationalityError, isNotEmpty);
      isValid &= validateField(phone, phoneError, isValidPhoneNumber);
      isValid &= validateField(email, emailError, isValidEmail);
      isValid &= validateField(emergencyPhone, emergencyPhoneError, isValidPhoneNumber);
      isValid &= validateField(passportNumber, passportNumberError, isNotEmpty);
      isValid &= validateField(visa, visaError, isNotEmpty);
      isValid &= validateField(departureCity, departureCityError, isNotEmpty);
      isValid &= validateField(destinationCity, destinationCityError, isNotEmpty);
  
      // If all fields are valid, display a success message
      if (isValid) {
        submitMessage.textContent = "Form submitted successfully!";
        submitMessage.style.color = "green";
      } else {
        submitMessage.textContent = "Please fill out the form correctly.";
        submitMessage.style.color = "red";
      }
    });
  });
  