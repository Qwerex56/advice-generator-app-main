const ADVICE_GENERATOR_URL = "https://api.adviceslip.com/advice";
const ADVICE_RANDOM        = document.querySelector(".advice-generator__randomize-advice");
const ADVICE_ID_ELEM       = document.querySelector(".advice-generator__advice-id--id-num");
const ADVICE_ELEM          = document.querySelector(".advice-generator__advice");

ADVICE_RANDOM.addEventListener('click', getAdvice);

async function getAdvice() {
  const ADVICE_RESPONSE = fetch(ADVICE_GENERATOR_URL);

  const ADVICE_DATA = (await ADVICE_RESPONSE).json();
  ADVICE_DATA.then(
    (value) => {
      console.log(value.slip
        );
      ADVICE_ID_ELEM.innerText = '#' + value.slip.id;
      ADVICE_ELEM.innerText = '\"' + value.slip.advice + '\"';
    }
  );
}

getAdvice();