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
  var message = "Name:" + customername + "\n" + "Contact:" + contactdetails + "\n" + "Review:" + reviewmessage + "\n";

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

window.addEventListener("load", function() {
  clear();
});

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

// function updatefile() {
//   const owner = "NatanK2039";
//   const repo = "NatanK2039/Restaurant";
//   const path = "ReviewsFile";
//   const branch = "main";

//   const authToken = `authtoken removed before committing to github.`;

//   const newfileccontents = "example content";

//   fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
//     headers: {
//       Authorization: `token ${authToken}`
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     const filecontents = atob(data.content);
//     const modifiedfilecontents = filecontents + "\n" + newfileccontents;
//     const encodedfilecontents = btoa(modifiedfilecontents);

//     fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
//       method: "put", 
//       headers: {
//         Authorization: `token ${authToken}`, 
//       }, 
//       body: JSON.stringify({
//         message: "Update file", 
//         content: encodedfilecontents, 
//         sha: data.sha,
//         branch: branch
//       })
//     })
//     .then(response => response.json())
//     .then(data => {

//       console.log(data);
//     })
//     .catch(error => {

//       console.error(error);
//     });
//   })
//   .catch(error => {
   
//     console.error(error);
//   });
// }




