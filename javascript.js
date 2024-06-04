const form = document.getElementById("form")
const input = document.getElementById("task")
const task = document.getElementById("uzduotys")

function istrinti(event){
event.srcElement.parentElement.remove();

}


form.addEventListener('submit', (event) => {
event.preventDefault();

const Elementas = document.createElement('li');
Elementas.innerHTML = input .value

const trintiMygtukas = document.createElement('button');
trintiMygtukas.innerText = 'trint';
trintiMygtukas.addEventListener('click',istrinti)

const check = document.createElement('input')
check.type = 'checkbox';



Elementas.append(check)
Elementas.append(trintiMygtukas)
task.appendChild(Elementas)
});







