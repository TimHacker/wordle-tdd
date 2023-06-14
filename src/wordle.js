function wordle(guess, target) {

  const guessCharacters = guess.split('');
  const targetCharacters = target.split('');

  let result = "";

  console.log(guessCharacters, targetCharacters)


  // Refactor!
  // or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  // https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
  for (let i = 0; i < guessCharacters.length; i++) {
    let match = targetCharacters[i] === guessCharacters[i];

    // check if target contains current guess character
    // if so we add 1
    
    if (match) {
      result += "2";
    } else if (target.includes(guessCharacters[i])) {
      result += "1";
    }
      else {
      result += "0";
    }
  }
  



  return result;
}

module.exports = wordle;
