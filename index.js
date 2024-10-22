const question = document.querySelector('.question');
question.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.";
const userAnswer = prompt('Vaše odpověď:');
const answerText = document.querySelector('.answer__text');
answerText.textContent = userAnswer;
const answerElement = document.querySelector('.answer');
if (userAnswer.toLowerCase() === 'bell') {
    answerElement.classList.add('answer--correct');
    answerElement.classList.remove('answer--wrong');
  } else {
    answerElement.classList.add('answer--wrong');
    answerElement.classList.remove('answer--correct');
  }