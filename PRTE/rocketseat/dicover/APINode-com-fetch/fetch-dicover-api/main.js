const url="http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => (response.json()))
    .then(data => renderApisResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){ //funcao para incluir usuarios com POST
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = { //criacao de ususario para ser incluido
    name: "Salmi",
    avatar: "https://avatars.githubusercontent.com/u/30538766?s=400&u=8018e22c52aeb56b2ff997aa221d650355afaf52&v=4",
    city: "Porangatu"
}

function updateUser(){ //update de usuario com PUT
    fetch(`${url}/1`, {
        method: "PUT", 
        body: JSON.stringify(updatedUser),
        headers:{
            "Content-type" : "application/json; charset=UTF-8"      
        }
    }) 
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
     name: "Clovão",
     avatar: "https://pbs.twimg.com/media/EM6rqHiWwAA-Mpc.jpg",
     city: "Recife"
}

updateUser(updatedUser)

addUser(newUser)

getUsers()
getUser()