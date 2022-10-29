function element(item) {
    return document.querySelector(`${item}`);
}

function elements(item) {
    return document.querySelectorAll(`${item}`);
}

// let div = element("#div");
// let del_all_btn = element("#del_all_btn");

function draw_list() {

    let list = JSON.parse(localStorage.getItem("list")) || [];

    let div = element("#div");
    
    div.innerHTML = "";

    // list.map(item => div.innerHTML += `
    //     <div class="item_div">
    //         <p class="item_name" style="display: inline-block; margin-right: 5px;">${item}</p>
    //         <button class="del_btn">Delete</button>
    //     </div>
    // `);

    for(let i = 0; i < list.length; i++) {
        div.innerHTML +=`
            <div class="item_div">
                <p class="item_name" style="display: inline-block; margin-right: 5px;">${list[i]}</p>
                <button class="del_btn" onclick="del_el(${i})">Delete</button>
            </div>
        `;

        if (i === list.length - 1) {
            div.innerHTML += `
                <button id="del_all_btn" onclick="del_all_el()" style="width: 100px;">Delete All</button>
            `;
        }
    }
}

function del_el(num) {
    let list = JSON.parse(localStorage.getItem("list")) || [];
    list.splice(num, 1);
    localStorage.setItem("list", JSON.stringify(list));
    draw_list();
}

function del_all_el() {
    localStorage.clear();
    draw_list();   
}

draw_list();

// del_all_btn.addEventListener("click", () => {
//     localStorage.clear();
//     draw_list();
// });

// let item_div = elements(".item_div");
// let item_name = elements(".item_name");
// let del_btn = elements(".del_btn");

// for(let i = 0; i < item_div.length; i++) {
//     item_div[i].children[1].addEventListener("click", () => {
//         let list = JSON.parse(localStorage.getItem("list")) || [];
//         list.splice(i, 1);
//         localStorage.setItem("list", JSON.stringify(list));
//         // console.log(list);
//         draw_list();
//     })
// }
// draw_list();
