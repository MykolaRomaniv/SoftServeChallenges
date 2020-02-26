function QuestionsMarks(str) {
    let firstNum = 0, secondNum = 0;
    let qMarks = 0;
    let output = false;
    for (let c of str) {
        if (+c) {
            if (firstNum === 0) {
                firstNum = +c;
            } else if (qMarks !== 3) {
                qMarks = secondNum = firstNum = 0;
                continue;
            } else if (secondNum === 0) {
                secondNum = +c;
                if ((firstNum + secondNum) !== 10) {
                    qMarks = secondNum = firstNum = 0;
                    continue;
                } else {
                    output = true;
                    qMarks = secondNum = firstNum = 0;
                }
            }
        } else if (c === '?' && firstNum !== 0) {
            qMarks++;
        }
    }
    return output;
}

console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));