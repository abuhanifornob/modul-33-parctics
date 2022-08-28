const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data.quote))
}

const displayQuote = data => {
    const divContainer = document.getElementById('div-container');

    const div = document.createElement('div');
    div.innerHTML = `
        <p>${data}</p>
        `
    divContainer.appendChild(div);
    console.log(data)

}


loadData();