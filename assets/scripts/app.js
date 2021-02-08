const defaultResult = 0;
let currrentResult = defaultResult;
let logEntries = []; // We have not declared it as an array because dowm the line we will declare it as an array
                     // But if we use push then we have reintialzed the array here.

function getUserInput() {
    return userInput.value;
}

function operationResult(operator, startResult, endResult){
    const calcDescription = `${startResult} ${operator} ${endResult}`;
    outputResult(currrentResult, calcDescription);
}

function writeToLog(operatoion, prevResult, newNumber, newResult){
    const LogEntry = {
        operator: operatoion,
        previousResult: prevResult,
        number: newNumber,
        result: newResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}
function add(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult += enteredNumber;//Here you can not use ParseInt, you can also do
                 //currrentResult.toString                                            // something like this :-
                 // this is used to convert a number to a string                     // currrentResult = currrentResult + +(userInput.value)
    operationResult('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currrentResult);
}

function subt(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult -= enteredNumber;
    operationResult('-', initialResult, enteredNumber);
    logEntries.push(LogEntry);
    console.log(logEntries);
    writeToLog('SUBT', initialResult, enteredNumber, currrentResult);
}


function multi(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult *= enteredNumber;
    operationResult('*', initialResult, enteredNumber);
    logEntries.push(LogEntry);
    console.log(logEntries);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currrentResult);
}


function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currrentResult;
    currrentResult /= enteredNumber;
    operationResult('/', initialResult, enteredNumber);
    logEntries.push(LogEntry);
    console.log(logEntries);
    writeToLog('DIVIDE', initialResult, enteredNumber, currrentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subt);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);

 

