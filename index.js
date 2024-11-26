const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWorkInfo(form.elements[0].value);
});

const getWorkInfo = async (word) => {
   const Api_result = 
};
