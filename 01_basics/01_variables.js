const accountId = 144553;
let accountEmail = "Deepak@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// Updating values
accountEmail = "Deepak@Deepak.com";
accountPassword = "21212121";
accountCity = "jaipur";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Creating a back button dynamically
const backButton = document.createElement("button");
backButton.innerText = "🔙 Go Back";
backButton.onclick = goBack;
document.body.appendChild(backButton);
