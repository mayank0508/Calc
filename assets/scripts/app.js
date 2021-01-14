const defaultResult = 0;
let currrentResult = defaultResult;

function add(num1, num2){
    const result = num1+num2;
    alert('The result is ' + result);
}

add(3, 5);

 currrentResult = (currrentResult+10) *3 /2 -4;

 let calculatedescription = `(${defaultResult}+10) * 3 / 2 - 4`;
 
 outputResult(currrentResult, calculatedescription);

