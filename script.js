const value=document.getElementById("value");
const error=document.getElementById("error");
const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");
const clearBtn = document.getElementById("clear-btn");

let count = 0;
clearBtn.style.display="none";
error.style.display="none";

decrementBtn.addEventListener("click",()=>{
    if(count==0){
        error.style.display = "block";
        clearBtn.style.display="none";
    }
    else{
        error.style.display="none";
        clearBtn.style.display="block";
        --count;
        if (count == 0) {
            clearBtn.style.display="none";
        }
        value.textContent=count;
    }
})

incrementBtn.addEventListener("click",()=>{
    error.style.display = "none";
    clearBtn.style.display="block";
    ++count;
    value.textContent=count;
})

clearBtn.addEventListener("click",()=>{
    error.style.display = "none";
    clearBtn.style.display="none";
    count=0;
    value.textContent=count;
})