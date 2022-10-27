let ul = document.querySelector("#ul");

let list = JSON.parse(localStorage.getItem("list")) || [];

list.map(item => ul.innerHTML += `<li>${item}</li>`);