let AllPlayers = [];
let RemplacementPlayers = [];
let TerrainPlayers = [];

const addPlayerButton = document.getElementById("submit");

function validNumber(num) {
    if (num < 0 || num > 100) {
        return false;
    }
    return true;
}

addPlayerButton.addEventListener("click", () => {
    const varPosition = document.getElementById("positionn").value; // Fetch inside callback

    // let nameJ = document.getElementById("name").value;

    let is_valid = true;

    let ratingJ = document.getElementById("rating").value;

    if (!validNumber(ratingJ)) {
        document.getElementById("rating").style.borderColor = "red";
        is_valid = false;
        alert("rating invalid !! ");
    }


    if (is_valid) {


        // Initialize formData
        let formData = {
            varnom: document.getElementById("name").value,
            varphoto: document.getElementById("photo").value,
            varPosition: varPosition,
            varNationalite: document.getElementById("nationality").value,
            varDrapeau: document.getElementById("flag").value,
            varClub: document.getElementById("club").value,
            varLogo: document.getElementById("logo").value,
            varNote: document.getElementById("rating").value,
        };

        // Add position-specific stats to formData
        if (varPosition === "GK") {
            formData.varDiving = document.getElementById("diving").value;
            formData.varHandling = document.getElementById("handling").value;
            formData.varKicking = document.getElementById("kicking").value;
            formData.varReflexes = document.getElementById("reflexes").value;
            formData.varSpeed = document.getElementById("speed").value;
            formData.varPositionning = document.getElementById("positioning").value;
        } else {
            formData.varPace = document.getElementById("Pace").value;
            formData.varShooting = document.getElementById("Shooting").value;
            formData.varPassing = document.getElementById("Passing").value;
            formData.varDribbling = document.getElementById("Dribling").value;
            formData.varDefending = document.getElementById("defending").value;
            formData.varPhysical = document.getElementById("Physical").value;
        }
        
        AllPlayers.push(formData);
        console.log("All Players: ", AllPlayers);
        localStorage.setItem("AllPlayers", JSON.stringify(AllPlayers));
    
        let idplayer;
    
        switch (formData.varPosition) {
            case "GK": idplayer = document.getElementById("GK");
                break;
            case "RB": idplayer = document.getElementById("RB");
                break;
            case "CB1": idplayer = document.getElementById("CB1");
                break;
            case "CB2": idplayer = document.getElementById("CB2");
                break;
    
            case "LB": idplayer = document.getElementById("LB");
                break;
            case "RM": idplayer = document.getElementById("RM");
                break;
            case "CM2": idplayer = document.getElementById("CM2");
                break;
            case "CM1": idplayer = document.getElementById("CM1");
                break;
            case "CM3": idplayer = document.getElementById("CM3");
                break;
            case "LM": idplayer = document.getElementById("LM");
                break;
            case "ST2": idplayer = document.getElementById("ST2");
                break;
            case "ST": idplayer = document.getElementById("ST");
                break;
            case "LW": idplayer = document.getElementById("LW");
                break;
            case "RW": idplayer = document.getElementById("RW");
                break;
    
    
    
        }
    
        joueurPosition(formData, idplayer);
    }else{
        alert("donnee invalid");
    }


});
