function LetterChanges(str) {
    let strArr = str.split('');
    for(let i = 0; i < str.length; i++) {
        switch(strArr[i]) {
            case 'z': 
                strArr[i] = 'a';
                break;
            case 'Z':
                strArr[i] = 'A';
                break;
            default:
                strArr[i] = strArr[i].replace(/[a-z]/gi, function(c) {
                        return String.fromCharCode(1 + c.charCodeAt(0));
                    }
                );
        }

        switch (strArr[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                strArr[i] = strArr[i].toUpperCase();
        }
    }

    return strArr.join('');
}

console.log(LetterChanges("hello*3"));