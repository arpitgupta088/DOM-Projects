const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#';
    for (let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
const startChangingColor = function (){

    function changeByColor(){
    document.body.style.backgroundColor = randomColor();
    }
    if(intervalId == null){  //agr id null hai tabhi usme color add kro
      intervalId = setInterval(changeByColor, 1000);
    }
};
const stopChangingColor = function (){
    clearInterval(intervalId);    //clear krdiya
    intervalId = null;  //itervalid ki value ko derefence kiya h
}

document.querySelector('#start').addEventListener
('click', startChangingColor);
document.querySelector('#stop').addEventListener
('click', stopChangingColor);
