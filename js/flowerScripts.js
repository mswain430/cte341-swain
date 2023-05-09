// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:8080/flowers');
  displayAllData(data);
  };
  
function displayAllData(data) {
  displayflowerName(data.flowerName);
  displayflowerFamily(data.family);
  displayflowerImg(data.img);
  displayflowerDesc(data.desc);
  displayflowerLocation(data.location);
  displayflowerDroughtTolerant(data.droughtTolerant);
  displayflowerBloomTime(data.bloomTime);
  displayflowerExposure(data.exposure);
}
  
function displayflowerName(data) {
  let flowerName = document.getElementById('flowerName');
  flowerName.innerHTML = data;
}

function displayflowerFamily(data) {
  let family = document.getElementById('family');
  family.innerHTML = data;
}

function displayflowerImg(data) {
  let flowerImg = document.getElementById('img');
  flowerImg.innerHTML = `<img src="{$img}" alt="{$flowerName}" `;
} 

function displayflowerDesc(data) {
    let flowerDesc = document.getElementById('desc');
    flowerDesc.innerHTML = data;
  }

  function displayflowerLocation(data) {
    let location = document.getElementById('location');
    location.innerHTML = data;
  }

function displayflowerDroughtTolerant(data) {
    let droughtTolerant = document.getElementById('droughtTolerant');
    droughtTolerant.innerHTML = data;
  }

function displayflowerBloomTime(data) {
  let bloomTime = document.getElementById('bloomTime');
  bloomTime.innerHTML = data;
}

function displayflowerExposure(data) {
  let exposure = document.getElementById('exposure');
  exposure.innerHTML = data;
}
  
getData();