// const Users = [

// {   userId: '00001',
//     userName: "Zachary",
//     userSurname: "Williams",
//     email: "zachary@admin.com",
//     password: "admin@2024",
//     role: "Administrator"}
// ];

// //Convert the array to a JSON string and store it in localStorage
// localStorage.setItem("users", JSON.stringify(Users));


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

 // userName
    // userSurname
    // email
    // password
    // role

// Set user data in localStorage
localStorage.setItem("userId", current_user.userId);
localStorage.setItem("userName", current_user.userName);
localStorage.setItem("userSurname", current_user.userSurname);
localStorage.setItem("email", current_user.email);
localStorage.setItem("password", current_user.password);
localStorage.setItem("role", current_user.role);



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


//Preview profile
function update(){
    let userID = localStorage.getItem("userId")
    let userName = localStorage.getItem("userName")
    let userSurname = localStorage.getItem("userSurname")
    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")
    let role = localStorage.getItem("role")

    let display = document.getElementById("container")

    let displayInfo = `

    <div class="profile-settings">
    <form class="profile-form" onsubmit="saveProfile(event)">

    <div class="form-option">
    <label for="userID">userID:</label>
    <input type="text" name="userID" id="userID"  value="${userID}">
    </div>

    <div class="form-option">
    <label for="userName">userName:</label>
    <input type="text" name="userName" id="userName"  value="${userName}">
    </div>

    <div class="form-option">
    <label for="userSurname">userSurname:</label>
    <input type="text" name="userSurname" id="userSurname"  value="${userSurname}">
    </div>

    <div class="form-option">
    <label for="email">Email:</label>
    <input type="text" name="email" id="email"  value="${email}">
    </div>

    <div class="form-option">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password"  value="${password}">
    </div>

    <div class="form-option">
    <label for="role">Role:</label>
    <input type="text" name="role" id="role"  value="${role}">
    </div>

    <button type="submit">Update Profile</button>

    </form>
    </div>
    `

    display.innerHTML = displayInfo
}

//Save Profile Settings
function saveProfile(event) {
    event.preventDefault();

// Update localStorage with new values
localStorage.setItem("userId", document.getElementById("userID").value);
localStorage.setItem("userName", document.getElementById("userName").value);
localStorage.setItem("userSurname", document.getElementById("userSurname").value);
localStorage.setItem("email", document.getElementById("email").value);
localStorage.setItem("password", document.getElementById("password").value);
localStorage.setItem("role", document.getElementById("role").value);

console.log("Profile updated successfully!");



}


//Display user profile
let username = localStorage.getItem("username");
let email = localStorage.getItem("email");
let userID = localStorage.getItem("userID")

if (username && email) {
    
    document.getElementById("welcomeMessage").innerHTML = `${username}`
    document.getElementById("emailMessage").innerHTML = `${email}`
}


