console.log("Script started")

// TODO: Test working with objects here
let person={
    name: "Fread", 
    age: "20",
    eyeColor:"green"
}

console.log(person.name);

person.name = "josh";
console.log(person.name)

person.birthday = "feb 7";
console.log(person);



function processForm(event) {
    console.log("click");
    // TODO: prevent this function from reloading the page when the form is submitted
    event.preventDefault();
    
    // TODO: Create a newUser object that has all the user's info from the form
    let newUser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        birthayy: document.getElementById("birthday").value,
        favColor: document.getElementById("favcolor").value
    }
    // TODO: Call the addUser function and pass the newUser object as a parameter
    addUser(newUser);
}

function addUser(user) {
    // Create a div to hold the user's info
    let div = document.createElement("div");
    // TODO: Set the background color of the div to the user's favorite color
    div.style.backgroundColor = user.favcolor;

    // Create a heading for the user's name
    let name = document.createElement("h2");
    // TODO: Set the text using the object data
    name.innerText = user.name;
    div.appendChild(name); // Add the heading to the div

    // Create a paragraph for the user's email
    let email = document.createElement("p");
    // TODO: Set the text using the object data
    email.style.innerText = user.email;
    div.appendChild(email); // Add the paragraph to the div
    
    // Create a paragrapn for the user's birthdate
    let birthdate = document.createElement("p");
    // TODO: Set the text using the object data
    birthdate.style.innerText = user.birthdate;
    div.appendChild(birthdate); // Add the paragraph to the div

    document.body.appendChild(div); // Add the div to the page
}