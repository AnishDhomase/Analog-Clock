"use strict"
const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hrHand = document.querySelector(".hr");
const dateField = document.querySelector(".date");



setInterval(function(){
    let timeNow = new Date();
    let seconds = timeNow.getSeconds();
    let minutes = timeNow.getMinutes();
    let hours = timeNow.getHours();
    let dayNum = Number(timeNow.getDay());
    let day = "";
    let date = timeNow.getDate();
    let month = timeNow.getMonth();
    let year = timeNow.getFullYear();
    switch(dayNum){
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;     
    }
    dateField.innerHTML = `${day}, ${date}/${month+1}/${year}`;


    let secdeg = Number(seconds) * 6;
    secHand.style.transform = `rotate(${secdeg}deg)`;

    let mindeg = (Number(minutes) + Number(seconds)/60) * 6;
    minHand.style.transform = `rotate(${mindeg}deg)`;

    let hrdeg = (Number(hours) + Number(minutes)/60) * 30;
    hrHand.style.transform = `rotate(${hrdeg}deg)`;
},1000)
