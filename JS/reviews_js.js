
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
  var customername = document.getElementById("customername").value; //the correct input field is found 
  var contactdetails = document.getElementById("contact").value; //the correct input field is found 
  var reviewmessage = document.getElementById("review").value; //the correct input field is found 

  var message = "Name:" + customername + "\n" + "Contact:" + contactdetails + "\n" + "Review:" + reviewmessage + "\n"; //message concatonated 

  var currentreviews = document.getElementById("currentreviews"); //the paragraph element is found 
  currentreviews.innerHTML += message + "<br>"; //the paragraph element is altered to contain the message 
  setlocalstorage(message)// the setlocal storage function is called and the message is passed
     location.reload(); //the page is refreshed 
}



function setlocalstorage(contents) {
  if (storageavailable('localStorage')) { //checks whether or not local storage is available 
    var existingcontent= localStorage.getItem('currentcontents') //checks whether or not currentcontents already exists in local storage and sets it to existing content. otherwise existing content is null
    if (existingcontent) { // if existing content is not null
      contents = existingcontent + '\n' + contents; // the message is added to the contents 
    }
    localStorage.setItem('currentcontents', contents); //the contents are added to local storage under the name of current contents 
  }
  else {
    alert("Local Storage is not available, the review was not saved") //if local storage is not available then the user is alerted that their review was not submitted 
  }
}



window.addEventListener("load", function() { //on load the road reviews function is called 
  loadreviews();
});
  
function loadreviews() {
  var currentreviews = document.getElementById("currentreviews"); //find the current reviews paragraph 
  var content = localStorage.getItem("currentcontents"); // checks local storage for current contents
  if (content) { //if current content already exists 
    currentreviews.innerText = content; // the paragraph is updated with the content 
  }
}

