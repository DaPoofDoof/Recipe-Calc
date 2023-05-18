let ings;
//baba galooga!!!! :3
let ingName;
let ingAmt;
let amtNeeded;
let amtYouMake;
let lineBreak;
let section1 = document.getElementById('inputSection');
let amtLeft;
let ingsArray = [];
let recipeInput;
let className;
let classNum;
let ingsRow;
let ingsCol = [];
let section2 = document.getElementById('batchesBox');
let numPosBatches = 99999;
let batchesAmt = document.createElement('h3');
var ingredient;


//This code was NOT written 
//This function checks if your browser is firefox
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    document.getElementById("antiFirefox").style.opacity = "0%";
}
//If you are using firefox it makes the transparency 0%


function calculate(){
    //we are inside of the array number that was clicked for ingredients, need to lock, num values, grab the name value and unlock num values, calculate

    classNum = event.target.getAttribute('class');

    classNum = classNum.substring(21);
    
    ingsRow = ingsArray[classNum];

    ingsRow.amtYouMake.value = ingsRow.ingAmt.value / ingsRow.amtNeeded.value;

    ingsRow.amtYouMake.value = Math.floor(ingsRow.amtYouMake.value);

    ingsRow.amtLeft.value = ingsRow.ingAmt.value % ingsRow.amtNeeded.value;

  
    // ingsRow.setAttribute("value", "7");

    
}


function amtOfBatches(){
    
    for(p=0; p<ingsArray.length; p++){
        ingsCol = ingsArray[p].amtYouMake.value;
        if(ingsArray[p].ingAmt.value < 0){
            ingsArray[p].ingAmt.value = "";
            alert("You cannot input a negative number");
        }
        if(ingsArray[p].amtNeeded.value <0){
            ingsArray[p].amtNeeded.value = "";
            alert("You cannot input a negative number");
        }


        if(parseInt(ingsCol) < parseInt(numPosBatches) && ingsCol != "" ){
            numPosBatches = ingsCol; 
            batchesAmt.innerHTML = 'Amount of batches you can make: ' + numPosBatches;
            section2.appendChild(batchesAmt);
        }
   }
    numPosBatches = 99999;
    ingsCol = [];
}

function forLoopEL(){
    for (let i = 0; i < ingsArray.length; i++) {

        ingsArray[i].ingAmt.addEventListener('change', calculate);
        ingsArray[i].amtNeeded.addEventListener('change', calculate);
    
    }
    
    for(m = 0; m<ingsArray.length; m++){
        ingsArray[m].amtNeeded.addEventListener('change', amtOfBatches)
        ingsArray[m].ingAmt.addEventListener('change', amtOfBatches)
    }
    
}



function TestCases() {
    ingsArray = [];
    //This function happends once you enter a number in the "enter number" input
    if (section1.children.length > 0) {
        while (section1.children.length > 0) {
            section1.removeChild(section1.firstChild);
            /*This part of the function happens 
            first and deletes all exsiting ingredients*/


            
        }
        ingsArray = [];
        
    }

    
    //This part of the code makes sure you do not enter a number bigger than 999
    ings = document.getElementById('ingCount').value;
    ings = parseInt(ings);
    if (ings > 999) {
        document.getElementById('ingCount').value = 999;
        ings = 999;  //never give them an error message... 
    }
    
    //This is if you enter a number lower than 0
    else if (ings < 0) {
        document.getElementById('ingCount').value = 0;
        ings = 0;
    }



    /*This part of the function start the create 
    elements relevant to the number you input*/
    for (a = 0; a < ings; a++) {
        ingName = document.createElement("input");
        ingName.style.width = "25%";
        ingName.setAttribute("placeholder", "Name");
        ingName.setAttribute("maxLength", "12");
        ingName.setAttribute("id", "ingName");
       

        ingAmt = document.createElement("input");
        ingAmt.setAttribute("type", "number");
        ingAmt.setAttribute("placeholder", "Enter#");
        ingAmt.setAttribute("id", "ingAmt");
        ingAmt.setAttribute("maxLength", "4");
        

        amtNeeded = document.createElement("input");
        amtNeeded.setAttribute("type", "number");
        amtNeeded.setAttribute("placeholder", "Enter#");
        amtNeeded.setAttribute("id", "amtNeeded");
        amtNeeded.setAttribute("maxLength", "4");

        amtYouMake = document.createElement("input");
        amtYouMake.setAttribute("type", "number");
        amtYouMake.setAttribute("disabled", "true");
        amtYouMake.setAttribute("maxLength", "4");
        

        amtLeft = document.createElement("input");
        amtLeft.setAttribute("type", "number");
        amtLeft.setAttribute("disabled", "true");
        amtLeft.setAttribute("maxLength", "4");

        
        ingName.classList.add('cssClass', 'recipeInput-' + a );
        ingAmt.classList.add('cssClass', 'recipeInput-' + a );
        amtNeeded.classList.add('cssClass', 'recipeInput-' + a );
        amtYouMake.classList.add('cssClass', 'recipeInput-' + a );
        amtLeft.classList.add('cssClass', 'recipeInput-' + a );
//Need to find the dash, grab a from dash and 
        
        //This specifies the location of all the elements
        section1.appendChild(ingName);
        section1.appendChild(ingAmt);
        section1.appendChild(amtNeeded);
        section1.appendChild(amtYouMake);
        section1.appendChild(amtLeft);

        
      
        
        ingredient = {ingName: ingName, ingAmt: ingAmt, amtNeeded: amtNeeded, amtYouMake: amtYouMake, amtLeft: amtLeft}
        ingsArray.push(ingredient);  
        
        
       


        
    }

    forLoopEL();
    
}




    
console.log(ingsCol)



ingCount.addEventListener('input', TestCases);


