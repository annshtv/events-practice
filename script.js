let button = document.createElement("BUTTON");
button.innerHTML = "create";
button.id = "createButton";
document.body.appendChild(button);
button.style.backgroundColor = "#32CD32";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.height = "30px";
button.style.width = "70px";
button.style.marginBottom = "20px";

let calendarContainer = document.createElement("div");
document.body.appendChild(calendarContainer);

let calendar = document.createElement("input");
calendar.type = "date";
calendarContainer.appendChild(calendar);

let popUp = document.createElement("div");
popUp.id = "popUp";
let popUpContent = document.createElement("div");
popUpContent.id = "popUpContent";
popUp.style.display = "none";
popUp.style.justifyContent = "center";
popUp.style.alignItems = "center";
popUp.appendChild(popUpContent);

let popUpText = document.createElement("h2");
popUpText.innerHTML = "";
let close = document.createElement("BUTTON");
close.id = "closePopUp";
close.innerHTML = "x";
popUpContent.appendChild(close);
close.style.position = "absolute";
close.style.top = "10px";
close.style.right = "15px";
close.style.color = "red";
close.style.border = "none";
close.style.borderRadius = "5px";
popUpText.style.textAlign = "center";
popUpContent.appendChild(popUpText);

document.body.appendChild(popUp);
popUp.style.width = "300px";
popUp.style.height = "250px";
popUp.style.backgroundColor = "#B0C4DE";
popUp.style.position = "absolute";
popUp.style.borderRadius = "30px";
popUp.style.left = "50%";
popUp.style.top = "50%";
popUp.style.transform = "translate(-50%, -50%)";
document.body.style.minHeight = "100vh";

let eventP = document.createElement("input");
eventP.type = "text";
eventP.id = "eventP";

let getCalendar = document.querySelector("#createButton");

const popUpForm = () => {
  popUp.style.display = "flex";
};
getCalendar.addEventListener("click", popUpForm);

let closeP = document.querySelector("#closePopUp");
const closePopUpForm = () => {
  popUp.style.display = "none";
};
calendar.addEventListener("change", () => {
  popUpText.innerHTML = calendar.value;
});
closeP.addEventListener("click", closePopUpForm);

let time = document.createElement("p");
time.innerText = moment().format("h:mm:ss a");
popUpContent.appendChild(time);
time.style.textAlign = "center";

let newTExt = document.createElement("p");
newTExt.style.textAlign = "center";
newTExt.innerHTML = "Добавьте событие";
popUpContent.appendChild(newTExt);
popUpContent.appendChild(eventP);

let button1 = document.createElement("BUTTON");
button1.innerHTML = "add";
button1.id = "but";
popUpContent.appendChild(button1);

button1.addEventListener("click", function () {
  let inputValue = eventP.value;

  if (!inputValue) return;

  let createInfoEvent = document.createElement("div");
  createInfoEvent.id = "createInfoEvent";
  createInfoEvent.style.backgroundColor = "#778899";
  createInfoEvent.style.width = "250px";
  createInfoEvent.style.height = "auto";
  createInfoEvent.style.padding = "15px";
  createInfoEvent.style.margin = "10px 0";
  createInfoEvent.style.borderRadius = "15px";
  createInfoEvent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

  createInfoEvent.style.border = "1px solid #A9A9A9";
  createInfoEvent.style.transition = "transform 0.3s ease";
  let currentTime = document.createElement("p");
  currentTime.id = "currentTime";
  currentTime.innerText = "Текущее время: " + moment().format("h:mm:ss a");
  createInfoEvent.appendChild(currentTime);

  let specifiedTime = document.createElement("p");
  specifiedTime.id = "specifiedTime";

  let eventText = document.createElement("p");
  eventText.id = "eventText";
  eventText.innerText = "Ваше событие: " + inputValue;
  createInfoEvent.appendChild(eventText);

  document.body.appendChild(createInfoEvent);
});

time.innerText = moment().format("h:mm:ss a");

document.addEventListener("click", function (event) {
  if (event.target.tagName === "HTML" || event.target.tagName === "BODY") {
    popUp.style.display = "none";
  }
});
