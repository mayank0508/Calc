const defaultResult = 0;
let currrentResult = defaultResult;

function add(){
    const calcDescription = `${currrentResult}+ ${userInput.value}`
    currrentResult = currrentResult + parseInt(userInput.value); //Here you can not use ParseInt, you can also do
                 //currrentResult.toString                                            // something like this :-
                 // this is used to convert a number to a string                     // currrentResult = currrentResult + +(userInput.value)
    outputResult(currrentResult, calcDescription);
}

addBtn.addEventListener('click', add);


 

