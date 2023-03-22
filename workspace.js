let box = document.querySelector("div");
    input = document.querySelector("input");

input.addEventListner("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value; 
});
