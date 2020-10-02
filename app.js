const englishAlphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  ' ',
]
const morseAlphabet = [
  '•—',
  '—•••',
  '—•—•',
  '—••',
  '•',
  '••—•',
  '——•',
  '••••',
  '••',
  '•———',
  '—•—',
  '•—••',
  '——',
  '—•',
  '———',
  '•——•',
  '——•—',
  '•—•',
  '•••',
  '—',
  '••—',
  '•••—',
  '•——',
  '—••—',
  '—•——',
  '——••',
  '   ',
]
// ---- GET HTML ELEMENTS ---- //
const boxEnglish = document.querySelector('.input-english');
const boxMorse = document.querySelector('.input-morse');
const buttonFromEnglish = document.querySelector('.btn-from-english');
const buttonFromMorse = document.querySelector('.btn-from-morse');
const buttonReset = document.querySelector('.btn-reset');

// ---- BUTTON FUNCTIONS ---- //
const englishToMorse = () => {
  let arrayOfCharacters = boxEnglish.value.toLowerCase().split('');
  newArray = arrayOfCharacters.map(character => englishAlphabet.indexOf(character));
  morseArray = newArray.map(index => morseAlphabet[index])
  combined = morseArray.join();
  boxMorse.value = combined;
};

const morseToEnglish = () => {
  let arrayOfCharacters = boxMorse.value.split(',');
  newArray = arrayOfCharacters.map(character => morseAlphabet.indexOf(character));
  englishArray = newArray.map(index => englishAlphabet[index])
  combined = englishArray.join();
  noCommas = combined.replace(/,/gi,"");
  boxEnglish.value = noCommas;
}
const reset = () => {
  boxEnglish.value = "";
  boxMorse.value = "";
}

// ---- EVENT LISTENERS ---- //
buttonFromEnglish.addEventListener(('click'), () => englishToMorse());
buttonFromMorse.addEventListener(('click'), () => morseToEnglish());
buttonReset.addEventListener(('click'), () => reset());
