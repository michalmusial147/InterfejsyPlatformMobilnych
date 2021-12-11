const etPathExtended = document.getElementById('disc_path_extended');
etPathExtended.addEventListener('change', validated_disc_path_extended)

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