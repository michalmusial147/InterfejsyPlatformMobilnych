const discPath = document.getElementById('disc_path');

const etPathExtended = document.getElementById('disc_path_extended');

const etcPath = document.getElementById('etc_path');

discPath.addEventListener('change', validate)

etPathExtended.addEventListener('change', validate)

etcPath.addEventListener('change', validate)

function validate(e) {
    e.preventDefault();
   const text = e.target.value;
   let validationResult = false;
    if (text.length !== 0){
        // todo walidacje
        validationResult = false;
    }
    validationResult ? e.target.setCustomValidity('') : e.target.setCustomValidity('invalid');
}