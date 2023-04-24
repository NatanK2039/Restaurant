
function storageavailable(type) { //exact copy from source.lab09 - data + persistance
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException &&
      (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
      ) &&
      storage.length !== 0;
  }
}

function reviewsubmition() {
  // Get the values entered by the customer using the document.getElementById() method
  var customername = document.getElementById("customername").value;
  var contactdetails = document.getElementById("contact").value;
  var reviewmessage = document.getElementById("review").value;

  // Concatenate the variables together with newline characters in between
  var message = "Name:" + customername + "\n" + "contact:" + contactdetails + "\n" + "review:" + reviewmessage + "\n";

  // Display the concatenated message in the "currentreviews" element
  var currentreviews = document.getElementById("currentreviews");
  currentreviews.innerHTML += message + "<br>";
  setlocalstorage(message)
     location.reload();
}



function setlocalstorage(contents) {
  if (storageavailable('localStorage')) {
    var existingcontent= localStorage.getItem('currentcontents')
    if (existingcontent) {
      contents = existingcontent + '\n' + contents;
    }
    localStorage.setItem('currentcontents', contents);
  }
  else {
    alert("Local Storage is not available, the review was not saved")
  }
}

// window.addEventListener("load", function() {
//   clear();
// });

window.addEventListener("load", function() {
  loadreviews();
});
  
function loadreviews() {
  var currentreviews = document.getElementById("currentreviews");
  var content = localStorage.getItem("currentcontents");
  if (content) {
    currentreviews.innerText = content;
  }
}

function clear() {
  localStorage.clear();
}

