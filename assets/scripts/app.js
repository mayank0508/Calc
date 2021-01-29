const defaultResult = 0;
let currrentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function operationResult(operator, startResult, endResult){
    const calcDescription = `${startResult} ${operator} ${endResult}`;
    outputResult(currrentResult, calcDescription);
}

function add(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult = currrentResult + enteredNumber;//Here you can not use ParseInt, you can also do
                 //currrentResult.toString                                            // something like this :-
                 // this is used to convert a number to a string                     // currrentResult = currrentResult + +(userInput.value)
    operationResult('+', initialResult, enteredNumber);
}

function subt(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult = currrentResult - enteredNumber;
    operationResult('-', initialResult, enteredNumber);
}

function multi(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult = currrentResult * enteredNumber;
    operationResult('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult = currrentResult / enteredNumber;
    operationResult('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subt);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);

 

