// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:8080/gardenerContacts');
  displayAllData(data);
  };
  
function displayAllData(data) {
  displayContactsfName(data.firstName);
  displayContactslName(data.lastName);
  displayContactsEmailLink(data.email);
  displayContactsZipcode(data.zipcode);
  displayContactsCellphone(data.cellphone);
  // displayContactsEmailTitleText(data);


}
  
function displayContactsfName(data) {
  let firstName = document.getElementById('firstName');
  firstName.innerHTML = data;
}

function displayContactslName(data) {
  let lastName = document.getElementById('lastName');
  lastName.innerHTML = data;
}

/*function displayContactsEmailTitleText(data) {
  let emailTitleText = document.getElementById('emailTitleText');
  emailTitleText.innerHTML = 'Email';
} */

function displayContactsEmailLink(data) {
  let emailLink = document.getElementById('email');
  email.innerHTML = data.email.text;
  emailLink.href = data.email.link;
} 

function displayContactsZipcode(data) {
  let zipcode = document.getElementById('zipcode');
  zipcode.innerHTML = data;
}

function displayContactsCellphone(data) {
  let cellphone = document.getElementById('cellphone');
  cellphone.innerHTML = data;
}
  
getData();