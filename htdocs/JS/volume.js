//réglage du volume
let Volume = document.querySelector("#Volume");
let Volume_Show = document.querySelector("#Volume_Show");
Volume.onchange = () => {
    Volume_Show.innerHTML = Volume.value;
    Music.volume = Volume.value /100;
}