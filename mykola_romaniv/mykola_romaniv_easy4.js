function LetterCapitalize(str) {
    let wordsList = str.split(' ');
    for (let i = 0; i < wordsList.length; i++) {
        wordsList[i] = wordsList[i].charAt(0).toUpperCase() + wordsList[i].substring(1);
    }
    return wordsList.join(' ');
}

console.log(LetterCapitalize('asd hfhf ok'));