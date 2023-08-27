const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const optionThree = document.getElementById("option-three");
const optionFour = document.getElementById("option-four");
const optionFive = document.getElementById("option-five");

const buttonContainer = document.getElementById("button-container");
const nextBtn = document.getElementById("button-next");
const backBtn = document.getElementById("button-back");
const confirmBtn = document.getElementById("button-confirm");

const stepNumberOne = document.getElementById("step-number-1");
const stepNumbertwo = document.getElementById("step-number-2");
const stepNumberthree = document.getElementById("step-number-3");
const stepNumberfour = document.getElementById("step-number-4");

const planOne = document.getElementById("plan-1");
const planTwo = document.getElementById("plan-2");
const planThree = document.getElementById("plan-3");

const checkBox = document.getElementById("checkbox");
const month = document.getElementById("switch-text-month");
const year = document.getElementById("switch-text-year");
const twoMonth = document.querySelectorAll(".twomonth");

const priceYear1 = document.getElementById("priceyear1");
const priceYear2 = document.getElementById("priceyear2");
const priceyear3 = document.getElementById("priceyear3");

const checkInputOne = document.getElementById("checkinput1");
const checkInputTwo = document.getElementById("checkinput2");
const checkInputThree = document.getElementById("checkinput3");

const checkTargetOne = document.getElementById("checktarget1");
const checkTargetTwo = document.getElementById("checktarget2");
const checkTargetThree = document.getElementById("checktarget3");

const threeYearOne = document.getElementById("three-year-1");
const threeYearTwo = document.getElementById("three-year-2");
const threeYearThree = document.getElementById("three-year-3");

const fourOutput1 = document.getElementById("option-four-output-1");
const fourOutput2 = document.getElementById("option-four-output-2");
const fourOutput3 = document.getElementById("option-four-output-3");
const fourOutput4 = document.getElementById("option-four-output-4");
const fourOutput5 = document.getElementById("option-four-output-5");
const fourOutput6 = document.getElementById("option-four-output-6");
const fourOutput7 = document.getElementById("option-four-output-7");

const veryLastOne = document.getElementById("verylast1");
const veryLastTwo = document.getElementById("verylast2");
const veryLastThree = document.getElementById("verylast3");

const regexOne = document.getElementById("main-flex1-h5");
const regexTwo = document.getElementById("main-flex2-h5");
const regexThree = document.getElementById("main-flex3-h5");

const inputRegexOne = document.getElementById("main-input-1");
const inputRegexTwo = document.getElementById("main-input-2");
const inputRegexThree = document.getElementById("main-input-3");

let regexLastOutput = false;
let planLastOutput = false;
let match1;
let match2;
let match3;

const regexOnePattern = (/^[A-Za-z]+(?: [A-Za-z]+)*$/);
const regexTwoPattern = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const regexThreePattern = (/^\+?[0-9\s.-]+$/);


let currentOption = 0;

if (currentOption < 0){
    currentOption++;
}else if(currentOption > 4){
    currentOption = currentOption - 1;
}

let arcade = 0;
let advance = 0;
let pro = 0;

let online=0;
let larger=0;
let custom=0;

let lastplan


planOne.addEventListener("click",()=>{

    lastplan = "Arcade";

    planOne.classList.add("sub-click");
    planTwo.classList.remove("sub-click");
    planThree.classList.remove("sub-click");
    
    planLastOutput=true;

    arcade = 9;
    advance = 0;
    pro = 0;

})
planTwo.addEventListener("click",()=>{

    lastplan = "Advance";

    planOne.classList.remove("sub-click");
    planTwo.classList.add("sub-click");
    planThree.classList.remove("sub-click");

    planLastOutput=true;

    arcade = 0;
    advance = 12;
    pro = 0;

})
planThree.addEventListener("click",()=>{

    lastplan = "Pro";

    planOne.classList.remove("sub-click");
    planTwo.classList.remove("sub-click");
    planThree.classList.add("sub-click");

    planLastOutput=true;

    arcade = 0;
    advance = 0;
    pro = 15;
})

