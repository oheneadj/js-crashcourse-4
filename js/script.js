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

//Get all users
async function getAllUsers() {

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAllUsers();

//get single user
let userId;
async function getUser(userId){
    
    const response = await fetch (url+`/${userId}`);
    const data = await response.json();
    console.log(data);
}

getUser(3);

//create a new user
let user = {
    firstName: 'Ohene Adjei',
    lastName: 'Effah',
    email: 'oheneadjei.dev@gmail.com',
    gender: 'male',
    username: 'oheneadj'
};
//user object


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

//Update user

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
    console.log(`The Updated data is ${data}`); 
}
updateUser(3, userData);
