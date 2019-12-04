//Created the Variable elements that will store the inputs//
var resultEl= document.getElementById("password");
var lengthEl= document.getElementById("length");
var numberEl= document.getElementById("Numbers");
var specialEl= document.getElementById("Special");
var upperEl= document.getElementById("Uppercase");
var lowerEl= document.getElementById("Lowercase");
var generateEl= document.getElementById("Generate");
var clipboardEl= document.getElementById("clipboard");
var randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    special: getRandomSpecial,
    number: getRandomNumber,
};


// The random string functions that will run to retrieve info//

//Lowercase Randomizer//
function getRandomLowerCase()
{ var lower = 'abcdefghijklmnopqrstuvwxyz';
    return lower[Math.floor(Math.random()*lower.length)]
}

//Upper Case Randomizer//
function getRandomUpperCase()
{ var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random()*upper.length)]
}

//Number Randomizer//
function getRandomNumber()
{ return Math.floor(Math.random()*10);
}
//Special Character//
function getRandomSpecial()
{ var special = '!@#$%^&*(){}[]=/<>,.';
    return special[Math.floor(Math.random()*special.length)]
}

//Actual create password function//
function createPass(lower, upper, special, number, length){
    let createPass = "";
//Determines how many types are checked off
    var typesCount = lower + upper + special + number;
        console.log(typesCount) 
// Identfies which arrays are checked
    var typesArr = [{lower}, {upper}, {special}, {number}].filter(
        item =>Object.values(item)[0]
    ); console.log(typesArr)
        if (typesCount === 0) {return 'Please select the Paramaters'}
    
   for (i=0; i<length; i= i + typesCount) {
        typesArr.forEach(type => {
        var funcName= Object.keys(type)[0];
        
        createPass = createPass + randomFunc[funcName]();
       }
       ) 
     
   }
   // Making the password the desired length//
   var finalPass = createPass.slice(0, length)
   return ("Your new password is: " + finalPass)
}
//Event listener section//

generateEl.addEventListener('click', function(){
    var length= parseInt(lengthEl.value);
    var wantsUpper= upperEl.checked;
    var wantsLower= lowerEl.checked;
    var wantsSpecial= specialEl.checked;
    var wantsNumber= numberEl.checked;
   
   resultEl.innerText = createPass(wantsUpper, wantsLower, wantsSpecial, wantsNumber, length);
   
   })

//Attempted to Create a copy to clipboard button//
clipboardEl.addEventListener('click',  () => {
    document.execCommand('copy');

})






