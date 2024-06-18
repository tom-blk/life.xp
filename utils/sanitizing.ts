export const checkIfUserInputIsNumber = (userInput: string): boolean => {
    if(userInput === "") return false

    const trimmedUserInput = userInput.trim();
        
    const regexIntCheck = /^-?\d+$/;

    if (!regexIntCheck.test(trimmedUserInput)) return false

    const parsedNumber = parseInt(trimmedUserInput);
        
    if(!Number.isInteger(parsedNumber)) return false

    return true;
}

