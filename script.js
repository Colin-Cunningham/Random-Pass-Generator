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
{ var special = 'abcdefghijklmnopqrstuvwxyz';
    return special[Math.floor(Math.random()*special.length)]
}

//Upper Case Randomizer//
function getRandomUpperCase()
{ var special = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return special[Math.floor(Math.random()*special.length)]
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

    var typesCount = lower + upper + special + number;
    
    var typesArr = [{lower}, {upper}, {special}, {number}].filter(
        item =>Object.values(item)[0]
    );
        if (typesCount === 0) {return ''}
    
   for (let i=0; i<length; i+=typesCount) {
       typesArr.forEach(type => {
        const funcName= Object.keys(type)[0];
        
        createPass += randomFunc[funcName]();
       }
       ) 
     
   }
   // Making the password the desired length//
   var finalPass = createPass.slice(0, length)
   return finalPass
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






