const data = {
    cat1: [
        "Cat1 Item A",
        "Cat1 Item B",
        "Cat1 Item C"
    ],
    cat2: [
        "Cat2 Item A",
        "Cat2 Item B"
    ],
    cat3: [
        "Cat3 Item A",
        "Cat3 Item B"
    ]
};

const backgrounds = {
    cat1: "images/bg1.jpg",
    cat2: "images/bg2.jpg",
    cat3: "images/bg3.jpg"
};

let currentCategory = null;

function openCategory(cat) {
    currentCategory = cat;

    document.getElementById("home").classList.add("hidden");
    const catScreen = document.getElementById("category");

    catScreen.classList.remove("hidden");
    catScreen.style.backgroundImage =
        `url(${backgrounds[cat]})`;

    newItem();
}

function newItem() {
    const list = data[currentCategory];
    const item = list[Math.floor(Math.random() * list.length)];

    document.getElementById("cardText").textContent = item;
}

function goHome() {
    document.getElementById("category").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
