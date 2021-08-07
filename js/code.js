const decrBtn = document.querySelector(".buttons button:first-child");
const resetBtn = document.querySelector(".buttons button:nth-child(2)");
const incrBtn = document.querySelector(".buttons button:last-child");
const number = document.querySelector(".main h2");
let nr = 0;



incrBtn.addEventListener('click', e => {
    nr = number.textContent;
    nr++;
    showNr(nr);
    console.log(nr);
})

decrBtn.addEventListener('mousedown', e => {
        nr = number.textContent;
        nr--;
        showNr(nr);
        console.log(nr);
})

resetBtn.addEventListener('click', e => {
    nr = 0;
    showNr(nr);
    console.log(nr);
})


function showNr(nr){
    number.textContent = nr;
    if(nr > 0) 
        number.style.color = "green";
    else if (nr < 0)
        number.style.color = "red";
    else 
        number.style.color = "#14213d";

        pop();
}

function pop() {
    number.style.transform = "scale(0.90)";
    setTimeout(() => {
        number.style.transform = "scale(1)";
    }, 80);
}