const cardsEl = document.querySelector('.cards')
export const createCountries = (countries)=>{
    cardsEl.innerHTML = ''
    countries.forEach((country)=>{
        const commonName = country.name.common
        const population = country.population
        const capital = country.capital
        const region = country.capital ? country.region[0] : 'No Capital'
        const flags = country.flags.svg
        const li = document.createElement('li')
        li.classList.add('cards__item')
        li.innerHTML = `
            <a href="./about.html?country=/name/${commonName}">
                <img src=${flags} alt="germany-flag" width="267" height="160">
                <div class="cards__item-inner">
                    <h3 class="cards__title">${commonName}</h3>
                    <p class="population">Population: <span>${population}</span></p>
                    <p class="region">Region: <span>${region}</span></p>
                    <p class="capital">Capital: <span>${capital}</span></p>
                </div>
        </a>        
        `
        cardsEl.appendChild(li)
    })
}

const countryInfoEl = document.querySelector('.country-info')
export const createCountryInfo = (country) =>{
    const {population, borders, capital, flags, name, region, tld, currencies, languages, subregion}= country
    const nativeName = Object.values(name.nativeName)[0].official;
    const currency = Object.values(currencies)[0].name;
    const language = Object.values(languages)
    countryInfoEl.innerHTML = `
    <img
    class="country-info__img"
    src=${flags.svg}
    alt="germany-flag"
    width="560"
    height="400"
  />
  <div class="country-info__content">
    <h2>${name.common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name:
          <span>${nativeName}</span>
        </p>
        <p class="population">
          Population:
          <span>${population}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="name">
          Top Level Domain:
          <span>${tld}</span>
        </p>
        <p class="population">
          Currencies:
          <span>${currency}</span>
        </p>
        <p class="region">
          Languages:
          <span>${language}</span>
        </p>
      </li>
    </ul>

    <div class="country-info__borders">
      <h3>Border Countries:</h3>
      ${borders ? borders.map((border)=>{
        return `
          <a href="./about.html?country=/alpha/${border}">${border}</a>
        `
      }) : 'No Borders'}
    </div>
  </div>
    `
}
/* 
     <a href="./about.html">
                    <img src="./images/jpg/germany-flag.jpg" alt="germany-flag" width="267" height="160">
                    <div class="cards__item-inner">
                        <h3 class="cards__title">Germany</h3>
                        <p class="population">Population: <span>81,770,900</span></p>
                        <p class="region">Region: <span>Europe</span></p>
                        <p class="capital">Capital: <span>Berlin</span></p>
                    </div>
                </a>

*/