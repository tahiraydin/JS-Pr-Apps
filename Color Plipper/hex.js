const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener("click", function (){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor =  randomNumber;
    color.textContent =randomNumber;
    });

function getRandomNumber() {
    let hexNumber = "#";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length);
        hexNumber += hex[randomNumber];
    }
    return hexNumber;
}
