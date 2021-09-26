let boom = new Audio('audio/boom.wav');
let clap = new Audio('audio/clap.wav');
let hihat = new Audio('audio/hihat.wav');
let kick = new Audio('audio/kick.wav');
let openhat = new Audio('audio/openhat.wav');
let ride = new Audio('audio/ride.wav');
let snare = new Audio('audio/snare.wav');
let tink = new Audio('audio/tink.wav');
let tom = new Audio('audio/tom.wav');

const keys1 = document.getElementById('keys1');
const keys2 = document.getElementById('keys2');
const keys3 = document.getElementById('keys3');
const keys4 = document.getElementById('keys4');
const keys5 = document.getElementById('keys5');
const keys6 = document.getElementById('keys6');
const keys7 = document.getElementById('keys7');
const keys8 = document.getElementById('keys8');
const keys9 = document.getElementById('keys9');

function glowFun(keysname) {
    keysname.classList.add('glow');
    setTimeout(() => {
        keysname.classList.remove('glow'); 
    }, 200);
}

function keycheck(key){
    if(key.keyCode == '65' ||key =='65'){
        let keysname = keys1;
        glowFun(keysname);
        clap.currentTime=0;
        clap.play();
    }
    else if (key.keyCode =='83' ||key =='83'){
        let keysname = keys2;
        glowFun(keysname);
        hihat.currentTime=0;
        hihat.play();
    }
    else if (key.keyCode =='68' ||key =='68'){
        let keysname = keys3;
        glowFun(keysname);
        kick.currentTime=0;
        kick.play();
    }
    else if (key.keyCode =='70' ||key =='70'){
        let keysname = keys4;
        glowFun(keysname);
        openhat.currentTime=0;
        openhat.play();
    }
    else if (key.keyCode =='71' ||key =='71'){
        let keysname = keys5;
        glowFun(keysname);
        boom.currentTime=0;
        boom.play();
    }
    else if (key.keyCode =='72' ||key =='72'){
        let keysname = keys6;
        glowFun(keysname);
        ride.currentTime=0;
        ride.play();
    }
    else if (key.keyCode =='74' ||key =='74'){
        let keysname = keys7;
        glowFun(keysname);
        snare.currentTime=0;
        snare.play();
    }
    else if (key.keyCode =='75' ||key =='75'){
        let keysname = keys8;
        glowFun(keysname);
        tom.currentTime=0;
        tom.play();
    }
    else if (key.keyCode =='76' ||key =='76'){
        let keysname = keys9;
        glowFun(keysname);
        tink.currentTime=0;
        tink.play();
    }
}

window.addEventListener('keydown', keycheck,false);