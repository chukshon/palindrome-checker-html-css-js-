const button = document.querySelector("#btn");
const input  = document.querySelector("#input");
const info = document.querySelector(".info-txt");
let txtInput;

button.addEventListener("click", () => {
    info.style.display = "block";
    let reverseInput = txtInput.split("").reverse().join("");
    if(txtInput !== reverseInput){
        info.innerHTML = `No, <span>'${input.value}'</span> isn't a palindrome!`
    }
    else{
        info.innerHTML = `Yes, <span>'${input.value}'</span> is a palindrome!`
    }
})

input.addEventListener("keyup", function(){

    txtInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(txtInput){
        button.classList.add("active")
    }else{
        button.classList.remove("active")
        info.style.display = "none";
    }
})
