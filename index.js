const answerButton1 = document.querySelector('[data-js="answer-button-1"]');
const answer1 = document.querySelector('[data-js="answer-1"]');
const answerButton2 = document.querySelector('[data-js="answer-button-2"]');
const answer2 = document.querySelector('[data-js="answer-2"]');
// const answerButton3 = document.querySelector('[data-js="answer-button-3"]');
// const answer3 = document.querySelector('[data-js="answer-3"]');
// const answerButton4 = document.querySelector('[data-js="answer-button-4"]');
// const answer4 = document.querySelector('[data-js="answer-4"]');
// const answerButton5 = document.querySelector('[data-js="answer-button-5"]');
// const answer5 = document.querySelector('[data-js="answer-5"]');

answerButton1.addEventListener("click", () => {
  answer1.classList.toggle("question-card__answer-hide");
});
answerButton2.addEventListener("click", () => {
  answer2.classList.toggle("question-card__answer-hide");
});
// answerButton3.addEventListener("clicks", () => {
//     answer1.classList.toggle("question-card__answer-hide")
// });
// answerButton4.addEventListener("clicks", () => {
//     answer1.classList.toggle("question-card__answer-hide")
// });
// answerButton5.addEventListener("clicks", () => {
//     answer1.classList.toggle("question-card__answer-hide")
// });
