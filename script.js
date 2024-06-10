function Control(audioID, button){
    let audio = document.getElementById(audioID);
    console.log(audio);
    if (audio.paused === true || audio.ended === true){
        audio.play();
        button.innerText =  '||' ;
    }else{
        audio.pause()
        button.innerText = '▶';
    }

    ///esta parte del codigo controla la barra que va aumentando con el audio
    document.getElementById(audioID).addEventListener('timeupdate',function(){
        document.getElementById('progreso' + audioID).style.width = (this.currentTime * 100 / this.duration)+'%';
    });
}

