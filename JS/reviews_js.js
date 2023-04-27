
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

function updatefile() {
  const owner = "NatanK2039";
  const repo = "NatanK2039/Restaurant";
  const path = "ReviewsFile";
  const branch = "main";

  const authToken = `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
  KZoZ2Bb5eeTojxk1FuNJpMd3M=`;

  const newfileccontents = "example content";

  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
    headers: {
      Authorization: `token ${authToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const filecontents = atob(data.content);
    const modifiedfilecontents = filecontents + "\n" + newfileccontents;
    const encodedfilecontents = btoa(modifiedfilecontents);

    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
      method: "put", 
      headers: {
        Authorization: `token ${authToken}`, 
        "content-type": "application/json"
      }, 
      body: JSON.stringify({
        message: "Update file", 
        content: encodedfilecontents, 
        sha: data.sha,
        branch: branch
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response here
      console.log(data);
    })
    .catch(error => {
      // Handle errors here
      console.error(error);
    });
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
}




