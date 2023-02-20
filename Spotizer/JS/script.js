let Img_Artiste = document.querySelector(".Img_Artiste");
let Img_Artiste2 = document.querySelector(".Img_Artiste2");
let Eql = document.querySelector(".Equiliser");
let Titre_Music = document.querySelector("#Titre_Music");
let Artiste = document.querySelector("#Artiste_Music");
let EnCours = document.querySelector("#EnCours");
let Total_Music = document.querySelector("#Total_Music");
let Timeline_Min = document.querySelector("#Timeline_Min");
let Timeline_Max = document.querySelector("#Timeline_Max");

let Timer;
let Music_Auto = 0;
let Index = 0;
let Piece = false;
let Aleatoire = false;

// Creer les sons de la liste dans un tableau

let Music = document.createElement("audio");


// tout les sons de la liste dans un tableau

let Tous_Les_Sons =[
    //égale au nombre de music 
    {
    Nom_Artiste: "Naza",
    Lien_Music: "audio/Naza - Sac A Dos (Clip Officiel).mp3",
    Lien_Image: "css/images/carro.jpg",
    Titre: "Sac A Dos",

    },
    {
        Nom_Artiste: "Scarface",
        Lien_Music: "audio/Push It To The Limit (scarface).mp3",
        Lien_Image: "css/images/carro.jpg",
        Titre: "Push it to the limit",
    
    },
    {
        Nom_Artiste: "Lorenzo",
        Lien_Music: "audio/Coco.mp3",
        Lien_Image: "css/images/carro.jpg",
        Titre: "Coco",
    
    },
    {
        Nom_Artiste: "AmineMaTue",
        Lien_Music: "audio/Aminematue - España (Reprod by Benji95).mp3",
        Lien_Image: "css/images/carro.jpg",
        Titre: "La Roja",
    
    },
    {
        Nom_Artiste: "JeanJass",
        Lien_Music: "audio/Un truc.mp3",
        Lien_Image: "css/images/carro.jpg",
        Titre: "Un truc",
    
    }
    
];

//toutes les fonctions

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
            Index = Math.random()*Tous_Les_Sons.length | 0;
            load_track(Index);
            Jouer_sons();
        }else{
            Index = 0;
            load_track(Index);
            Jouer_sons();
        }
    }
}

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

//réglage du volume
let Volume = document.querySelector("#Volume");
let Volume_Show = document.querySelector("#Volume_Show");
Volume.onchange = () => {
    Volume_Show.innerHTML = Volume.value;
    Music.volume = Volume.value /100;
}

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

//Playlist
let Titre1 = document.querySelector(".Titre1");
let Titre2 = document.querySelector(".Titre2");
let Titre3 = document.querySelector(".Titre3");
let Titre4 = document.querySelector(".Titre4");
let Titre5 = document.querySelector(".Titre5");

Titre1.innerHTML = Tous_Les_Sons[0].Titre;
Titre2.innerHTML = Tous_Les_Sons[1].Titre;
Titre3.innerHTML = Tous_Les_Sons[2].Titre;
Titre4.innerHTML = Tous_Les_Sons[3].Titre;
Titre5.innerHTML = Tous_Les_Sons[4].Titre;

let Artiste1 = document.querySelector(".Artiste1")
let Artiste2 = document.querySelector(".Artiste2")
let Artiste3 = document.querySelector(".Artiste3")
let Artiste4 = document.querySelector(".Artiste4")
let Artiste5 = document.querySelector(".Artiste5")

Artiste1.innerHTML = Tous_Les_Sons[0].Nom_Artiste;
Artiste2.innerHTML = Tous_Les_Sons[1].Nom_Artiste;
Artiste3.innerHTML = Tous_Les_Sons[2].Nom_Artiste;
Artiste4.innerHTML = Tous_Les_Sons[3].Nom_Artiste;
Artiste5.innerHTML = Tous_Les_Sons[4].Nom_Artiste;

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