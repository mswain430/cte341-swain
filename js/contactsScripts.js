// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(email) {
  const response = await fetch(email);
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
    displayContactsfavoriteColor(data.favoriteColor);
    displayContactsBirthday(data.birthday);
   // displayContactsEmailTitleText(data);
    displayContactsEmailLink(data.email);

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
    let emailLink = document.getElementById('emailLink');
    emailLink.innerHTML = data.email.text;
    emailLink.href = data.emailLink.link;
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