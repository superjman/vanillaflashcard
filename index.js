//form
const questionForm = document.querySelector(".questionForm");
const flashcard = document.querySelector(".cards");
//buttons
const exitBtn = document.querySelector(".exitBtn");
const displayFormBtn = document.querySelector(".displayFormBtn");
const saveBtn = document.querySelector(".saveBtn");
const displayAnswerBtn = document.querySelector(".displayAnswerBtn");
const editBtn = document.querySelector(".editBtn");
const deleteBtn = document.querySelector(".deleteBtn");
//form textfields
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
//flashcard texts
let qText = document.querySelector(".questionText");
let aText = document.querySelector(".answerText");
//arrays
const Array = []
let count = 0;

close = () => {
  questionForm.style.display = "none";
  question.value = "";
  answer.value = "";
}

open = () => questionForm.style.display = "flex";

save = () => {
  qText.innerHTML = question.value;
  aText.innerHTML = answer.value;
  aText.style.display = "none";
  flashcard.style.display = "flex";
  question.value = "";
  answer.value = "";
}

displayText = () => {
  if(aText.style.display === "none"){
    aText.style.display = "block";
  }else if(aText.style.display === "block"){
    aText.style.display = "none";
  }
}

deleteCard = () => {
  flashcard.style.display = "none";
}

edit = () => {
  flashcard.style.display = "none";
  question.value = qText.innerHTML;
  answer.value = aText.innerHTML;
}

exitBtn.addEventListener("click",close);
displayFormBtn.addEventListener("click",open);
saveBtn.addEventListener("click",save);
displayAnswerBtn.addEventListener("click",displayText);
editBtn.addEventListener("click",edit);
deleteBtn.addEventListener("click",deleteCard);
