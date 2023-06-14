function wordle(guess, target) {

  const guessCharacters = guess.split('');
  const targetCharacters = target.split('');

  let result = "";

  guessCharacters.forEach((currentGuessCharacter, i) => {
      
    const exactMatch = targetCharacters[i] === currentGuessCharacter;
  
    if (exactMatch) {
      result += "2";
    } else if (target.includes(currentGuessCharacter)) {
      result += "1";
    } else {
      result += "0";
    }
  });

  return result;
}

module.exports = wordle;
