const toggleBox = document.querySelector(".togglebox");
const toggleBtn = document.querySelector(".toggleBtn");
const price = document.querySelector("#price");
const slider = document.querySelector("#mslider");
const views = document.querySelector("#views");
const pageViews = ["10K","50K","100K", "500K" ,"1M"];
let perMonth = [8, 12 , 16, 24, 36];
let isYearly = false;

function change(){
    updatePrice();
    views.innerHTML = pageViews[slider.value]; 
    let value = slider.value * 25;

    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
    
};

toggleBox.addEventListener("click", () => {
    toggleBox.classList.toggle("active");
    if(toggleBox.classList.contains("active")){
        if(isYearly == false){
            isYearly = true;
        }
        else{
            isYearly = false
        }
        
    }

    if(!toggleBox.classList.contains("active")){
        if(isYearly == true){
            isYearly = false;
        }
        else{
            isYearly = true;
        }
        
    }
    updatePrice()
    
});

function updatePrice() {
    if(isYearly){
        price.innerHTML = perMonth[slider.value] * 0.75;
        
    }
    else{
        price.innerHTML = perMonth[slider.value];
    }
}



