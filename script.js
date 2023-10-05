let hor = document.getElementById('hour');
let mint = document.getElementById('minite');
let sec = document.getElementById('secend');
function getTime(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    let hRotetion = 30*hr + mn/2;
    let mnRotetion = 6*mn;
    let scRotetion = 6*sc;

    hor.style.transform = `rotate(${hRotetion}deg)`;
    mint.style.transform = `rotate(${mnRotetion}deg)`;
    sec.style.transform = `rotate(${scRotetion}deg)`;
    

}
setInterval(getTime,1000);