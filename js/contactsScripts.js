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
    displayfavoriteColor(data);
    displayContactsBirthday(data);
    displayContactsEmail(data);
 //   displayContactsEmailLink(data);

  }
  
  function displayContactsfName(data) {
    let contactsfName = document.getElementById('contactsfName');
    contactsfName.innerHTML = data;
  }
  function displayContactslName(data) {
    let contactslName = document.getElementById('contactslName');
    contactslName.innerHTML = data;
  }
  
 /* function displayContactsEmail(data) {
    let emailLink = document.getElementById('emailLink');
    emailLink.innerHTML = data.emailLink.text;
    emailLink.href = data.emailLink.link;
  } */

  function displayContactsfavoriteColor(data) {
    let contactsfavoriteColor = document.getElementById('contactsfavoriteColor');
    contactsfavoriteColor.innerHTML = data;
  }
  function displayContactsBirthday(data) {
    let contactsBirthday = document.getElementById('contactsBirthday');
    contactsBirthday.innerHTML = data;
  }
  

  getData();