function stringVerify(string1, string2) {
    let isConteined = true;
    for (let index = 0; index < string1.length; index++) {
        let characterString1 = string1.charAt(index).toLowerCase();
        for (let index = 0; index < string2.length; index++) {
            let characterString2 = string2.charAt(index).toLowerCase();
            if (characterString1 == characterString2) {
                isConteined = true;
                break;
            } else {
                isConteined = false;
            }
        }
        if (!isConteined) {
            return isConteined;
        }
    }
    return isConteined;
}

console.log(stringVerify('abc', 'cba'));
