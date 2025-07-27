const stratbtn=document.getElementById('start');
const stopbtn=document.getElementById('stop');

let colorGenerator=function(){
    const hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++){
        color+=hex[Math.floor((Math.random()*16))];
    }
     return color;
}

let interValid=null;

stratbtn.addEventListener('click',function(){
    if(interValid===null){
        interValid=setInterval(function(){
            document.body.style.backgroundColor=colorGenerator();
        },1000)
    }
})

stopbtn.addEventListener('click',function(){
    clearInterval(interValid);
    interValid=null;
})
