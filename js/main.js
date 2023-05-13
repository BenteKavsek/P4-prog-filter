let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

for (let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let gtaFilter = document.getElementById("checkbox-gta");
gtaFilter.onchange = function(){
    if(gtaFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if (allGames[i].dataset.category === "GTA"){
                allGames[i].style.display = "block";
            }
        }
    }
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