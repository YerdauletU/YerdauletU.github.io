function element(item) {
    return document.querySelector(`${item}`);
}

function elements(item) {
    return document.querySelectorAll(`${item}`);
}

let form = element("#form");
let input = element("#text");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //отменяем отправку данных на сервер

    let list = JSON.parse(localStorage.getItem("list")) || [];

    if (input.value !== "") {
        list.push(input.value);
    }
    
    localStorage.setItem("list", JSON.stringify(list));

    input.value = "";
});
