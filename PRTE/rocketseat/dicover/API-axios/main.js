const url ="http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        // const data = response.data
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response=> console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated ={
    name : "Slash",
    avatar: "https://whiplash.net/imagens_promo/slash_por_travis_shinn.jpg",
    city: "Muito longe"
}


const newUser = {
    
    name : "salmi",
    avatar : "https://i.pinimg.com/originals/40/ef/a3/40efa3cdafa05c536a3ea24631d0fb45.jpg",
    city : "Uruana"
    
}

getUsers()
//addNewUser()

updateUser(3, userUpdated)

getUser(3)

deleteUser(8)