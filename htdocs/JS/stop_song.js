//Stopper le sons
let Btn_Volume = document.querySelector(".Btn_Volume");
let Mute = false;
Btn_Volume.onclick = () => {
    if (Mute == false) {
        Volume_Show.innerHTML = Volume.value = 25;
        Music.volume = Volume.value / 100;
        Btn_Volume.innerHTML = '<i class="fa-solide fa-volume-mute Btn_Volume"></i>';
        Mute = true;
    }else{
        Volume_Show.innerHTML = Volume.value = 25;
        Music.volume = Volume.value / 100;
        Btn_Volume.innerHTML = '<i class="fa-solide fa-mute fa-volume-low Btn_Volume"></i>';
        Mute = false;
    }
}