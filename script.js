const formulaireQuiz = document.getElementById("quiz-form");
const inputsReponses = Array.from(document.querySelectorAll(".answer"));
const elementsQuestions = document.querySelectorAll(".question-item");
const boiteAlerte = document.querySelector("#alert");
const alerteNul= document.querySelector("#alertNullite");

formulaireQuiz.addEventListener("submit", gererSoumissionFormulaire);


function gererSoumissionFormulaire(soumission) {
  soumission.preventDefault();

  elementsQuestions.forEach(elementQuestion => {
    elementQuestion.classList.add("incorrect");
    elementQuestion.classList.remove("correct");
  });


  const reponsesSelectionnees = inputsReponses.filter(reponse => reponse.checked);


  reponsesSelectionnees.forEach(reponse => {
    const estCorrecte = reponse.value === "true";
    const elementQuestion = reponse.closest(".question-item");

    if (estCorrecte) {
      elementQuestion.classList.add("correct");
      elementQuestion.classList.remove("incorrect");
    } else {
      elementQuestion.classList.add("incorrect");
      elementQuestion.classList.remove("correct");
    }

    const toutesCorrectes = reponsesSelectionnees.every(reponse => reponse.value === "true");
    const toutesFausses = reponsesSelectionnees.every(reponse => reponse.value === "false");
    const toutesRepondues = reponsesSelectionnees.length === elementsQuestions.length;

    if (toutesCorrectes && toutesRepondues) {
      boiteAlerte.classList.add("active");
      setTimeout(() => {
        boiteAlerte.classList.remove("active");
      }, 1000);
    }
    if (toutesFausses && toutesRepondues) {
      alerteNul.classList.add("active");
      setTimeout(() => {
        alerteNul.classList.remove("active");
      }, 1000);
    }
  });
};
