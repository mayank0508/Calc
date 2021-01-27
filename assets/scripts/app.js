const defaultResult = 0;
let currrentResult = defaultResult;

function add(){
    currrentResult = currrentResult + parseInt(userInput.value); //Here you can not use ParseInt, you can also do 
                                                                 // something like this :-
                                                                 // currrentResult = currrentResult + +(userInput.value)
    outputResult(currrentResult, '');
}

addBtn.addEventListener('click', add);


 

