// fetch("http://localhost:3000/users")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data); 
//     })
//     .catch((error)=> {
//     console.log(error);
//     });
const url = "http://localhost:3000/users";

//GET ALL USERS
async function getAllUsers() {

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAllUsers();

//GET SINGLE USER

async function getUser(userId){
    const response = await fetch (url+`/${userId}`);
    const data = await response.json();
    console.log(data);
}

getUser(3);

//CREATE NEW USER

//user object

let user = {
    firstName: 'Ohene Adjei',
    lastName: 'Effah',
    email: 'oheneadjei.dev@gmail.com',
    gender: 'male',
    username: 'oheneadj'
};
//POST method
async function addUser (userInfo){
    const response = await fetch (url, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { 'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);  
}

addUser(user);

//UPDATE USER

let userData = {
    firstName: 'Ohene Adjei',
    lastName: 'Effah',
    username: 'oheneadj'
};

async function updateUser (userId, userData){
    
    const response = await fetch (`${url}/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data); 
}
updateUser(3, userData);


//DELETE USER

async function deleteUser(userId){
    const response = await fetch (`${url}/${userId}`, {
        method: "DELETE"
    });
    const data = await response.json();
    console.log(data); 
}

deleteUser(3);