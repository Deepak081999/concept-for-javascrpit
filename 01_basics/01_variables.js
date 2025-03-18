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

// Creating and adding an image dynamically
const imgElement = document.createElement("img");
imgElement.src = "./img/table.jpg";  // Ensure the correct path
imgElement.alt = "Table Image";
imgElement.style.width = "300px";  // Adjust size as needed
imgElement.style.display = "block";
imgElement.style.margin = "20px auto";

document.body.appendChild(imgElement);
