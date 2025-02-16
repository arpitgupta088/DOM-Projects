const clock = document.getElementById('clock')
// also we can write by:- document.querySelector('#clock')

setInterval(function() {   
    let date = new Date();
    // console.log(date.toLocaleTimeString()); 
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);                                           // 1000 = time in ms
