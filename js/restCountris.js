const restCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => displayCountry(countries))
}

const displayCountry = (countries) => {
    // for (let country of countries) {
    //     console.log(country);
    // }
    const countryContainer = document.getElementById('countryContainer');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `
        <div class="card mb-3 text-center">
        <img src="${country.flags.png}" class="rounded mx-auto d-block h-25 w-60" alt="..." >
        <div class="card-body">
            <h6 class="card-title"> Common Name:${country.name.common}, Official Name:${country.name.official}  </h6>
            <p class="card-text">
            Capital: ${country.capital? country.capital[0]:"NO Capital"} 
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
        `
        countryContainer.appendChild(countryDiv);
    });
}

restCountry();