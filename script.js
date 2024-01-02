document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded!");
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key != "couter") {
            let li = document.createElement("li");
            li.innerHTML = localStorage.getItem(key);
            noteList.appendChild(li);

            li.addEventListener("click", (event) => {
                li.classList.toggle("checked");
                console.log(event.target);
            });
        }
    }
});

let couter = parseInt(localStorage.getItem("couter"));

const btn = document.getElementById("btn");
const input = document.getElementById("note");
const form = document.getElementById("note-form");
const noteList = document.getElementById("notes");
const clear = document.getElementById("clear");

btn.addEventListener("click", (event) => {
    couter += 1;
    event.preventDefault();
    value = input.value;
    input.value = "";

    const li = document.createElement("li");
    let d = new Date();
    let date = d.toUTCString();
    li.innerHTML = `<label><input type="checkbox" class="check" /> ${value}</label><span class="date">${date}</span>`;
    noteList.appendChild(li);
    localStorage.setItem("couter", couter);
    localStorage.setItem(couter, li.innerHTML);

    li.addEventListener("click", (event) => {
        li.classList.toggle("checked");
        console.log(event.target);
    });
});

input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && input.value) {
        btn.click();
    }
});

clear.addEventListener("click", (event) => {
    event.preventDefault();
    noteList.innerHTML = "";

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key != "couter") {
            localStorage.removeItem(key);
        }
    }
    localStorage.setItem("couter", 0);
    couter = 0;
});
