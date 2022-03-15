fetch("http://localhost:3000/users")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data); 
    })
    .catch((error)=> {
    console.log(error);
    });