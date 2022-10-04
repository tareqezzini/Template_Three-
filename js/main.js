let skills =  document.querySelector('.ourskils');
let progrs = document.querySelectorAll('.progs span');

window.onscroll = function()
{
    if(window.scrollY >= skills.offsetTop - 300)
    {
        progrs.forEach((span) => {
            span.style.width = span.dataset.width;
        })
        
    }
}

//Calcull the stat

let stats =  document.querySelector('.satat');
let statSpans = document.querySelectorAll('.satat .box span');

function startCount(el)
{
    let goal = el.dataset.goal;
    let count = setInterval(() =>
    {
        el.textContent++;
        if(goal == el.textContent)
        {
           clearInterval(count);
        }
    },1)
}

window.onscroll = function()
{
    if(window.scrollY >= stats.offsetTop)
    {
        statSpans.forEach((span) => {
           startCount(span);
        })
        
    }
}

//counter Events
let eventDate = new Date("Nov 10 , 2021  23:59:59").getTime();
let days =document.querySelector(".days");
let hours =document.querySelector(".hours");
let minutes =document.querySelector(".minutes");
let secondes =document.querySelector(".secondes");
let counter = setInterval(()=>
{
    let dateNow = new Date().getTime();

    let defrents = (eventDate - dateNow)/1000;

    let d = Math.floor(defrents /86400);
    if(d<10)
    {
        days.innerHTML = "0" + d;
    }else
    {
        days.innerHTML = d;
    }

    let h = Math.floor((defrents % 86400) / 3600); //60/60/60
    if(h<10)
    {
        hours.innerHTML = "0" + h;
    }else
    {
        hours.innerHTML = h;
    }

   let m= Math.floor((defrents % 3600)/(60));
    if(m<10)
    {
        minutes.innerHTML = "0" + m;
    }else
    {
        minutes.innerHTML = m;
    }
    let s =Math.floor((defrents % 60));
    if(s<10)
    {
        secondes.innerHTML = "0" + s;
    }else
    {
        secondes.innerHTML = s;
    }
    
},1000)