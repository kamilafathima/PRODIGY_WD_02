let button_play = document.getElementById("play")
let button_reset = document.getElementById("reset")
let button_lap=document.getElementById("lap")
let laps=document.getElementById("laps")
let clear_all=document.querySelector(".CLEAR_ALL")

s = document.getElementById("sec")
m = document.getElementById("min")
ms = document.getElementById("ms")

let isplay = true
let msec = 0
let min = 0
let sec = 0
let timerid = null
let count=0
let play = () => {
    if (isplay) {
        button_play.innerHTML = "PAUSE"
        isplay = false;
        button_reset.style.display="none";
        timerid=setInterval(StartTimersec, 10);
    }
    else {
        button_play.innerHTML = "PLAY"
        isplay = true;
        if(timerid!==null){
            clearInterval(timerid);
        }
      button_reset.style.display="block";  
    }
    
}
let reset = ()=>
    {   timerid=setInterval(StartTimersec, 10);
        if(timerid!==null){
        clearInterval(timerid);
        count=0;

        m.innerHTML="00:"
        s.innerHTML="00:"
        ms.innerHTML="00"
        }
    }

button_play.addEventListener('click', play);
button_reset.addEventListener('click',reset);

function StartTimersec()
{
    msec++;
    if (msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let msec_no=msec<10?`0${msec}`:msec;
    let sec_no=sec<10?`0${sec}`:sec;
    let min_no=min<10?`0${min}`:min;
    m.innerHTML=`${min_no}:`;
    s.innerHTML=`${sec_no}:`;
    ms.innerHTML=`${msec_no}`;
}

  const lap= ()=>{
    clear_all.style.display="block";
const li=document.createElement("li");
const No=document.createElement("span");
const timestamp=document.createElement("span");
const button=document.createElement("button");



li.setAttribute("class","lap_interval");
No.setAttribute("class","No");
timestamp.setAttribute("class","time_stamp");



No.innerHTML=`# ${++count}`;
timestamp.innerHTML=`${m.innerHTML}  ${s.innerHTML} ${ms.innerHTML}`;

li.append(No,timestamp);
laps.append(li);

}
const clearall=()=>{
   laps.innerHTML='';
   laps.append(clear_all);
   clear_all.style.display="none";
   count=0;
}

button_lap.addEventListener("click",lap);
clear_all.addEventListener("click",clearall);







