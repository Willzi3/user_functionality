const Users = [

{   userId: '00001',
    userName: "Zachary",
    userSurname: "Williams",
    email: "zachary@admin.com",
    password: "admin@2024",
    role: "Administrator"}
];

//Convert the array to a JSON string and store it in localStorage
localStorage.setItem("users", JSON.stringify(Users));


//Login funtionality

function login(){

//Get values from form inputs
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

//Retrieve existing user records from localStorage
let user_records = JSON.parse(localStorage.getItem("users"));
console.log(user_records);

//Check if email already exists
let current_user = user_records.find((user) => {
    return user.email === email && user.password === password;
})



if (current_user) {
    console.log("Credentials Match")

} else {
    console.log("Credentials dont match")
}

// Set user data in localStorage
localStorage.setItem("username", current_user.userName);
localStorage.setItem("email", current_user.email);


// Optionally, redirect to a different page after registration
window.location.href = "profile.html";

};

//Register funtionality
function register(){

//Get values from form inputs
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

//Retrieve existing user records from localStorage
let user_records = JSON.parse(localStorage.getItem("users")) || [];
console.log(user_records);

//Check if email already exists
if (user_records.some((user) => user.email === email)){
    console.log("Credentials already exists");

} else {
// Create a new userId based on the existing users
let userId = user_records.length > 0 ? (parseInt(user_records[user_records.length - 1].userId) + 1).toString() : '1';

// Add new user data to user_records
user_records.push({
userId: userId,
userName: name,
userSurname: "", // Placeholder, can be collected from a separate input if needed
email: email,
password: password,
role: "" // Placeholder for role, can be defined later
});


// Save updated user records to localStorage
localStorage.setItem("users", JSON.stringify(user_records));


// Confirm registration
console.log("User registered successfully");

// Optionally, redirect to a different page after registration
window.location.href = "index.html";

}}

//Logout Functionality
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("users");
    window.location.href=("index.html")
}


//Display user profile
let username = localStorage.getItem("username");
let email = localStorage.getItem("email");

if (username && email) {
    
    document.getElementById("welcomeMessage").innerHTML = `Welcome: ${username}`
    document.getElementById("emailMessage").innerHTML = `Email: ${email}`
}


