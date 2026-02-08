emailjs.init("vm2c1pIjVYH6J4WUQ");



const data = {
    cat1: [
        "Never have I ever...\nghosted somebody",
        "Never have I ever...\nwatched the show 'I Kissed A Girl'",
        "Never have I ever...\nwatched a queer dating show",
        "Never have I ever...\nfallen in love with a fictional character",
        "Never have I ever...\nquestioned my sexuality",
        "Never have I ever...\nquestioned my gender identity",
        "Never have I ever...\nfallen in love with a straight person",
        "Never have I ever...\nfound out I was queer by watching queer media",
        "Never have I ever...\ntried to look queerer to get people to notice",
        "Never have I ever...\nbeen to pride",
        "Never have I ever...\nbeen to a queer concert",
        "Never have I ever...\nhad my partner been mistaken for a friend or a sibling",
        "Never have I ever...\nfallen in love with my best friend",
        "Never have I ever...\nbeen to a queer party",
        "Never have I ever...\ndated someone who lived more than 100km away from me",
        "Never have I ever...\ndated somebody who was still in the closet",
        "This or That?\nSilver or Gold?",
        "This or That?\nCats or Dogs?",
        "This or That?\nQueer Party or cozy night at home?",
        "This or That?\nDrag Race or Queer Eye?",
        "This or That?\nPride or Carnival?",
        "This or That?\nRock or Pop?",
        "This or That?\nLong or short fingernails?",
        "This or That?\nQueer books or movies/series?",
        "This or That?\nVeggie/Vegan or omnivore?",
        "This or That?\nBeer or cocktail?",
        "This or That?\nRed or white wine?",
        "This or That?\nSummer or winter?",
        "Never have I ever...\nstayed up all night texting someone I liked",

    ],
    cat2: [
        "Never have I ever...hooked up with someone twice my age",
        "Never have I ever...been on a date with a person with mutual exes",
        "Never have I ever...taken multiple different dates to the same spot",
        "Never have I ever...had a date that lasted more than 12 hours",
        "Never have I ever...moved in with a partner within less than 3 months of dating",
        "Never have I ever...been best friends with my ex",
        "Never have I ever...had a spicy dream with a stranger",
        "Never have I ever...had a crush on my teacher/professor",
        "Never have I ever...kissed a girl",
        "Never have I ever...been told I was a good kisser",
        "Never have I ever...drunk texted an ex",
        "Never have I ever...thought about dating non-monogamous",
        "Never have I ever...flirted with somebody who was taken",
        "Never have I ever...made out with a stranger",
        "Never have I ever...had a crush on somebody at this event",
        "Never have I ever...been to a kinky party",
        "Never have I ever...dated somebody from this event",
        "This or That?\nFrom friends to dating or love at first sight?",
        "This or That?\nLatex or mesh?",
        "Never have I ever...made the first move",
        "Never have I ever...kissed more than one person in the same night",
        "Never have I ever...had a 'we said we wouldn't, but we did' moment",
        "Never have I ever...tried to make someone jealous on purpose",
        "Never have I ever...had a situationship",
        "Never have I ever...mentally spiraled after a hookup",
        "Never have I ever...gone back to an ex",
        "Never have I ever...had a crush on someone else while in a relationship",
        "Never have I ever...had crushes on multiple people at the same time",
        "Never have I ever...regretted a hookup",
        "This or That?\nFriends to lovers or enemies to lovers?",
        "This or That?\nSlow burn or instant chemistry?",
        "This or That?\nSneaky glances or intense eye contact?",
        "This or That?\nFlirty teasing or direct moves on a first date?",
        "This or That?\nBeen chased or doing the chasing?",
        "This or That?\nLust or feelings first?",
        "This or That?\nBreak up sex or make up sex?",
        "This or That?\nHouse party or club?",
        "This or That?\nAftercare or going home directly?",
    ],
    cat3: [
        "Never have I ever...sexted",
        "Never have I ever...sent nudes",
        "Never have I ever...given sex advice",
        "Never have I ever...slept with a person on the first date",
        "Never have I ever...been walked in while having sex",
        "Never have I ever...hooked up with an ex",
        "Never have I ever...hooked up with a friend",
        "Never have I ever...hooked up with somebody while travelling",
        "Never have I ever...given or received a lap dance",
        "Never have I ever...given or received a hickey",
        "Never have I ever...had sex in a club",
        "Never have I ever...had sex on the beach",
        "Never have I ever...scissored",
        "Never have I ever...used the same sex toys with a different partner",
        "Never have I ever...had a threesome",
        "Never have I ever...had an orgy",
        "Never have I ever...cheated on my partner",
        "Never have I ever...lied during this game",
        "This or That?\nTop or bottom?",
        "This or That?\nKinky or vanilla?",
        "This or That?\nLight on or out?",
        "This or That?\nGiving or receiving oral sex?",
        "This or That?\nStrap on or fingers/body?",
        "This or That?\nLapdance or pole dance?",
        "This or That?\nAss or boobs?",
        "This or That?\nBDSM or puppy play?",
        "This or That?\nFirst time with someone new or ex rebound?",
        "This or That?\nDirty talk or moaning?",
        "This or That?\nHair pulling or neck kisses?",
        "This or That?\nBlindfold or wax candle?",
        "This or That?\nFriends with benefits or One-Night-Stand?",
        "Never have I ever...lied in this game",
        "Never have I ever...had sex in a car",
        "Never have I ever...had phone/video sex",
        "This or That?\nSextoys or 'manual'?"
    ]
};

const usedItems = {
    cat1: new Set(),
    cat2: new Set(),
    cat3: new Set()
};


const backgrounds = {
    cat1: "images/39.png",
    cat2: "images/41.png",
    cat3: "images/45.png",
    feedback: "images/43.png"
};

function hideAllScreens() {
    document.querySelectorAll(".screen")
        .forEach(s => s.classList.add("hidden"));
}


let currentCategory = null;

window.openCategory = function(cat) {

    currentCategory = cat;

    usedItems[cat] = new Set();

    hideAllScreens();

    if (cat === "feedback") {

        document
            .getElementById("feedback")
            .classList.remove("hidden");

        return;
    }

    const catScreen =
        document.getElementById("category");

    catScreen.classList.remove("hidden");

    catScreen.style.backgroundImage =
        `url(${backgrounds[cat]})`;

    newItem();
};

window.newItem = function() {
    const list = data[currentCategory];

    if (usedItems[currentCategory].size === list.length) {
        usedItems[currentCategory] = new Set();
    }

    let item;

    do {
        item = list[Math.floor(Math.random() * list.length)];
    } while (usedItems[currentCategory].has(item));

    usedItems[currentCategory].add(item);

    const htmlText = item.replace(/\n/g, "<br>");
    document.getElementById("cardText").innerHTML = htmlText;
};


window.sendFeedback = function() {

    const message =
        document.getElementById("feedbackText").value;

    const status =
        document.getElementById("status");

    if (!message.trim()) {
        status.innerText = "Bitte Feedback eingeben!";
        return;
    }

    emailjs.send(
        "service_gee5esf",
        "template_79siiqp",
        { message: message }
    )
        .then(() => {
            status.innerText = "✅ Feedback gesendet!";
            document.getElementById("feedbackText").value = "";
        })
        .catch(() => {
            status.innerText = "❌ Fehler beim Senden!";
        });
};


window.goHome = function() {
    hideAllScreens();
    document.getElementById("home")
        .classList.remove("hidden");
};




