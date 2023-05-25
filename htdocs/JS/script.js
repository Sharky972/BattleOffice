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
let Music_Auto = 1;
let Index = 0;
let Piece = false;
let Aleatoire = false;
let Repeat = false;

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

