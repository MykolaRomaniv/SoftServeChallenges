function CheckNums(num1, num2) {
    if (num1 === num2) {
        return -1;
    } else {
        return num1 < num2 ? true : false;
    }
}

console.log(CheckNums(122, 122));