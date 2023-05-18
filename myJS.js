// 1 mix, 2 eggs, 1 vanilla, 32 chipps needed to make cake
let typeOfIng;
let ingAmnt;
let cakes;
let ing;
let arrayType = [];
let arrayIng = [];

function TestCases(){
    cakes = document.getElementById('cakesNum').value;
    cakes = parseInt(cakes);
    return cakes;
    console.log(4);
}
function IngNum(){
    ing = document.getElementById('ingredients').value;
    ing = parseInt(ing);
    if(ing<4){
        alert("The number of ingredients must be more than or equal to 4");
    }else{
        return ing;
    }
}
function makeThing(){
    for(i=0; i<cakes; i++){
        for(i=0; i<ing; i++){
            typeOfIng = prompt("What ingredient would you like to add (mix, eggs, vanilla, and chips required)?");
            ingAmnt = prompt("How much of this ingredient would you like (enter -1 to end it)?");
            typeOfIng = typeOfIng.toLowerCase();

            if(parseFloat(ingAmnt) === -1){
                break;
            }

            while(Number.isNaN(parseFloat(ingAmnt))){
                ingAmnt = prompt("Try again, how much of this ingredient would you like (enter -1 to end it)?");
                if(parseFloat(ingAmnt) === -1){
                    break;
                }
            }

            arrayType.push(typeOfIng);
            arrayIng.push(ingAmnt);
        }
    }
    switch(arrayType){
        case "mix":
            break;
        case "eggs":
            break;
        case "chips":
            break;
        case "vanilla":
            break;
        default:
            alert("You do not have all of the ingredients needed to make the cake");
    }

}

console.log(arrayType);
console.log(arrayIng);
console.log(3);