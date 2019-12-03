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

function createPass(lower, upper, special, number){
    

}


generateEl.addEventListener('click', function(){
 var length= parseInt(lengthEl.value);
 var wantsUpper= upperEl.checked;
 var wantsLower= lowerEl.checked;
 var wantsSpecial= specialEl.checked;
 var wantsNumber= numberEl.checked;

resultEl.innerHTML = createPass(wantsUpper, wantsLower, wantsSpecial, wantsNumber);

})







