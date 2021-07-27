const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
let customAlert = document.createElement("p");

const firstNameDiv = document.querySelector("div .first-name");
const submitButton = document.getElementById("submit");

function check(inputName) {
  if (inputName.value === "") {
    inputName.classList.add("error-alert");
    if (inputName === firstNameInput) {
      let text = document.createTextNode("First Name cannot be empty");
    } else if (inputName === lastNameInput) {
      let text = document.createTextNode("Last Name cannot be empty");
    } else if (inputName === emailInput) {
      let text = document.createTextNode("Looks like this is not an email");
    } else if (inputName === passwordInput) {
      let text = document.createTextNode("Password cannot be empty");
    }
    customAlert.appendChild(text);
    inputName.appendChild(customAlert);

    if (inputName.id === "email") {
      inputName.placeholder = "email@example/com";
      inputName.classList.add("placeholder-color");
    } else {
      inputName.placeholder = "";
    }
  }
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  check(firstNameInput);
  check(lastNameInput);
  check(emailInput);
  check(passwordInput);
});

console.dir(firstNameDiv);
