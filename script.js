(function () {
    let screenInput = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equalBtn = document.querySelector('.btn-equal');
    let clearBtn = document.querySelector('.btn-clear');

    equalBtn.addEventListener('click', (e) => {
        if(screenInput.value === ''){
            screenInput.value = '';
        } else {
            let answer = eval(screenInput.value);
            screenInput.value = answer;
        }
    })
    clearBtn.addEventListener('click', (e) => {
        screenInput.value = '';
        
    })
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // added condition here to check if btn clicked is not equal or clear btn
            if(e.target.dataset.num){
                let value = e.target.dataset.num;
                screenInput.value += value;
            }
        })
    })
    
})()


// let inputScreen = document.querySelector('.screen');
// let buttons = document.querySelectorAll('.btn');
// const num = [0, 1,2,3,4,5,6,7,8,9]

// buttons.forEach((button) => {
//     button.addEventListener('click',(e) => {
//         console.log('clicked',e.target.innerHTML)
//         if(num.includes(e.target.innerHTML)){
//             inputScreen.value += e.target.innerHTML
//         }
//         console.log('here', inputScreen.value);
//     })
// })
