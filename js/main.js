// Variable maken van alle games door class name game
let allGames = document.getElementsByClassName("game");

// Variable maken van alle filters door class name filter
let filters = document.getElementsByClassName("filter");

// Scrollt naar bovenkant van de page
window.scrollTo(0,0);

// Functie die zorgt dat je an 1.5 seconde pas kan scrollen
setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

// Voor alle filters worden gecheckt of ze zijn aangevinkt
for (let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

// Variable voor de checkbox van GTA
let gtaFilter = document.getElementById("checkbox-gta");

// Functie die aan gaat als de checkbox van GTA word geklikt
gtaFilter.onchange = function(){

    // Als de checkbox aan staat word er gekeken welke data category het item heeft, als het "GTA" is krijgt hij "display: block"
    if(gtaFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "GTA"){
                allGames[i].style.display = "block";
            }
        }
    }
        // Als de checkbox uit staat word er gekeken welke data category het item heeft, als het geen "GTA" is krijgt hij "display: none"
    else{
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "GTA"){
                allGames[i].style.display = "none";
            }
        }
    }
}




let hogwardsFilter = document.getElementById("checkbox-hogwards");
hogwardsFilter.onchange = function(){
    if(hogwardsFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "HP"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "HP"){
                allGames[i].style.display = "none";
            }
        }
    }
}

let minecraftFilter = document.getElementById("checkbox-minecraft");
minecraftFilter.onchange = function(){
    if(minecraftFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "MC"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "MC"){
                allGames[i].style.display = "none";
            }
        }
    }
}