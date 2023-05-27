'use strict';
document.addEventListener('DOMContentLoaded',function(){
    
    const calcBtn = document.getElementById('btn');
    const clearBtn = document.getElementById('clear');
    const inputs = document.querySelectorAll('input[type="number"]');

    calcBtn.addEventListener("click",()=>{
        let sum = 0;
        let count = 0;

        inputs.forEach((input)=>{
            const value = Number(input.value);
            if(!isNaN(value)){
                sum += value;
                count++;
            }
        });

        const avg = count > 0 ? sum / count : 0;
        
        document.getElementById('answer').textContent = `合計 : ${sum}`;
        document.getElementById('avg').textContent = `平均 : ${avg}`;
    });

    clearBtn.addEventListener("click",()=>{
        inputs.forEach((input) => {
            input.value = 0;
        });
        document.getElementById('answer').textContent = "合計 : ";
        document.getElementById('avg').textContent = "平均 : ";
    });
});

