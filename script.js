//Created the Variable elements that will store the inputs//
const resultEl= document.getElementById("password");
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


// The random string functions that will run to retrieve info//

//Fisher Yates Random array method 

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
//Lowercase Randomizer//
function getRandomLowerCase()
{ const lower = 'abcdefghijklmnopqrstuvwxyz';
    return lower[Math.floor(Math.random()*lower.length)]
}

//Upper Case Randomizer//
function getRandomUpperCase()
{ const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random()*upper.length)]
}

//Number Randomizer//
function getRandomNumber()
{ return Math.floor(Math.random()*10);
}

//Special Character//
function getRandomSpecial()
{ const special = '!@#$%^&*(){}[]=/<>,.';
    return special[Math.floor(Math.random()*special.length)]
}

//Actual create password function//
function createPass(lower, upper, special, number, length){
    
    //Letting it Equal a string//
    let createPass = "";

    //Determines how many types are checked off
    const typesCount = lower + upper + special + number;
        

    // Identfies which arrays are checked
    const typesArr = [{lower}, {upper}, {special}, {number}].filter(
        item => Object.values(item)[0]
    ); 
        if (typesCount === 0) {return 'Please select the Paramaters'}
    
   for (i=0; i<length; i = i + typesCount) {
        typesArr.forEach(function (type)  {
        const funcName= Object.keys(type)[0];
        
        createPass = createPass + randomFunc[funcName]();
       }
       ) 
     
   }
   // Making the password the desired length//

   //***NEW STUFF***//
   
   //Slicing password from length//
   const finalPass = createPass.slice(0, length)
   //Turning it into and array
   const passArray = Array.from(finalPass)
   //Shuffling the Array
   const passInput = shuffle(passArray)
   //Turning it back into a string then placing it in element.
   const joinedPass = passInput.join('')

   return ("Your new password is: " + joinedPass)
}
//Event listener section//

generateEl.addEventListener('click', function(){
    

    const length= parseInt(lengthEl.value);
    const wantsUpper= upperEl.checked;
    const wantsLower= lowerEl.checked;
    const wantsSpecial= specialEl.checked;
    const wantsNumber= numberEl.checked;
   

    resultEl.innerText = createPass(wantsUpper, wantsLower, wantsSpecial, wantsNumber, length);

   })

//Attempted to Create a copy to clipboard button//
clipboardEl.addEventListener('click',  () => { copy() })


//Made a copy button
function copy(){
    const pass = document.querySelector("#password").textContent;
    const txtEl = document.createElement("textarea");
    txtEl.value = pass;
    document.body.appendChild(txtEl);
    txtEl.select();
    txtEl.setSelectionRange(22, 100)
    document.execCommand("copy");
    document.body.removeChild(txtEl);
    alert(`Copied to clipboard \n ${pass} `); 
    

}