function Checkboxwow(){
    if(checkBox.checked){
        
        priceYear1.textContent = "$90/yr";
        priceYear2.textContent = "$120/yr";
        priceyear3.textContent = "$150/yr";

        threeYearOne.textContent = "+$10/yr"
        threeYearTwo.textContent = "+$20/yr"
        threeYearThree.textContent = "+$20/yr"

        lastplanoutput= "(Yearly)";
        fourOutput6.textContent = lastplan + lastplanoutput;

        month.classList.add("switch-color-white");
        year.classList.add("switch-color");
        twoMonth.forEach(text =>{
            text.style.display = "block";
        });  
        
    } else{
        priceYear1.textContent = "$9/mo"
        priceYear2.textContent = "$12/mo"
        priceyear3.textContent = "$15/mo"

        threeYearOne.textContent = "+$1/mo"
        threeYearTwo.textContent = "+$2/mo"
        threeYearThree.textContent = "+$2/mo"

        lastplanoutput= "(Monthly)";
        fourOutput6.textContent = lastplan + lastplanoutput;

        month.classList.remove("switch-color-white");
        year.classList.remove("switch-color");
        twoMonth.forEach(text =>{
            text.style.display = "none";
        });}
}


checkBox.addEventListener("change",()=>{
    Checkboxwow()
});




checkInputOne.addEventListener("change",()=>{
    if(checkInputOne.checked){
        checkTargetOne.classList.add("check-click");
        online =1;
        veryLastOne.classList.add("flex-display");
    }else{
        checkTargetOne.classList.remove("check-click");
        online =0;
        veryLastOne.classList.remove("flex-display");
    }
});

checkInputTwo.addEventListener("change",()=>{
    if(checkInputTwo.checked){
        checkTargetTwo.classList.add("check-click");
        larger =2;
        veryLastTwo.classList.add("flex-display");
    }else{
        checkTargetTwo.classList.remove("check-click");
        larger=0;
        veryLastTwo.classList.remove("flex-display");
    }
});

checkInputThree.addEventListener("change",()=>{
    if(checkInputThree.checked){
        checkTargetThree.classList.add("check-click");
        custom=2;
        veryLastThree.classList.add("flex-display");
    }else{
        checkTargetThree.classList.remove("check-click");
        custom=0;
        veryLastThree.classList.remove("flex-display");
    }
});


function totalPrice(){
    if(checkBox.checked){
        const plan= 10 * (arcade + advance + pro);
        const add = 10 * (online + larger + custom);
        const output = plan + add;
        const lastoutput = "+$" + output +"/yr";

        fourOutput4.textContent = lastoutput;

        fourOutput2.textContent = "+$10/yr";
        fourOutput3.textContent = "+$20/yr";
        fourOutput5.textContent = "+$20/yr";
        
        fourOutput7.textContent = "Total (per year)";


    }else{
        const plan= arcade + advance + pro;
        const add = online + larger + custom;
        const output = plan + add;
        const lastoutput = "+$" + output +"/mo";

        fourOutput4.textContent = lastoutput;
        
        fourOutput2.textContent = "+$1/mo";
        fourOutput3.textContent = "+$2/mo";
        fourOutput5.textContent = "+$2/mo";

        fourOutput7.textContent = "Total (per month)";

    }
}

function changeOutput(){

    if (lastplan == "Arcade" && checkBox.checked){
        fourOutput1.textContent = "$90/yr"
    } else if (lastplan == "Advance" && checkBox.checked){
        fourOutput1.textContent = "$120/yr"
    } else if (lastplan == "Pro" && checkBox.checked){
        fourOutput1.textContent = "$150/yr"
    } else if (lastplan == "Arcade"){
        fourOutput1.textContent = "$9/mo"
    } else if (lastplan == "Advance" ){
        fourOutput1.textContent = "$12/mo"
    } else if (lastplan == "Pro" ){
        fourOutput1.textContent = "$15/mo"
    } 
}


