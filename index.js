document.querySelectorAll('[data-js="answer-button"]').forEach((button) => {
  button.addEventListener("click", () => {
    const answerParagraph = button.parentElement.nextElementSibling;
    answerParagraph.classList.toggle("question-card__answer-hide");
  });
});
