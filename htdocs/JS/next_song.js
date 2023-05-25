// Sons suivant
let BtnNext = document.querySelector(".BtnNext");
BtnNext.onclick = () => {
    if(Aleatoire == true){
        if(Index < Tous_Les_Sons.length -1){
            Index = Math.random()*Tous_Les_Sons.length | 0;
            load_track(Index);
            Jouer_sons();
        }else{
            Index +=1;
            load_track(Index);
            Jouer_sons();
        }
    }else {
        if(Index < Tous_Les_Sons.length -1){
            Index += 1;
            load_track(Index);
            Jouer_sons();
        }else{
            Index = 0;
            load_track(Index);
            Jouer_sons();
        }
    }
}