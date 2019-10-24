function LongestWord(sen) {
    let wordList = sen.split(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g);
    let maxI = 0;
    let maxLen = 0;
    for (let i in wordList) {
        if(wordList[i].length > maxLen) {
            maxLen = wordList[i].length;
            maxI = i;
        }
    }
    console.log(wordList[maxI]);
}