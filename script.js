const firstNameInput = document.getElementById("first-name");
const firstNameLabel = document.querySelector(".first-name");
const lastNameInput = document.getElementById("last-name");
const lastNameLabel = document.querySelector(".last-name");
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector(".email");
const passwordInput = document.getElementById("password");
const passwordLabel = document.querySelector(".password");
const submitButton = document.getElementById("submit");

const firstAlertMessage = document.createElement("p");
const lastAlertMessage = document.createElement("p");
const emailAlertMessage = document.createElement("p");
const passwordAlertMessage = document.createElement("p");

function check(inputName) {
  if (inputName.value === "") {
    // Remove/replace placeholder
    if (inputName.id === "email") {
      inputName.placeholder = "email@example/com";
      inputName.classList.add("placeholder-color");
    } else {
      inputName.placeholder = "";
    }

    inputName.classList.add("error-alert");

    if (inputName === firstNameInput) {
      if (firstNameLabel.contains(firstAlertMessage)) {
        return;
      } else {
        let text = document.createTextNode("First Name cannot be empty");
        firstAlertMessage.appendChild(text);
        firstNameLabel.appendChild(firstAlertMessage);
      }
    }
    if (inputName === lastNameInput) {
      if (lastNameLabel.contains(lastAlertMessage)) {
        return;
      } else {
        let text = document.createTextNode("Last Name cannot be empty");
        lastAlertMessage.appendChild(text);
        lastNameLabel.appendChild(lastAlertMessage);
      }
    }
    if (inputName === emailInput) {
      if (emailLabel.contains(emailAlertMessage)) {
        return;
      } else {
        let text = document.createTextNode("Looks like this is not an email");
        emailAlertMessage.appendChild(text);
        emailLabel.appendChild(emailAlertMessage);
      }
    }
    if (inputName === passwordInput) {
      if (passwordLabel.contains(passwordAlertMessage)) {
        return;
      } else {
        let text = document.createTextNode("Password cannot be empty");
        passwordAlertMessage.appendChild(text);
        passwordLabel.appendChild(passwordAlertMessage);
      }
    }
  } else {
    inputName.classList.remove("error-alert");
    if (inputName === firstNameInput) {
      firstAlertMessage.remove();
    }
    if (inputName === lastNameInput) {
      lastAlertMessage.remove();
    }
    if (inputName === emailInput) {
      emailAlertMessage.remove();
    }
    if (inputName === passwordInput) {
      passwordAlertMessage.remove();
    }
  }
}

//Stop repeating if empty

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  check(firstNameInput);
  check(lastNameInput);
  check(emailInput);
  check(passwordInput);
});

/*
Further work
1. When input is filled error should be removed immediately
2. Refactor code
*/
