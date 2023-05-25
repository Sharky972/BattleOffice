//Bouton d'allumage et d'arret
let Left = document.querySelector(".Left");
let Right = document.querySelector(".Right");
let BtnOff = document.querySelector(".BtnOff");
let All_Bouton = document.querySelector(".All_Bouton");
let On = false;

BtnOff.onclick = () => {
    if (On == false) {

        BtnOff.classList.add("On");
        All_Bouton.classList.add("On");
        Left.classList.toggle("Show");
        Right.classList.toggle("Show");
    
        On = true;
    }else {
        BtnOff.classList.remove("On");
        All_Bouton.classList.remove("On");
        On = true;
        Location.reload();
    }
}