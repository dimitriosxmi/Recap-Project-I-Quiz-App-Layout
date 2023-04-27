function updateQuestionsViewList() {
  //   document.querySelectorAll('[data-js="question"]').forEach((question) => {
  //     document
  //       .querySelectorAll('[data-js="bookmark-button"]')
  //       .forEach((button) => {
  //         graphicsElement = button.firstElementChild;
  //         if (
  //           graphicsElement.classList.contains(
  //             "question-card__bookmark-icon--unselected"
  //           ) &&
  //           !question.classList.contains("question-card--hide")
  //         ) {
  //           console.log(!question.classList.contains("question-card--hide"));
  //           console.log(
  //             graphicsElement.classList.contains(
  //               "question-card__bookmark-icon--unselected"
  //             )
  //           );
  //           question.classList.add("question-card--hide");
  //           console.log(graphicsElement);
  //         } else if (
  //           graphicsElement.classList.contains(
  //             "question-card__bookmark-icon--selected"
  //           ) &&
  //           question.classList.contains("question-card__bookmark-icon--hide")
  //         ) {
  //           question.classList.remove("question-card--hide");
  //           console.log("2 hi");
  //         }
  //       });
  //   });
}

function toggleBookmark() {
  document.querySelectorAll('[data-js="bookmark-button"]').forEach((button) => {
    button.addEventListener("click", () => {
      const graphicsElement = button.firstElementChild;
      if (
        graphicsElement.classList.contains(
          "question-card__bookmark-icon--selected"
        )
      ) {
        graphicsElement.classList.remove(
          "question-card__bookmark-icon--selected"
        );
        graphicsElement.classList.add(
          "question-card__bookmark-icon--unselected"
        );
      } else if (
        graphicsElement.classList.contains(
          "question-card__bookmark-icon--unselected"
        )
      ) {
        graphicsElement.classList.remove(
          "question-card__bookmark-icon--unselected"
        );
        graphicsElement.classList.add("question-card__bookmark-icon--selected");
      }
    });
  });
  updateQuestionsViewList();
}

toggleBookmark();
