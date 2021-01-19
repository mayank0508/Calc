const defaultResult = 0;
let currrentResult;

function add(){
    const result = currrentResult + userInput.value;
    return result;
}


addBtn.addEventListener('click', add);


 outputResult(currrentResult, calculatedescription);

