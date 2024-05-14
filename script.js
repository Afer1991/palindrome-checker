const checkButton = document.getElementById("check-btn");
const form = document.querySelector("form");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForPalindrome(textInput.value);
});

function checkForPalindrome(str) {
  if(str === "") {
    alert("Please input a value");
  } else {
    palindromes(str);
  }
}

function palindromes(str) {
  let myRegex = /[a-z0-9]/g;
  let newString = str.toLowerCase();
  let newArray = newString.match(myRegex);
  newString = newArray.join('');
  let reversedArray = newArray.reverse();
  let reversedString = reversedArray.join('');
  if (newString === reversedString) {
    result.innerHTML = `<p><strong>${str}</strong> is a palindrome</p>`;
  } else {
    result.innerHTML = `<p><strong>${str}</strong> is not a palindrome</p>`;
  }  
};