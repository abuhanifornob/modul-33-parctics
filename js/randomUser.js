const loadUser = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(user => displayUser(user.results))
}
const displayUser = (users) => {
    const userContainer = document.getElementById('userContainer');

    for (let user of users) {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <div class="card" style="width: 20rem;">
        <img src="${user.picture.medium}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Name:${user.name.title} ${user.name.first} ${user.name.last}  </h5>
            <h6>Gender: ${user.gender}</h6>
            <p class="card-text">
               Age:${user.dob.age} </br>
               Date: ${user.dob.date}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        `
        userContainer.appendChild(userDiv)
    }

}
loadUser();