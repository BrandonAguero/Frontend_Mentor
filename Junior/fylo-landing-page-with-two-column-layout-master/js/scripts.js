const btnSubmitOne = document.querySelector(".btn_submit-one");
const wrongEmailOne = document.querySelector(".wrong_email-one");
const inputTextOne = document.querySelector(".input_text-one");
const btnSubmitTwo = document.querySelector(".btn_submit-two");
const wrongEmailTwo = document.querySelector(".wrong_email-two");
const inputTextTwo = document.querySelector(".input_text-two");

console.log({
    btnSubmitTwo,
    wrongEmailTwo,
    inputTextTwo
})

btnSubmitOne.addEventListener("click", onClickButtonOne);
btnSubmitTwo.addEventListener("click", onClickButtonTwo);

function onClickButtonOne(event) {
    if (inputTextOne.value.endsWith("@gmail.com") !== true) {
        event.preventDefault();
        wrongEmailOne.innerText = "Please check your email";
        inputTextOne.classList.add("inactive");
    }
}
function onClickButtonTwo(event) {
    if (inputTextTwo.value.endsWith("@gmail.com") !== true) {
        event.preventDefault();
        wrongEmailTwo.innerText = "Please check your email";
        inputTextTwo.classList.add("inactive");
    }
}