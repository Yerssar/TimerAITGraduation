// opredelyaem deystv elemnti na stranice
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


// delaem raschet
const currentYear = new Date().getFullYear();
const nextTime = new Date(`June 06 ${currentYear} 00:00:00`);

//ustanavlivaem god na stranicu
year.innerText = currentYear ;

function updateCounter(){

    const currentTime = new Date();

    const diff = nextTime - currentTime;
    
    //perevodim v secundi / min / chasi/ dni
    //perevod v dni
    const daysLeft =  Math.floor(diff / 1000 / 60 / 60 /24);
    //chasov vsego, dalee ostatok ot deleniya na 24 (preobrozovaniya v dni), poluchaem 8 chasov
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor((diff / 1000 / 60) % 24);
    const secondsLeft = Math.floor((diff / 1000 ) % 24);
    // console.log(daysLeft,hoursLeft,minutesLeft,secondsLeft)
    
    days.innerText = daysLeft < 10 ? '0'+daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0'+hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0'+minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0'+secondsLeft : secondsLeft;
}

// ispolzuem raschet 1 raz v secundu (kajduyu secundu)
setInterval(updateCounter, 1000);
