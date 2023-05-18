let message = document.getElementById("message");
let numInput;
let encoded;
let section = document.getElementById("wombo");
let inputClass;
let array = [];
let targetValue;
let grabClass;
let submit;
let textArray = [];
let firstHalfArray = [];
let lastHalfArray = [];
let valueNum;
let finalArray = []
let output = document.getElementById("output");
let string;
let msgNum;

//to take out of array and put into ormal sentence form use .replace("") 

function unShuffle(){
    text = event.target.value;
    
    numClass = event.target.getAttribute('class');
    grabClass = array[numClass]

    
    
}

function doTheThing(){
    for(k=0; k<i; k++){
        valueNum = array[k].numInput.value;

        text = array[k].encoded.value;
        textArray = text.split("");
        for(n=0; n<valueNum; n++){
            for(w=0; textArray.length>w; w+=2){
                lastHalfArray.push(textArray[w]);
                firstHalfArray.push(textArray[w + 1]);
            }
            string = "";
            finalArray = [].concat(firstHalfArray, lastHalfArray);
            firstHalfArray = [];
            lastHalfArray = [];
            string = finalArray.toString();
            string = string.replace(/,/g, "");
            console.log(string)
            finalArray = [];
            textArray = [];
            textArray = string.split("");
            
        }
        array[k].msgNum.innerText = "";
        array[k].msgNum.innerText = k + 1 + ". " + string;
    }

}


function findClass(){
    submit.addEventListener('click', doTheThing);

}

message.addEventListener('change', function(){
    let num = message.value;
    if (section.children.length > 0) {
        while (section.children.length > 0) {
            section.removeChild(section.firstChild);
        }
    }
    if(output.children.length > 0){
        while (output.children.length > 0){
            output.removeChild(output.firstChild);
        }
    }
    for(i=0;i < num; i++ ){
        numInput = document.createElement('input');
        encoded = document.createElement('input');
        msgNum = document.createElement('p');
        msgNum.setAttribute("id", i);
        msgNum.innerText = i + 1 + ". ";
        output.appendChild(msgNum);

        numInput.setAttribute("type", "number");
        encoded.setAttribute("type", "text");
        numInput.setAttribute("placeholder", "Enter Number");
        encoded. setAttribute("placeholder", "Encoded Message");
        numInput.setAttribute("id", "integer");
        encoded.setAttribute("id", "encodedMessage");

        numInput.classList.add(i);
        encoded.classList.add(i)

        section.appendChild(encoded);
        section.appendChild(numInput);
        


        inputClass = {numInput: numInput, encoded: encoded, msgNum: msgNum};
        array.push(inputClass);
    }
    submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "butn");
    section.appendChild(submit);
    findClass();

});

