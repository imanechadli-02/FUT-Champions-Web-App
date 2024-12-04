const positionSelect = document.getElementById("positionn");
const container = document.getElementById("differente");

positionSelect.addEventListener("change", () => {
    const selectedPosition = positionSelect.value;
    container.innerHTML = ""; // Clear any existing dynamic fields

    if (selectedPosition === "GK") {
        // Add specific fields for GK
        container.innerHTML = `
                    <label for="diving">Diving :</label>
                    <input type="number" id="diving" name="diving" placeholder="Ex: 88" required>

                    <label for="handling">Handling :</label>
                    <input type="number" id="handling" name="handling" placeholder="Ex: 84" required>

                    <label for="kicking">Kicking :</label>
                    <input type="number" id="kicking" name="kicking" placeholder="Ex: 75" required>

                    <label for="reflexes">Reflexes :</label>
                    <input type="number" id="reflexes" name="reflexes" placeholder="Ex: 90" required>

                    <label for="speed">Speed :</label>
                    <input type="number" id="speed" name="speed" placeholder="Ex: 50" required>

                    <label for="positioning">Positioning :</label>
                    <input type="number" id="positioning" name="positioning" placeholder="Ex: 85" required>
                `;
    } else {
        container.innerHTML = `
                    <label for="Pace">Pace :</label>
                    <input type="number" id="Pace" name="Pace" placeholder="Ex: 88" required>

                    <label for="Shooting">Shooting :</label>
                    <input type="number" id="Shooting" name="Shooting" placeholder="Ex: 84" required>

                    <label for="Passing">Passing :</label>
                    <input type="number" id="Passing" name="Passing" placeholder="Ex: 75" required>

                    <label for="Dribling">Dribling :</label>
                    <input type="number" id="Dribling" name="Dribling" placeholder="Ex: 90" required>

                    <label for="defending">defending :</label>
                    <input type="number" id="defending" name="defending" placeholder="Ex: 50" required>

                    <label for="Physical">Physical :</label>
                    <input type="number" id="Physical" name="Physical" placeholder="Ex: 85" required>
                `;
    }
});



let container2 = document.getElementById("players");
const formationSelect = document.getElementById("formation");

formationSelect.addEventListener("change", () => {
    const selectFormation = formationSelect.value;
    container2.innerHTML = "";
    if (selectFormation === "4-4-2") {

        container2.innerHTML = `
                
                <div class="attack">
                    <div class="card" id="ST"></div>
                    <div class="card" id="ST2"></div>
                </div>
                <div class="midle">
                    <div class="card" id="LM" class="cote1"></div>
                    <div class="card" id="CM1"></div>
                    <div class="card" id="CM2"></div>
                    <div class="card" id="RM" class="cote1"></div>
                </div>
                <div class="deffense">
                    <div class="card" id="LB"></div>
                    <div class="card" id="CB1"></div>
                    <div class="card" id="CB2"></div>
                    <div class="card" id="RB"></div>
                </div>
                <div class="gardien">
                    <div class="card" id="GK"></div>
                </div>
            
                `
    } else {
        container2.innerHTML = `
                
                <div class="attack2">
                    <div class="card" id="RW"></div>
                    <div class="card" id="ST"></div>
                    <div class="card" id="LW" class="cote1"></div>
                </div>
                <div class="midle2">
                    <div class="card" id="CM1"></div>
                    <div class="card" id="CM2"></div>
                    <div class="card" id="CM3" class="cote1"></div>
                </div>
                <div class="deffense">
                    <div class="card" id="LB"></div>
                    <div class="card" id="CB1"></div>
                    <div class="card" id="CB2"></div>
                    <div class="card" id="RB"></div>
                </div>
                <div class="gardien">
                    <div class="card" id="GK"></div>
                </div>

            
                `
    }
    // PotionnerPlayer();
    // joueurPosition();

})



// let AllPlayers = [];
// let RemplacementPlayers = [];
// let TerrainPlayers = [];

// le valeur dans le formulaire
//  let varnom = document.getElementById("name").value;
//  let varphoto = document.getElementById("photo").value;
//  let varPosition = document.getElementById("positionn").value;
//  let varNationalite = document.getElementById("nationality").value;
//  let varDrapeau = document.getElementById("flag").value;
//  let varClub = document.getElementById("club").value;
//  let varLogo = document.getElementById("logo").value;
//  let varNote = document.getElementById("rating").value;
//  let varDiving = document.getElementById("diving").value;
//  let varHandling = document.getElementById("handling").value;
//  let varKicking = document.getElementById("Kicking").value;
//  let varReflexes = document.getElementById("reflexes").value;
//  let varSpeed = document.getElementById("speed").value;
//  let varPositionning = document.getElementById("positioning").value;

//  let varPace = document.getElementById("name").value;
//  let varShooting = document.getElementById("name").value;
//  let varPaccing = document.getElementById("name").value;
//  let varDribling = document.getElementById("name").value;
//  let varDefending = document.getElementById("name").value;
//  let varPhysical = document.getElementById("name").value;



// // let AllPlayers = [];

// const addPlayerButton = document.getElementById("submit");

// addPlayerButton.addEventListener("click", () => {
//     // Ensure the dynamic fields are ready before accessing their values
//     const formData = {
//         varnom: document.getElementById("name").value ,
//         varphoto: document.getElementById("photo").value ,
//         varPosition: document.getElementById("positionn").value ,
//         varNationalite: document.getElementById("nationality").value ,
//         varDrapeau: document.getElementById("flag").value ,
//         varClub: document.getElementById("club").value ,
//         varLogo: document.getElementById("logo").value ,
//         varNote: document.getElementById("rating").value ,
//         varDiving: document.getElementById("diving").value  ,
//         varHandling: document.getElementById("handling").value  ,
//         varKicking: document.getElementById("kicking").value  ,
//         varReflexes: document.getElementById("reflexes").value  ,
//         varSpeed: document.getElementById("speed").value  ,
//         varPositionning: document.getElementById("positioning").value  ,
//     };

//     AllPlayers.push(formData);
//     console.log("All Players: ", AllPlayers);
// });