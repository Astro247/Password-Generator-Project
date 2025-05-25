const STRINGS = {
    noCapsLettersString: "abcdefghijklmnopqrstuvwxyz",
    capsLettersString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbersString: "1234567890",
    symbolsString: "!@#$%^&*()_-+={}[]:;<>.,?/"
}


function checkAllFalse(PARAMETERS) {
    return !(PARAMETERS.lowerCase || PARAMETERS.upperCase || PARAMETERS.numbers || PARAMETERS.symbols);
}



function generatePassword(PARAMETERS, STRINGS) {
    let password = ""
    let randomIndex = undefined
    for(let i=0; i<=PARAMETERS.passLength;) {
        randomParameter = Math.floor(Math.random() * 4) + 1

        if(randomParameter===1 && PARAMETERS.lowerCase) {
            randomIndex = Math.floor(Math.random() * (STRINGS.noCapsLettersString).length)
            password += STRINGS.noCapsLettersString[randomIndex]
            i++
        }
        else if(randomParameter===2 && PARAMETERS.upperCase) {
            randomIndex = Math.floor(Math.random() * (STRINGS.capsLettersString).length)
            password += STRINGS.capsLettersString[randomIndex]
            i++
        }
        else if(randomParameter===3 && PARAMETERS.numbers) {
            randomIndex = Math.floor(Math.random() * (STRINGS.numbersString).length)
            password += STRINGS.numbersString[randomIndex]
            i++
        }
        else if(randomParameter===4 && PARAMETERS.symbols) {
            randomIndex = Math.floor(Math.random() * (STRINGS.symbolsString).length)
            password += STRINGS.symbolsString[randomIndex]
            i++
        }
    }
    return password
}


function main() {
    let password = undefined
    document.getElementById("generatePass").onclick = function() {
        const PARAMETERS = {
            passLength: 20,
            lowerCase: document.getElementById("lowerCase").checked,
            upperCase: document.getElementById("upperCase").checked,
            numbers: document.getElementById("numbers").checked,
            symbols: document.getElementById("symbols").checked
        }
        if(checkAllFalse(PARAMETERS)) {
            password = ">:("
            document.getElementById("pass").textContent = password
            return
        }
        else {
            password = generatePassword(PARAMETERS, STRINGS)
            document.getElementById("pass").textContent = password
        }
    }
}

main()