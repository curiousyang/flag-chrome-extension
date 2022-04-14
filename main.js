const allCountries = [
  'Uruguay',
  'Paraguay',
  'Gambia',
  'Djibouti',
  'Martinique',
  'Guam',
  'Georgia',
  'United States',
  'Belize',
  'Mauritius',
  'Lebanon',
  'Saudi Arabia',
  'Ecuador',
  'Marshall Islands',
  'Brazil',
  'Uganda',
  'Qatar',
  'Timor-Leste',
  'Mongolia',
  'Chile',
  'Liberia',
  'Nauru',
  'Réunion',
  'Montserrat',
  'Taiwan',
  'Antarctica',
  'Saint Pierre and Miquelon',
  'Argentina',
  'Togo',
  'Austria',
  'Grenada',
  'Faroe Islands',
  'Morocco',
  'Anguilla',
  'Palau',
  'Northern Mariana Islands',
  'Mauritania',
  'Ukraine',
  'China',
  'Lesotho',
  'Cyprus',
  'DR Congo',
  'Russia',
  'Bangladesh',
  'South Africa',
  'Curaçao',
  'Guatemala',
  'Puerto Rico',
  'Antigua and Barbuda',
  'Israel',
  'Guyana',
  'Cayman Islands',
  'Croatia',
  'Iceland',
  'Caribbean Netherlands',
  'Sint Maarten',
  'Namibia',
  'Dominica',
  'Gibraltar',
  'Senegal',
  'Saint Kitts and Nevis',
  'Oman',
  'Kuwait',
  'Åland Islands',
  'United States Virgin Islands',
  'Bouvet Island',
  'United Kingdom',
  'Honduras',
  'South Georgia',
  'Cambodia',
  'North Macedonia',
  'Iran',
  'Panama',
  'Cook Islands',
  'Andorra',
  'Burundi',
  'Trinidad and Tobago',
  'Comoros',
  'French Southern and Antarctic Lands',
  'Kosovo',
  'Nigeria',
  'Poland',
  'Niue',
  'New Caledonia',
  'Ethiopia',
  'Germany',
  'Azerbaijan',
  'Netherlands',
  'France',
  'Nepal',
  'Barbados',
  'Jersey',
  'India',
  'Kyrgyzstan',
  'South Sudan',
  'Iraq',
  'Italy',
  'Cuba',
  'Bhutan',
  'Bahamas',
  'Norway',
  'Lithuania',
  'Kenya',
  'Pitcairn Islands',
  'Sweden',
  'Guadeloupe',
  'Gabon',
  'Macau',
  'Guernsey',
  'Rwanda',
  'Syria',
  'Canada',
  'Algeria',
  'British Indian Ocean Territory',
  'Western Sahara',
  'Isle of Man',
  'Botswana',
  'Kazakhstan',
  'Venezuela',
  'French Polynesia',
  'Sudan',
  'Wallis and Futuna',
  'Slovakia',
  'Saint Barthélemy',
  'Christmas Island',
  'Solomon Islands',
  'Latvia',
  'British Virgin Islands',
  'Jamaica',
  'Afghanistan',
  'Serbia',
  'Tajikistan',
  'Tonga',
  'Kiribati',
  'Eritrea',
  'Mali',
  'Haiti',
  'Vanuatu',
  'Bosnia and Herzegovina',
  'Vatican City',
  'Benin',
  'Svalbard and Jan Mayen',
  'Samoa',
  'Bolivia',
  'Madagascar',
  'São Tomé and Príncipe',
  'Bahrain',
  'Greece',
  'Peru',
  'Suriname',
  'American Samoa',
  'Niger',
  'Thailand',
  'Tuvalu',
  'North Korea',
  'Ivory Coast',
  'Yemen',
  'New Zealand',
  'Armenia',
  'Pakistan',
  'Tokelau',
  'Malawi',
  'Ireland',
  'Philippines',
  'Czechia',
  'Myanmar',
  'Cocos (Keeling) Islands',
  'Romania',
  'Dominican Republic',
  'Equatorial Guinea',
  'Ghana',
  'Malta',
  'Turkey',
  'Egypt',
  'Mozambique',
  'Mayotte',
  'Belgium',
  'Slovenia',
  'Hungary',
  'United Arab Emirates',
  'Albania',
  'Heard Island and McDonald Islands',
  'Fiji',
  'San Marino',
  'Moldova',
  'Estonia',
  'Saint Vincent and the Grenadines',
  'United States Minor Outlying Islands',
  'Belarus',
  'Sri Lanka',
  'El Salvador',
  'Australia',
  'Bermuda',
  'Nicaragua',
  'Somalia',
  'Turks and Caicos Islands',
  'Micronesia',
  'Palestine',
  'Turkmenistan',
  'Burkina Faso',
  'Costa Rica',
  'Vietnam',
  'Cameroon',
  'French Guiana',
  'Eswatini',
  'Zambia',
  'Liechtenstein',
  'Montenegro',
  'Saint Lucia',
  'Uzbekistan',
  'Chad',
  'Aruba',
  'Denmark',
  'Japan',
  'Cape Verde',
  'Switzerland',
  'Hong Kong',
  'Bulgaria',
  'Jordan',
  'Republic of the Congo',
  'Laos',
  'Norfolk Island',
  'South Korea',
  'Tunisia',
  'Finland',
  'Zimbabwe',
  'Maldives',
  'Singapore',
  'Monaco',
  'Angola',
  'Malaysia',
  'Luxembourg',
  'Guinea',
  'Libya',
  'Spain',
  'Indonesia',
  'Seychelles',
  'Brunei',
  'Mexico',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Sierra Leone',
  'Central African Republic',
  'Greenland',
  'Colombia',
  'Papua New Guinea',
  'Falkland Islands',
  'Portugal',
  'Guinea-Bissau',
  'Saint Martin',
  'Tanzania',
];
// const countries = [
//   'china',
//   'norway',
//   'sweden',
//   'italy',
//   'france',
//   'united states',
//   'united kingdom',
//   'south korea',
//   'north korea',
//   'australia',
//   'spain',
//   'denmark',
//   'egypt',
//   'south africa',
//   'ghana',
//   'somalia',
//   'haiti',
//   'argentina',
//   'uruguay',
//   'paraguay',
//   'germany',
//   'ukraine',
// ];

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

      

        </div>
      </div>
    </div>
  </div>
  `;

  document.querySelector('body').insertAdjacentHTML('afterbegin', html);
}

(async () => {
  showFacts(await grabCountry(currentCountry)); //1st show - japan
})();

const searchBtn = document.querySelector('.search-btn');
const randomBtn = document.querySelector('.random-btn');

//Event delegation
searchBtn.addEventListener('click', (e) => {
  let countryInput = document.querySelector('.country-input');
  if (countryInput.value.trim() === '') return;
  fetch(`https://restcountries.com/v3.1/name/{${countryInput.value}}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector('.first-child').remove();
      countryInput.value = '';
      showFacts(data);
    })
    .catch((error) => console.log(error));
});

randomBtn.addEventListener('click', (e) => {
  let randomCountry =
    allCountries[Math.floor(Math.random() * allCountries.length)];
  fetch(`https://restcountries.com/v3.1/name/{${randomCountry}}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector('.first-child').remove();
      console.log(randomCountry);
      showFacts(data);
    })
    .catch((error) => console.log(error));
});

// async function init() {
//   const res = await fetch(`https://restcountries.com/v3.1/all`);
//   const data = await res.json();
//   const result = [];
//   const final = [];
//   data.forEach((country) => {
//     result.push(country.name.common);
//   });

//   for (let i = 200; i < result.length; ++i) {
//     final.push(result[i]);
//   }

//   console.log(final);
// }

// init();
