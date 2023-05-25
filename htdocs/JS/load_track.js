function load_track(Index){
    Music.src = Tous_Les_Sons[Index].Lien_Music;
    Titre_Music.innerHTML = Tous_Les_Sons[Index].Titre;
    Img_Artiste.src = Tous_Les_Sons[Index].Lien_Image;
    Img_Artiste2.src = Tous_Les_Sons[Index].Lien_Image;
    Artiste.innerHTML = Tous_Les_Sons[Index].Nom_Artiste;

    Music.load();
    Total_Music.innerHTML = Tous_Les_Sons.length;
    EnCours.innerHTML = Index + 1;
    Timer = setInterval(Range_slider, 1000);
}
load_track(Index);

// avancer ou reculer le sons avec la slide bar 
let Bar_Music = document.querySelector("#Bar_Music");
Bar_Music.onchange = () => {
    slider_position = Music.duration * (Bar_Music.value / 100)
    Music.currentTime = slider_position
}

//minuterie de la music
function Range_slider () {
    let position = 0;
    
    if(!isNaN(Music.duration)) {
        position = Music.currentTime * (100 / Music.duration);
        Bar_Music.value = position;

        let Count_Min = Math.floor(Music.currentTime / 60);
        let Count_Sec = Math.floor(Music.currentTime - Count_Min * 60);
        let Time_Min = Math.floor(Music.duration / 60);
        let Time_Sec = Math.floor(Music.duration - Time_Min * 60);

        if (Count_Sec < 10) {
            Count_Sec = "0" + Count_Sec;
        }
        if(Time_Sec < 10) {
            Time_Sec = "0" + Time_Sec;
        }
        if(Count_Min < 10) {
            Count_Min = "0" + Count_Min;
        }
        if(Time_Min < 10) {
            Time_Min = "0" + Time_Min;
        }
        Timeline_Min.textContent = Count_Min + ":" + Count_Sec;
        Timeline_Max.textContent = Time_Min + ":" + Time_Sec;

        //fonction que sera retourner quand la playlist se terminera
        if(Music.ended){
           BtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
           if(Aleatoire == true) {
            if (Music_Auto == 1) {
                Index.Math.random()*Tous_les_sons.length | 0;
                load_track(Index);
                Jouer_sons();
            }
           }else if(Repeat == true){
            if (Music_Auto == 1) {
                console.log('coucou');
                Index += 0;
                load_track(Index);
                Jouer_sons();
            }
           }else{
            if (Music_Auto == 1) {
                Index +=1;
                load_track(Index);
                Jouer_sons();
            }
           }
        }
    }
}
