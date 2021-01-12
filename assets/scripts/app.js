const defaultResult = 0;
let currrentResult = defaultResult;

 currrentResult = (currrentResult+10) *3 /2 -4;

 let calculatedescription = `(${defaultResult}+10) * 3 / 2 - 4`;
 let errorMessage = 'An Errror \n' +
  "Occured";
 outputResult(currrentResult, errorMessage);
