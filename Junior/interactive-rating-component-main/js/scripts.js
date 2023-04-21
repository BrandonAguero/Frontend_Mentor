const circles = document.querySelectorAll(".ul__li");
const primaryButton = document.querySelector(".main__article--button");
const firstCard = document.querySelector(".main__article--first");
const secondCard = document.querySelector(".main__article--second");
const mainArticleSpan = document.querySelector(".main__article--span");

// circles.forEach((li) => {
//     li.addEventListener("click", (e) => {
// /*         circles.forEach((li) => {
//             if (!li.classList.contains("activate")) {
//                 li.classList.remove("activate");
//             }
//         }) */ // Este selecciona a más de uno y puede eliminarlo también
//         let counter = 0;
//         circles.forEach((li) => {
//             if (li.classList.contains("activate")) {
//                 li.classList.remove("activate");
//             }
//         })   // Este solo selecciona a uno pero no puede eliminarlo.
//         e.target.classList.toggle("activate");
//         counter++;
//     })
// })

/* primaryButton.addEventListener("click", () => {
    firstCard.classList.add("inactivate");
    secondCard.classList.remove("inactivate")
}); */

circles.forEach((li) => {
    li.addEventListener("click", clickCircleOpinion);
})

primaryButton.addEventListener("click", clickPrimaryButton);

function clickCircleOpinion(e) {
    circles.forEach((li) => {
        if (li.classList.contains("activate")) {
            li.classList.remove("activate");
        };
    });
    e.target.classList.toggle("activate");
};

function clickPrimaryButton() {
    let counter = 0;
    let textContent;
    circles.forEach((li) => {
        if (li.classList.contains("activate")) {
            textContent = li.textContent;
            counter++;
        };
    })
    if (counter === 1) {
        firstCard.classList.add("inactivate");
        secondCard.classList.remove("inactivate");
    };

    mainArticleSpan.innerText = `You selected ${textContent} out of 5`;
};

