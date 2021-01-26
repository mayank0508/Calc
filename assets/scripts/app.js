const defaultResult = 0;
let currrentResult = defaultResult;

function add(){
    currrentResult = currrentResult + userInput.value;
    outputResult(currrentResult, '');
}

addBtn.addEventListener('click', add);


 

