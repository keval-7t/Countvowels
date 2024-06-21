// function sum(a,b){
//     s = a + b;
//     return s;
// }

// let val = sum(200,300);

// console.log(val);



// function multiplication(a,b) {
//     s = a * b; 
//     return s;
// }

// let result = multiplication(a,b);

// console.log(result);


// function ex.


function countvowels (string) {
    count = 0;
     for ( let character of string) {
          if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || 
              character === "A" || character === "E" || character === "I" || character === "O" || character === "U" )
         {
            count++
         }
      }
        return count;
}  

// let result = prompt("Enter your name");
let inpt = document.querySelector("input");

let para = document.querySelector("p");
let submit = document.querySelector(".submit");
let refresh = document.querySelector(".refresh")

let sub_btn = () => {
   console.log(countvowels(inpt.value)); 
   para.innerText = countvowels(inpt.value)
}

let refrs_btn = () => {
   inpt.value = "";
   para.innerText = "Ans.";
}  


submit.addEventListener("click" , sub_btn);
refresh.addEventListener("click" , refrs_btn);




