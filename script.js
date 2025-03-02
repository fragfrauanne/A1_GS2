const tasks = [
    { question: "Walter leb___ in München.", answer: "lebt" },
    { question: "Entschuldigung, wie heiß___ Sie?", answer: "heißen" },
    { question: "Meine Schwester heiß___ Sofia.", answer: "heißt" },
    { question: "Ich wohn___ in Deutschland.", answer: "wohne" },
    { question: "Wo wohn___ du?", answer: "wohnst" },
    { question: "Wo wohn___ ihr?", answer: "wohnt" },
    { question: "Komm___ ihr aus Italien?", answer: "kommt" },
    { question: "Ich hab___ zwei Kinder.", answer: "habe" },
    { question: "Sprech___ ihr Englisch?", answer: "sprecht" },
    { question: "Lara und Tim leb___ in München.", answer: "leben" },
    { question: "Walter und Luise hab___ eine Tochter.", answer: "haben" },
    { question: "Lara komm___ aus Polen.", answer: "kommt" },
    { question: "Woher komm___ du?", answer: "kommst" },
    { question: "Sprich___ du Arabisch?", answer: "sprichst" },
    { question: "Wie heiß___ ihr?", answer: "heißt" },
    { question: "Wir leb___ in Hamburg.", answer: "leben" },
    { question: "Hab___ Sie Kinder?", answer: "haben" },
    { question: "Ich sprech___ Deutsch.", answer: "spreche" }
];

let wrongCards = [];
const container = document.getElementById("cardsContainer");
const fireworks = document.getElementById("fireworks");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCards(tasks) {
    container.innerHTML = "";
    wrongCards = [];

    shuffle(tasks).forEach(task => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">${task.question}</div>
                <div class="card-back">
                    <p>${task.answer}</p>
                    <div>
                        <button class="correctBtn">✅</button>
                        <button class="wrongBtn">❌</button>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            if (!card.classList.contains("flipped")) {
                card.classList.add("flipped");
            }
        });

        card.querySelector(".correctBtn").onclick = () => {
            card.remove();
            checkEnd();
        };

        card.querySelector(".wrongBtn").onclick = () => {
            wrongCards.push(task);
            setTimeout(() => card.classList.remove("flipped"), 1000);
        };

        container.appendChild(card);
    });
}

function checkEnd() {
    if (container.children.length === 0) {
        if (wrongCards.length === 0) {
            fireworks.style.display = "block";
            setTimeout(() => fireworks.style.display = "none", 4000);
        } else {
            createCards(wrongCards);
        }
    }
}

createCards(tasks);