// Define UI Vars
const form = document.querySelector('#entry-form');
const summary = document.querySelector('.summary');
const amountInput = document.querySelector("#amount");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addEntry);

};

function addEntry(e) {
    if(amountInput.value === "") {
        alert('You have got to be kidding me!');
    } else {
        // Creates li element to print on Summary side
        const li = document.createElement('li');

        // Create class for li elements
        li.className = 'summary-item';

        // Create text node to attach/append to created li element
        li.appendChild(document.createTextNode(amountInput.value));

        // Print/append to Summary side col
        summary.appendChild(li);
        
        amountInput.value = '';
            

    }


    e.preventDefault();
}; 
    

// document.body.addEventListener('click', buttonClick);

// function buttonClick(e) {
//     if(e.target.classList.contains('btn-primary')) {
//         console.log('you are about to lose $!');
//     } 
    
// }





// function printAmount() {

//     // here, we want js to print based on what we put in input text (see input-group)
//     // then, we want js to print based on what radio button is 'active'

//     // this code let the screen now print what was in the input field
//     let money = document.getElementById('user-input').value;
//     var find_var = document.getElementById('summary');
//     find_var.innerHTML = money;

//     var tag = document.createElement("p");
//     var text = document.createTextNode(find_var.innerHTML)
//     tag.appendChild(text);
//     // var element = document.getElementById('summary');
//     find_var.appendChild(tag);

// }

// function enterFloat(num){

//     //look at number
//     //determine if a number, preferably positive, not a string or anything otherwise
    
//     if(num === NaN){
//         // print to the info text: "That is not a valid command"

//         return "Please enter a number.";
//     } else {
//         return num;
//     }


// };


function resetInput(){

    // reset the input to empty
   document.getElementById("user-input").value = "";

}

// function PrintUserInput(){
    
//     printAmount(enterFloat())

    
//     resetInput();

// }
