const defaultResult = 0;
let currrentResult = defaultResult;
let logEntries = []; // We have not declared it as an array because dowm the line we will declare it as an array
// But if we use push then we have reintialzed the array here.

function getUserInput() {
    return parseInt(userInput.value);
}

function operationResult(operator, startResult, endResult) {
    const calcDescription = `${startResult} ${operator} ${endResult}`;
    outputResult(currrentResult, calcDescription);
}

function writeToLog(operatoion, prevResult, newNumber, newResult) {
    const LogEntry = {
        operator: operatoion,
        previousResult: prevResult,
        number: newNumber,
        result: newResult,
    }
    logEntries.push(LogEntry);
    console.log(logEntries);
}

function calcResult(calcType) {
    const enteredNumber = getUserInput();
    if (calcType !== 'ADD' && 
        calcType !== 'SUBT' && 
        calcType !== 'MULT' && 
        calcType !== 'DIVI' ||
        !enteredNumber
        ) {
        return;
        }

  /*  if (calcType === 'ADD' && 
        calcType === 'SUBT' && 
        calcType === 'MULT' && 
        calcType === 'DIVI') {
    */
       

    const initialResult = currrentResult;
    let mathOperator;
    if (calcType === "ADD") {
        currrentResult += enteredNumber;
        mathOperator = '+';
    } else if (calcType === "SUBT") {
        currrentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calcType === "MULT") {
        currrentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calcType === "DIVI") {
        currrentResult /= enteredNumber;
        mathOperator = '/';
    }
    operationResult(mathOperator, initialResult, enteredNumber);
    writeToLog(calcType, initialResult, enteredNumber, currrentResult);
}


function add() {
    calcResult('ADD'); //Here you can not use ParseInt, you can also do
    //currrentResult.toString                                            // something like this :-
    // this is used to convert a number to a string                     // currrentResult = currrentResult + +(userInput.value)
}


function subt() {
    calcResult('SUBT');
}


function multi() {
    calcResult('MULT');
}


function divide() {
    calcResult('DIVI');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subt);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', divide);