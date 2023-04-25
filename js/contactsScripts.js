// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  const getData = async () => {
    const data = await apiFetch('http://localhost:8080/contacts');
    displayAllData(data);
  };
  
  function displayAllData(data) {
    displayContactsfName(data.firstName);
    displayContactslName(data.lastName);
    displayContactsfavoriteColor(data);
    displayContactsBirthday(data);
    displayContactsEmail(data);
    displayContactsEmailTitleText(data);
 //   displayContactsEmailLink(data);

  }
  
  function displayContactsfName(data) {
    let firstName = document.getElementById('firstName');
    firstName.innerHTML = data;
  }
  function displayContactslName(data) {
    let lastName = document.getElementById('lastName');
    lastName.innerHTML = data;
  }
  function displayContactsEmailTitleText(data) {
    let emailTitletext = document.getElementById('emailTitleText');
    emailTitletext.innerHTML = data;
  }
  function displayContactsEmail(data) {
    let email = document.getElementById('email');
    email.innerHTML = data.email.text;
    email.href = data.email.link;
  } 

  function displayContactsfavoriteColor(data) {
    let favoriteColor = document.getElementById('favoriteColor');
    favoriteColor.innerHTML = data;
  }
  function displayContactsBirthday(data) {
    let birthday = document.getElementById('birthday');
    birthday.innerHTML = data;
  }
  
  getData();