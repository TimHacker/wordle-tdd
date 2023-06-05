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
    
    if (match) {
      result += "2";
    } else {
      result += "0";
    }
  }



  return result;
}

module.exports = wordle;
