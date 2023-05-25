//vérification du sons (clique ou pas)
let BtnPlay = document.querySelector(".BtnPlay");
BtnPlay.onclick = () => {
    if(Piece == false){
        Jouer_sons();
    }
    else{
        Pause();
    }
}

// Fonction pour jouer le sons
function Jouer_sons() {
    Music.play();
    Piece = true;
    BtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    Eql.classList.add("Show_Eql");
}

function Pause() {
    Music.pause();
    Piece = false;
    BtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    Eql.classList.remove("Show_Eql");
}
