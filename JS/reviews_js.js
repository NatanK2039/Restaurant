function reviewsubmition() {
    // Get the values entered by the customer using the document.getElementById() method
    var customerName = document.getElementById("customername").value;
    var contactDetails = document.getElementById("contact").value;
    var reviewMessage = document.getElementById("review").value;
  
    // Concatenate the variables together with newline characters in between
    var message = customerName + "\n" + contactDetails + "\n" + reviewMessage;
  
    // Display the concatenated message in the "currentreviews" element
    var currentReviewsElement = document.getElementById("currentreviews");
    currentReviewsElement.innerHTML += message + "<br>";
  
  }

