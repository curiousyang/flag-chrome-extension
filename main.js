//https://restcountries.com/v3.1/name/{name}
//get country from user's input
//array will hold a set countries' name, we will randomly pick an element from array and pass it to showFact
const countries = [
  'china',
  'norway',
  'sweden',
  'italy',
  'france',
  'united states',
  'united kingdom',
  'south korea',
  'north korea',
  'australia',
  'spain',
  'denmark',
  'egypt',
  'south africa',
  'ghana',
  'somalia',
  'haiti',
  'argentina',
  'uruguay',
  'paraguay',
  'germany',
  'ukraine',
];

let html;
let currentCountry = 'japan';
//user input : united states
//first search full name list, match, return url
//if full name not found, second search name list, match, return url
//when we search in our database, compare it vs [full name and name], when match, ///we generate the urlhttps://restcountries.com/v3.1/name/united
//display random facts and flags after grabbing JSON object
//google map api
async function grabCountry(currentCountry) {
  // let currentCountry = 'brazil';
  let currentCountryURL = `https://restcountries.com/v3.1/name/{${currentCountry}}`;

  const res = await fetch(currentCountryURL);
  const data = await res.json();

  return data;
}

function showFacts(data) {
  //get country name
  let countryName = data[0].name.common;
  //get flag image
  let flagImgURL = data[0].flags.png;
  //coat of arm
  let coatArmImgURL = data[0].coatOfArms.png;
  //population
  let population = data[0].population;
  //language
  let majorLanguage = Object.values(data[0].languages)[0];
  //subregion
  let subRegion = data[0].subregion;
  //startOfWeek
  let startOfWeek = data[0].startOfWeek;
  //native name
  let nativeName = Object.values(data[0].name.nativeName)[0].official;
  // let timeZone = data[0].timezones[0];

  //capital
  let capitalCity = data[0].capital[0];

  // document.querySelector('body').innerHTML = '';
  //horizontal card
  html = `
  <div class="card mb-3 px-2 first-child" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4 d-flex d-block align-items-center justify-content-center">
        <img src="${flagImgURL}" class="img-fluid w-60 align-middle rounded-start" alt="Flag Picture">
        
      </div>

       <div class="col-md-4 d-flex d-block align-items-center justify-content-center">
<img src="${coatArmImgURL}" class="img-fluid w-50 align-middle rounded-start" alt="Coat of Arms ">
       </div>

      <div class="col-md-4">
        <div class="card-body" ms-2>
          <h2 class="card-title mb-3 ms-3">${
            countryName.charAt(0).toUpperCase() + countryName.slice(1)
          }</h2>
          <p class="card-text"><span class='fact'> ${nativeName}</span></p>
      <p class="card-text"><span class='fact'>Capital:</span> ${capitalCity}</p>
      <p class="card-text"><span class='fact'>Language:</span> ${majorLanguage}</p>
      <p class="card-text"><span class='fact'>Population:</span> ${population}   </p>
      <p class="card-text"><span class='fact'>Start of Week:</span> ${
        startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1)
      }</p>
      <p class="card-text"><span class='fact'>Sub-region:</span> ${subRegion}</p>
      
      
      <div class="input-group mb-3">

  <input type="text" class="form-control country-input" placeholder="Search country" aria-label="Username" aria-describedby="basic-addon1">
</div>

        </div>
      </div>
    </div>
  </div>
  `;

  document.querySelector('body').insertAdjacentHTML('afterbegin', html);

  console.log(body);
}

(async () => {
  showFacts(await grabCountry(currentCountry)); //1st show - japan
})();

const searchBtn = document.querySelector('.search-btn');
const randomBtn = document.querySelector('.random-btn');

//Event delegation
searchBtn.addEventListener('click', (e) => {
  let countryInput = document.querySelector('.country-input');
  fetch(`https://restcountries.com/v3.1/name/{${countryInput.value}}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(document.querySelector('body'));
      document.querySelector('.first-child').remove();
      showFacts(data);
    });
});

randomBtn.addEventListener('click', (e) => {
  let randomCountry = countries[Math.floor(Math.random() * countries.length)];
  fetch(`https://restcountries.com/v3.1/name/{${randomCountry}}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(document.querySelector('body'));
      document.querySelector('.first-child').remove();
      showFacts(data);
    });
});

{
  /* <div class="d-flex">
  <a href="#" class="btn btn-success mb-3 me-2 search-btn">
    Search
  </a>
  <a href="#" class="btn btn-dark mb-3 random-btn">
    Go somewhere
  </a>
</div>; */
}
