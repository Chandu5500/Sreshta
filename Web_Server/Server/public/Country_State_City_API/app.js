var config={
    cUrl : 'https://api.countrystatecity.in/v1/countries',
    cKey : 'cWplVzBhOVlCNFpHRndJdEkzT1RHcTllYjcyMnhMcDh5TDBkQklPeg=='
}

var countrySelect = document.querySelector('.country');
var countryState = document.querySelector('.state');
var countryCity = document.querySelector('.city');

function loadCountries(){
    let apiEndPoint = config.cUrl
    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.cKey}})
    .then(Response => Response.json())
    .then(data =>{
        //console.log(data);

        data.forEach(country =>{
            const  option = document.createElement('option')
            option.value = country.iso2
            option.textContent = country.name
            countrySelect.appendChild(option)
        })
    })
    .catch(error => console.error("Error loading countries:", error))
}

window.onload = loadCountries