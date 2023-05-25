// Jouer la musique Aleatoirement
let BtnRandom = document.querySelector(".BtnRandom");
BtnRandom.onclick = () => {
    if(Aleatoire == false){
        Aleatoire =true;
        BtnRandom.classList.add("active");
    }else{
        Aleatoire = false;
        BtnRandom.classList.remove("active");
    }
}