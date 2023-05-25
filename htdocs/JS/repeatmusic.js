let BtnRepeat = document.querySelector(".BtnRepeat");


BtnRepeat.onclick = () => {
    if(Repeat == false){
        Repeat = true;
        BtnRepeat.classList.add("active");
    }else{
        Repeat = false;
        BtnRepeat.classList.remove("active");
    }
}