inputRegexOne.addEventListener("input",()=>{
    const regexOneOutput = inputRegexOne.value;
    match1 = regexOnePattern.test(regexOneOutput);
});
inputRegexTwo.addEventListener("input",()=>{
    const regexTwoOutput = inputRegexTwo.value;
    match2 = regexTwoPattern.test(regexTwoOutput);
});
inputRegexThree.addEventListener("input",()=>{
    const regexThreeOutput = inputRegexThree.value;
    match3 = regexThreePattern.test(regexThreeOutput);
});

function regex(){
    
    if (match1 == false){
        regexOne.classList.add("block-display");
        inputRegexOne.classList.add("clicked2");
    } else{
        regexOne.classList.remove("block-display");
        inputRegexOne.classList.remove("clicked2");
    }

    if (match2 == false){
        regexTwo.classList.add("block-display");
        inputRegexTwo.classList.add("clicked2");
    } else{
        regexTwo.classList.remove("block-display");
        inputRegexTwo.classList.remove("clicked2");
    }

    if (match3 == false){
        regexThree.classList.add("block-display");
        inputRegexThree.classList.add("clicked2");
    } else{
        regexThree.classList.remove("block-display");
        inputRegexThree.classList.remove("clicked2");
    }

    if (match1 == true && match2 == true && match3 == true){
        regexLastOutput = true;
    } else{
        regexLastOutput = false;
    }
}


function optionButton (){
    if (currentOption == 0){
        optionTwo.classList.remove("block-display");
        optionOne.classList.remove("none-display");
        
        stepNumbertwo.classList.remove("step-active");
        stepNumberOne.classList.remove("active");
       
        backBtn.classList.remove("block-display");
    }else if(currentOption == 1){
        optionOne.classList.add("none-display");
        optionTwo.classList.add("block-display");
        optionThree.classList.remove("block-display");

        stepNumberOne.classList.add("active");
        stepNumbertwo.classList.add("step-active");
        stepNumberthree.classList.remove("step-active");

        backBtn.classList.add("block-display");
    }else if(currentOption == 2){

        if(planLastOutput == true){
            optionTwo.classList.remove("block-display");
            optionThree.classList.add("block-display");
            optionFour.classList.remove("block-display");
    
            stepNumbertwo.classList.remove("step-active");
            stepNumberthree.classList.add("step-active");
            stepNumberfour.classList.remove("step-active");
    
            nextBtn.classList.remove("none-display")
            confirmBtn.classList.remove("block-display")
        }else{
            currentOption =currentOption-1;
        }

    }else if(currentOption == 3){
        optionThree.classList.remove("block-display");
        optionFour.classList.add("block-display");
        optionFive.classList.remove("flex-display");

        stepNumberthree.classList.remove("step-active");
        stepNumberfour.classList.add("step-active");

        Checkboxwow()
        changeOutput()
        totalPrice();

        confirmBtn.classList.add("block-display");
        nextBtn.classList.add("none-display")
    }else if(currentOption == 4){
        optionFour.classList.remove("block-display");
        optionFive.classList.add("flex-display");

        backBtn.classList.remove("block-display");
        confirmBtn.classList.remove("block-display");
    }
}

nextBtn.addEventListener("click",()=>{

    regex();

    if (regexLastOutput == true){
        currentOption++;
        optionButton();
    } else {
        return false;
    }

})

backBtn.addEventListener("click",()=>{
    currentOption = currentOption - 1;
    optionButton();
})

confirmBtn.addEventListener("click", ()=>{
    currentOption++;
    optionButton();
    buttonContainer.classList.add("none-display")
})

const lastChange = document.getElementById("option-four-change");

lastChange.addEventListener("click",()=>{
    currentOption = 1;
    optionOne.classList.add("none-display");
    optionTwo.classList.add("block-display");
    optionThree.classList.remove("block-display");
    optionFour.classList.remove("block-display");

    confirmBtn.classList.remove("block-display");
    nextBtn.classList.remove("none-display");

    stepNumberOne.classList.remove("step-active");
    stepNumbertwo.classList.add("step-active");
    stepNumberthree.classList.remove("step-active");
    stepNumberfour.classList.remove("step-active");


})
