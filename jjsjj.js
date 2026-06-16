document.write("hello<br>");

const first = document.getElementById("s28");

function example() {
    console.log("Button Clicked");
    first.style.color = "red";
}

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    output.insertHTML= input.value;
});

const second=document.createElement("p");
second.textContent="New Paragraph"
document.body.appendChild(second)
second.remove()