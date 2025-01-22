const input = document.getElementById("input");
const btninput = document.getElementById("btninput");
const result = document.getElementById("result");

btninput.addEventListener("click", () => {
    const text = input.value.toLowerCase().replace(/[^A-Za-z0-9]/g,"")    
    if (text === "") {
        alert("Please input a value");
    } else if (input.value.length === 1) {
        result.innerText = `${input.value} is a palindrome`
    } else if (text === [...text].reverse().join("")) {
        result.innerText = `${input.value} is a palindrome`
    }
    else {
        result.innerText = `${input.value} is not a palindrome`;
    }
});
