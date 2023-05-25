// Sons precedent
let BtnPrev = document.querySelector(".BtnPrev");
BtnPrev.onclick = () => {
    if(Aleatoire == true){
        if(Index > 0){
            Index = Math.random()*Tous_Les_Sons.length | 0;
            load_track(Index);
            Jouer_sons();
        }else{
            Index = Tous_Les_Sons.length;
            Jouer_sons();
            load_track(Index);
        }
    }else {
        if(Index > 0){
            Index -= 1;
            load_track(Index);
            Jouer_sons();
        }else{
            Index = Tous_Les_Sons.length;
            Jouer_sons();
            load_track(Index);
        }
    }
}