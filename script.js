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

let calendarDiv = document.createElement("div");
calendarDiv.id = "container";

let calendarContainer = document.createElement("div");
document.body.appendChild(calendarContainer);
calendarContainer.style.display = "flex";
calendarContainer.style.flexDirection = "column";
calendarContainer.style.alignItems = "flex-start";
calendarContainer.style.gap = "10px";

let calendar = document.createElement("input");
calendar.type = "date";
calendar.id = "calendar";
calendarContainer.appendChild(calendar);
calendar.style.backgroundColor = "#f0f0f0";
calendar.style.border = "1px solid #ccc";
calendar.style.borderRadius = "8px";
calendar.style.padding = "8px 12px";
calendar.style.fontSize = "14px";
calendar.style.width = "150px";
calendar.style.boxSizing = "border-box";
calendar.style.marginBottom = "10px";

let time1 = document.createElement("input");
time1.type = "time";
calendarContainer.appendChild(time1);
time1.style.backgroundColor = "#f0f0f0";
time1.style.border = "1px solid #ccc";
time1.style.borderRadius = "8px";
time1.style.padding = "8px 12px";
time1.style.fontSize = "14px";
time1.style.width = "150px";
time1.style.boxSizing = "border-box";
time1.style.marginBottom = "10px";

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
popUp.style.position = "fixed";
popUp.style.borderRadius = "30px";
popUp.style.left = "50%";
popUp.style.top = "50%";
popUp.style.transform = "translate(-50%, -50%)";
document.body.style.minHeight = "100vh";

let eventP = document.createElement("input");
eventP.type = "text";
eventP.id = "eventP";
eventP.style.backgroundColor = "#f0f0f0";
eventP.style.border = "1px solid #ccc";
eventP.style.borderRadius = "8px";
eventP.style.padding = "8px 12px";
eventP.style.fontSize = "14px";
eventP.style.marginTop = "10px";
eventP.style.width = "100%";
eventP.style.boxSizing = "border-box";
eventP.style.marginBottom = "10px";

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
button1.style.backgroundColor = "#4CAF50";
button1.style.color = "white";
button1.style.border = "none";
button1.style.borderRadius = "12px";
button1.style.padding = "10px 20px";
button1.style.fontSize = "16px";
button1.style.marginLeft = "auto";
button1.style.marginRight = "auto";

let events = [];

let weekContainer = document.createElement("div");
weekContainer.id = "weekContainer";
document.body.appendChild(weekContainer);

weekContainer.style.display = "flex";
weekContainer.style.justifyContent = "space-between";
weekContainer.style.width = "100%";

let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

let columns = [];
daysOfWeek.forEach((day, index) => {
  let dayColumn = document.createElement("div");
  dayColumn.classList.add("dayColumn");
  dayColumn.style.border = "1px solid #ccc";
  dayColumn.style.padding = "10px";
  dayColumn.style.flex = "1";
  dayColumn.style.minHeight = "200px";
  dayColumn.style.boxSizing = "border-box";
  dayColumn.style.margin = "5px";
  let dayHeader = document.createElement("h3");
  dayHeader.innerText = day;
  dayColumn.appendChild(dayHeader);
  dayColumn.id = day.toLowerCase();
  weekContainer.appendChild(dayColumn);
  columns.push(dayColumn);
});

const sortEvents = () => {
  events.sort((a, b) => {
    let dateTimeA = `${a.date}T${a.time}`;
    let dateTimeB = `${b.date}T${b.time}`;
    return dateTimeA.localeCompare(dateTimeB);
  });
};

const updateWeekContainer = () => {
  columns.forEach(column => {
    let dayHeader = column.querySelector("h3");
    let eventsContainer = column.querySelector(".events-container");

    if (!eventsContainer) {
      eventsContainer = document.createElement("div");
      eventsContainer.classList.add("events-container");
      column.appendChild(eventsContainer);
    }

    eventsContainer.innerHTML = ""; 
  });

  events.forEach(event => {
    let date = new Date(event.date);
    let dayIndex = date.getDay();

    if (dayIndex === 0) {
      dayIndex = 6;
    } else {
      dayIndex -= 1;
    }

    let dayColumn = columns[dayIndex];
    let eventsContainer = dayColumn.querySelector(".events-container");

    let eventDiv = document.createElement("div");
    eventDiv.style.backgroundColor = "#778899";
    eventDiv.style.padding = "10px";
    eventDiv.style.marginTop = "10px";
    eventDiv.style.borderRadius = "5px";
    eventDiv.style.color = "white";

    let eventTime = document.createElement("p");
    eventTime.innerHTML = `Время: ${event.time}`;

    let eventText = document.createElement("p");
    eventText.innerHTML = `Событие: ${event.text}`;

    let eventDate = document.createElement("p");
    eventDate.innerHTML = `Дата: ${event.date}`;

    eventDiv.appendChild(eventTime);
    eventDiv.appendChild(eventDate);
    eventDiv.appendChild(eventText);

    eventsContainer.appendChild(eventDiv);
  });
};


button1.addEventListener("click", function () {
  let inputValue = eventP.value;
  if (!inputValue) return;
  let eventDate = calendar.value;
  let eventTime = time1.value;

  if (!eventDate || !eventTime) {
    alert("Пожалуйста, выберите дату и время.");
    return;
  }

  let newEvent = {
    date: eventDate,
    time: eventTime,
    text: inputValue,
  };

  events.push(newEvent);
  sortEvents(); 
  updateWeekContainer();

  eventP.value = "";
  calendar.value = "";
  time1.value = "";
});

document.addEventListener("click", function (event) {
  if (event.target.tagName === "HTML" || event.target.tagName === "BODY") {
    popUp.style.display = "none";
  }
});
