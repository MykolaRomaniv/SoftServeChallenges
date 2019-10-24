function FirstFactorial(num) {
    if (num > 1) {
        num = num * FirstFactorial(num - 1); 
    } 
    return num;
}

console.log(FirstFactorial(4));