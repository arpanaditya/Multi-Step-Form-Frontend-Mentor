// circle = document.querySelector('.circle');
// active = document.querySelector('.active');
// circle.classList.add('') //adds active class

const btn = document.querySelector(".next-step");
const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");

const validate = () => {
    input.forEach((input) => {
        if (input.value === "") {
            error.forEach((err) => {
                err.style.display = "block";
                input.style.border = "2px solid red";
            })
        }
    })
}

btn.addEventListener("click", validate);
