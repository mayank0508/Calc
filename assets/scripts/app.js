const defaultResult = 0;
let currrentResult;

function add(){
    currrentResult = currrentResult + userInput.value;
}


addBtn.addEventListener('click', add);


 outputResult(currrentResult, calculatedescription);

