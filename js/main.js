const initApp = ()=>{

    const currentValueElem = document.querySelector('.currentvalue');
    const previousValueElem = document.querySelector('.previousvalue');
    let itemArray = [];
    const equationArray = [];
    let newNumberFlag = false;

    const inputButtons = document.querySelector('.number');
    inputButtons.forEach( button =>{
        button.addEventListener('click' ,(event)=>{
            const newInput = event.target.textContent;
            if(newNumberFlag){
                currentValueElem.value = newInput;
                newNumberFlag = false;

            } else{
                currentValueElem.value = currentValueElem.value == 0 ? newInput : `${currentValueElem.value} ${newInput}`;
            }
        })
    })

}


document.addEventListener('DOMContentLoaded' ,initApp);