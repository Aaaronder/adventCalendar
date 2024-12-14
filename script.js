const calendarContainer = document.querySelector(".calendar");

const calendarDays = 24;
let currentDoor = 1;

const openDoor = (path, event, doorNumber) => {
    if (doorNumber === currentDoor) {
        event.target.parentNode.style.backgroundImage = `url(${path})`;
        event.target.style.opacity = "0";
        event.target.style.backgroundColor = "#521751";
        currentDoor++;
    }
};

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoor.appendChild(calendarDoorText);

        const doorNumber = i + 1; // Az ajtó száma
        let coursePath = `./img/${doorNumber}.png`;

        calendarDoorText.addEventListener("click", (event) =>
            openDoor(coursePath, event, doorNumber)
        );
    }
};

addEventListener("DOMContentLoaded", createCalendar);
