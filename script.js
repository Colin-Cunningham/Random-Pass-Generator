const resultEl= document.getElementById("clipboard");
const lengthEl= document.getElementById("length");
const numberEl= document.getElementById("Numbers");
const specialEl= document.getElementById("Special");
const upperEl= document.getElementById("Uppercase");
const lowerEl= document.getElementById("Lowercase");
const generateEl= document.getElementById("Generate");
const clipboardEl= document.getElementById("clipboard");
const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    special: getRandomSpecial,
    number: getRandomNumber,
};

clipboardEl.addEventListener('click',  () => {
    document.execCommand('copy');

})

function getRandomLowerCase()
{ return String.fromCharCode((Math.floor(Math.random() * 26) + 97))
}

function getRandomUpperCase()
{ return String.fromCharCode((Math.floor(Math.random() * 26) + 65))
}

function getRandomNumber()
{ return Math.floor(Math.random()*10);
}

function getRandomSpecial()
{ const special = '!@#$%^&*(){}[]=/<>,.';
    return special[Math.floor(Math.random()*special.length)]
}

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
   var finalPass = createPass.slice(0, length)
   return finalPass
}

generateEl.addEventListener('click', function(){
    var length= parseInt(lengthEl.value);
    var wantsUpper= upperEl.checked;
    var wantsLower= lowerEl.checked;
    var wantsSpecial= specialEl.checked;
    var wantsNumber= numberEl.checked;
   
   resultEl.innerText = createPass(wantsUpper, wantsLower, wantsSpecial, wantsNumber, length);
   
   })








