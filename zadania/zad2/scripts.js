const discPath = document.getElementById('disc_path');

const etPathExtended = document.getElementById('disc_path_extended');

const etcPath = document.getElementById('etc_path');

// discPath.addEventListener('change', validate)
//
etPathExtended.addEventListener('change', validated_disc_path_extended)
//
// etcPath.addEventListener('change', validate)

function validated_disc_path_extended(e) {
    const regex = new RegExp(
        /[a-zA-Z]:[\\](windows|winnt|win|dos|msdos)[\\](?:[a-zA-Z0-9]+[\\])*([a-zA-Z0-9])*/, "i");
    e.preventDefault();
   const text = e.target.value;
   let validationResult = false;
    if (text.length !== 0){
        validationResult = regex.test(text)
    }
    validationResult ? e.target.setCustomValidity('') : e.target.setCustomValidity('invalid');
}