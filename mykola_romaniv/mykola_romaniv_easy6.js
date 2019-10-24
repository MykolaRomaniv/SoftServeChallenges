//works only for latin symbols
function SimpleSymbols(str) {
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if (i == 0 || str[i - 1] != str[i + 1]) {
                return false;
            } else {
                return true;
            }
        }
    }
}

console.log(SimpleSymbols('+d+=3=+s+'));