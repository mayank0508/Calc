const defaultResult = 0;
let currrentResult = defaultResult;
let logEntries = []; // We have not declared it as an array because dowm the line we will declare it as an array
                     // But if we use push then we have reintialzed the array here.

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
    currrentResult += enteredNumber;//Here you can not use ParseInt, you can also do
                 //currrentResult.toString                                            // something like this :-
                 // this is used to convert a number to a string                     // currrentResult = currrentResult + +(userInput.value)
    operationResult('+', initialResult, enteredNumber);
    const LogEntry = {
        operator: 'ADD',
        previousResult: initialResult,
        number: enteredNumber,
        result: currrentResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}

function subt(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult -= enteredNumber;
    operationResult('-', initialResult, enteredNumber);
    const LogEntry = {
        operator: 'SUBT',
        previousResult: initialResult,
        number: enteredNumber,
        result: currrentResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}


function multi(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult *= enteredNumber;
    operationResult('*', initialResult, enteredNumber);
    const LogEntry = {
        operator: 'MULTIPLY',
        previousResult: initialResult,
        number: enteredNumber,
        result: currrentResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}


function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult /= enteredNumber;
    operationResult('/', initialResult, enteredNumber);
    const LogEntry = {
        operator: 'DIVIDE',
        previousResult: initialResult,
        number: enteredNumber,
        result: currrentResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subt);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);

 

