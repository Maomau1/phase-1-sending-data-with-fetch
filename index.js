// Add your code here
//const element = document.body.createElement("div");
function submitData (userName,userEmail) {
const user = {
    name: `${userName}`,
    email:`${userEmail}`,
};
console.log(user);

return(fetch ("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        
    },
    body:JSON.stringify(user),
        //name: `${userName}`,
        //email:`${userEmail}`,
    
})
.then(function (response) {
    return response.json();
})
.then(function(object) {
    console.log(object.id);
    const element = document.createElement("div");
    document.body.append(element);
    element.textContent = `${object.id}`;
})
.catch((error) => {
    alert("Bad things! Ragnarők!");
    const element = document.createElement("div");
    document.body.append(element);
    element.textContent = `${error}`;
    console.log(error.message);
})
)
//document.querySelector()
}

