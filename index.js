
//User  Input 
const day = document.getElementById('dayInput');
const month = document.getElementById('monthInput');
const year = document.getElementById('yearInput');

//Container for each Label User Input
const labelDayInputContainer = document.getElementById('input-labels-day');
const labelMonthInputContainer = document.getElementById('input-labels-month');
const labelYearInputContainer = document.getElementById('input-labels-year');

//Label for each user input
const labelInputDay = document.getElementById('dayLabel');
const labelInputMonth = document.getElementById('monthLabel');
const labelInputYear = document.getElementById('yearLabel');

//Arrow Button(Submit)
const arrowButton = document.getElementById('buttonArrow');

//Get current date
const currentdate = new Date();


arrowButton.addEventListener('click',ageCalculation);

function ageCalculation(){

    //String --> to Numerical
    const dayCalc = parseInt(day.value,10);
    const monthCalc = parseInt(month.value,10);
    const yearCalc = parseInt(year.value,10);


    //Create Error Text for each input
    const dayErrorText = document.createElement('p');
    const monthErrorText = document.createElement('p');
    const yearErrorText = document.createElement('p');
    
    
    //Error Handling for Empty Input
    if(day.value == '' || month.value == '' || year.value == ''){
       handleEmptyInputs(dayErrorText,monthErrorText,yearErrorText);
       return;
    }

    //Error Handling for invalid day input
    if(day.value > 31){
        handleInvalidDays(dayErrorText);
        return;
    }

    //Error Handling for invalid month input
    if(month.value > 12){
        handleInvalidMonths(monthErrorText);
        return;
    }

    //Error Handling for invalid year input
    if(year.value > currentdate.getFullYear()){
        handleInvalidYears(yearErrorText);
        return;
    }

    if(month.value != 2){
        if(month.value % 2 == 0 && day.value > 30){
            dayErrorText.innerHTML = 'Must be a valid day';
            labelDayInputContainer.appendChild(dayErrorText);
            labelInputDay.classList.add('error');   
            day.classList.add('error');
            return;
        }
    }else if(month.value == 2 && day.value>28){
        dayErrorText.innerHTML = 'Must be a valid day';
        labelDayInputContainer.appendChild(dayErrorText);
        labelInputDay.classList.add('error');
        day.classList.add('error');
        return;
    }

 
    // console.log(dayCalc);
    // console.log(monthCalc);
    // console.log(yearCalc);

    //Get current date Year,month,day
    const currentYear = currentdate.getFullYear();
    const currentMonth = currentdate.getMonth() + 1;
    const currentday = currentdate.getDate();

    //Calculate Age
    let ageYear = currentYear - yearCalc - (currentMonth < monthCalc || (currentMonth === monthCalc && currentdate.getDate() < dayCalc) ? 1 : 0);
    let ageMonth = currentMonth - monthCalc;
    let ageDay = currentday - dayCalc;

    if (ageDay < 0) {
        const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
        ageMonth--;
        ageDay += daysInCurrentMonth;
    }

    ageMonth = ageMonth < 0 ? ageMonth + 12 : ageMonth;

    //Output age calculation
    const yearText = document.getElementById('yearOutput');
    yearText.innerHTML = ageYear;

    const monthText = document.getElementById('monthsOutput');
    monthText.innerHTML = ageMonth;

    const daysText = document.getElementById('daysOutput');
    daysText.innerHTML = ageDay;


    // console.log(ageYear);
    // console.log(ageMonth);
    // console.log(ageDay);
}


function handleEmptyInputs(dayErrorText,monthErrorText,yearErrorText){
    
    dayErrorText.innerHTML = 'This field is required';
    labelDayInputContainer.appendChild(dayErrorText);
    labelInputDay.classList.add('error');
    day.classList.add('error');

    monthErrorText.innerHTML = 'This field is required';
    labelMonthInputContainer.appendChild(monthErrorText);
    labelInputMonth.classList.add('error');
    month.classList.add('error');

    yearErrorText.innerHTML = 'This field is required';
    labelYearInputContainer.appendChild(yearErrorText);
    labelInputYear.classList.add('error');
    year.classList.add('error');

    return;

}

function handleInvalidDays(dayErrorText){

    dayErrorText.innerHTML = 'Must be a valid day';
    labelDayInputContainer.appendChild(dayErrorText);
    labelInputDay.classList.add('error');
    day.classList.add('error');
    
    return;
}

function handleInvalidMonths(monthErrorText){

    monthErrorText.innerHTML = 'Must be a valid month';
    labelMonthInputContainer.appendChild(monthErrorText);
    labelInputMonth.classList.add('error');
    month.classList.add('error');

    return;
}

function handleInvalidYears(yearErrorText){

    yearErrorText.innerHTML = 'Must be in the past';
    labelYearInputContainer.appendChild(yearErrorText);
    labelInputYear.classList.add('error');
    year.classList.add('error');

    return;
}



