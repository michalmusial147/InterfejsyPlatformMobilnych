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
const date_input_working_day = document.getElementById('date_input_working_day');
date_input_working_day.className = 'dateWorkingInputOnInit';
date_input_working_day.addEventListener('change', validated_date_input_working_day)
function validated_date_input_working_day(e) {
    e.preventDefault();
    const selectedDate = new Date(e.target.value);
    let validationResult = false;
    console.log(selectedDate.getDay());
    if(isDateInThisWeek(selectedDate)) {
        validationResult = true;
    }
    validationResult ? date_input_working_day.className = 'dateWorkingInputValid' : date_input_working_day.className = 'dateWorkingInputOnInvalid';;

}
function isDateInThisWeek(date) {
    const today = new Date();
    const todayDate = today.getDate();
    const todayDay = today.getDay();
    const firstDayOfWeek = new Date(today.setDate(todayDate - todayDay));
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 4);
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}

const time12 = document.getElementById('time12');
time12.className = 'time12Init';
time12.addEventListener('change', validatetime12)
function validatetime12(e) {
    e.preventDefault();
    const selectedTime = e.target.value;
    let validationResult = true;
    if(selectedTime>'12:00') {
        validationResult = false;
    }
    validationResult ? time12.className = 'time12Valid' : time12.className = 'time12Invalid';;

}

const time24 = document.getElementById('time24');
time24.className = 'time12Init';
time24.addEventListener('change', validatetime24)
function validatetime24(e) {
    e.preventDefault();
    const selectedTime = e.target.value;
    let validationResult = true;
    if(selectedTime>'24:00') {
        validationResult = false;
    }
    validationResult ? time24.className = 'time12Valid' : time24.className = 'time12Invalid';;

}