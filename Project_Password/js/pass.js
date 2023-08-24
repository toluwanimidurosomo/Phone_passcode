//collect all necessary element 
let numsTag = document.getElementsByClassName("numbers")

let deleteTag = document.getElementById("delete")
let displayContTag = document.getElementById("displayCont");
let passCode = [];

// Loop through each of the numbers
let numsTagLength = numsTag.length;
for (let i = 0; i < numsTagLength; i++){
    numsTag[i].addEventListener("click",function(){
        // extract the numbers out of the button
        let newNum = numsTag[i].textContent;

        // check if the length of the passcode is less than 4 then push the value to the array and display
        if (passCode.length < 4) {
            // push the value to the array
            passCode.push(newNum)

            // display the values 
            displayNumbers(passCode.join(""))

            // make the delete button visible if one number is pressed
            deleteTag.style.visibility = "visible";
        }
        
    }) 

}

deleteTag.addEventListener("click", function(){
    // to remove the last value in an array
    passCode.pop();

    // send the new values to the display
    displayNumbers(passCode.join(""));

    // check if the lenght of passcode is lesser than 1 then hide the button
    if (passCode.length == 0) {
        // hide the button
        deleteTag.style.visibility = "hidden";
    }
})

function displayNumbers(n){
    displayContTag.textContent = n 
}

