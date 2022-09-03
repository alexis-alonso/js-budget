// Define UI Vars
const form = document.querySelector('#entry-form');
const summary = document.querySelector('.summary');
const amountInput = document.querySelector("#amount");
const describe = document.querySelector("#description");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addEntry);

};

function addEntry(e, f) {
    if(amountInput.value === "") {
        alert('You have got to be kidding me!');
    } 
    
    else if (isNaN(amountInput.value)) {
        alert ('Please enter a number!');
    }
    
    else {
        // Creates li element to print on Summary side
        const li = document.createElement('li');

        // Create class for li elements
        li.className = 'summary-item';

        // Create text node to attach/append to created li element
        li.appendChild(document.createTextNode(amountInput.value));

        // Print/append to Summary side col
        summary.appendChild(li);
        
        amountInput.value = '';


        // // Creates second li element to print on Summary side
        // const li2 = document.createElement('li');

        // // Create text node to attach/append to created li element
        // li2.appendChild(document.createTextNode(describe.value));

        // // Print/append to Summary side col
        // summary.appendChild(li2);
        
        // describe.value = '';
            
    }


    e.preventDefault();
    f.preventDefault();
}; 
    



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
