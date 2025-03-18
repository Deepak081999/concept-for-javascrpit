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

// Function to go back to the main page
function goBack() {
    window.location.href = "https://deepak081999.github.io/concept-for-javascrpit/";
}

// Creating a back button dynamically
const backButton = document.createElement("button");
backButton.innerText = "🔙 Go Back";
backButton.onclick = goBack;
backButton.style.position = "fixed";
backButton.style.bottom = "20px";
backButton.style.right = "20px";
backButton.style.padding = "10px";
backButton.style.fontSize = "16px";
backButton.style.cursor = "pointer";
backButton.style.backgroundColor = "#007bff";
backButton.style.color = "#fff";
backButton.style.border = "none";
backButton.style.borderRadius = "5px";

document.body.appendChild(backButton);
