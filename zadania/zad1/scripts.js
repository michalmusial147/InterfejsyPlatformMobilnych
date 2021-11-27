const nrDowoduInput = document.getElementById('disc_path');

nrDowoduInput.addEventListener('change', validate)

function validate(e) {
    e.preventDefault();
   const text = e.target.value;
   let validationResult = false;
    if (text.length === 9){
        const first3 = text.substr(0, 3);
        const from4To9 = text.substr(3, 8);
    }
    console.log(validationResult);
    nrDowoduInput.style.cssText+=('input:invalid');
    // validationResult ? nrDowoduInput.classList.add("input:invalid") : nrDowoduInput.classList.add("input:invalid");
}