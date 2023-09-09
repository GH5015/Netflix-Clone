const firstbutton = document.getElementById('firstb');
const firstdiv = document.getElementById('first');
const firstspan = document.querySelector(".material-symbols-outlined.f");

const secondbutton = document.getElementById('secondb');
const seconddiv = document.getElementById('second');
const secondspan = document.querySelector(".material-symbols-outlined.s");

const thirdbutton = document.getElementById('thirdb');
const thirddiv = document.getElementById('third');
const thirdspan = document.querySelector(".material-symbols-outlined.t");

const fourthbutton = document.getElementById('fourthb');
const fourthdiv = document.getElementById('fourth');
const fourthspan = document.querySelector(".material-symbols-outlined.fo");

const fifthbutton = document.getElementById('fifthb');
const fifthdiv = document.getElementById('fifth');
const fifthspan = document.querySelector(".material-symbols-outlined.fi");

const sixthbutton = document.getElementById('sixthb');
const sixthdiv = document.getElementById('sixth');
const sixthspan = document.querySelector(".material-symbols-outlined.si");

firstbutton.addEventListener('click', () => {
    if (firstdiv.style.display === 'none') {
        firstdiv.style.display = 'block';
    } else {
        firstdiv.style.display = 'none';
    }
    if (div.style.display === 'block') {
        div.style.display = 'none'
    }
    if (firstspan.textContent === "add"){
        firstspan.textContent = "remove";
    }
    else{
        firstspan.textContent = "add";
    }
})

secondbutton.addEventListener('click', () => {
    if (seconddiv.style.display === 'none') {
        seconddiv.style.display = 'block';
    } else {
        seconddiv.style.display = 'none';
    }

    if (secondspan.textContent === "add"){
        secondspan.textContent = "remove";
    }
    else{
        secondspan.textContent = "add";
    }
})

thirdbutton.addEventListener('click', () => {
    if (thirddiv.style.display === 'none') {
        thirddiv.style.display = 'block';
    } else {
        thirddiv.style.display = 'none';
    }
    
    if (thirdspan.textContent === "add"){
        thirdspan.textContent = "remove";
    }
    else{
        thirdspan.textContent = "add";
    }
})

fourthbutton.addEventListener('click', () => {
    if (fourthdiv.style.display === 'none') {
        fourthdiv.style.display = 'block';
    } else {
        fourthdiv.style.display = 'none';
    }
    
    if (fourthspan.textContent === "add"){
        fourthspan.textContent = "remove";
    }
    else{
        fourthspan.textContent = "add";
    }
})

fifthbutton.addEventListener('click', () => {
    if (fifthdiv.style.display === 'none') {
        fifthdiv.style.display = 'block';
    } else {
        fifthdiv.style.display = 'none';
    }
    
    if (fifthspan.textContent === "add"){
        fifthspan.textContent = "remove";
    }
    else{
        fifthspan.textContent = "add";
    }
})

sixthbutton.addEventListener('click', () => {
    if (sixthdiv.style.display === 'none') {
        sixthdiv.style.display = 'block';
    } else {
        sixthdiv.style.display = 'none';
    }
    
    if (sixthspan.textContent === "add"){
        sixthspan.textContent = "remove";
    }
    else{
        sixthspan.textContent = "add";
    }
})