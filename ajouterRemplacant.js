function misajour(){

    playersList = document.getElementById("players-list");
    let storedPlayers = JSON.parse(localStorage.getItem("AllPlayers")) || [];
    // let i ;
    console.log('test a');

    playersList.innerHTML = "";
    if (storedPlayers.length === 0) {
        console.log('test if');
        console.log("Aucun joueur trouvé dans le localStorage.");
    } else {
        console.log('test else');

        storedPlayers.forEach((player) => {
            console.log('test for');
            const playerDiv = document.createElement("div");
            playerDiv.className = "player-card";

            if (player.varPosition === "GK") {
                playerDiv.innerHTML = `
                                <div class="player-image">
                                <div class="player-stats">
                                    <div class="rating">
                                        <b>
                                            <p>${player.varNote}</p>
                                        </b>
                                        <b>
                                            <p>${player.varPosition}</p>
                                        </b>
                                    </div>
                                </div>
                                <img src=${player.varphoto} alt="">
                
                                </div>
                                <div class="player-info">
                                    <p class="player-name">${player.varnom}</p>
                                    <div class="attributes">
                                        <table>
                                            <tr>
                                                <th>DV</th>
                                                <th>HDL</th>
                                                <th>KCK</th>
                                                <th>REF</th>
                                                <th>SPD</th>
                                                <th>POS</th>
                                            </tr>
                                            <tr>
                                                <td>${player.varDiving}</td>
                                                <td>${player.varHandling}</td>
                                                <td>${player.varKicking}</td>
                                                <td>${player.varReflexes}</td>
                                                <td>${player.varSpeed}</td>
                                                <td>${player.varPositionning}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="icons">
                                        <img src=${player.varDrapeau} alt="flag">
                                        <img src=${player.varLogo} alt="logo">
                                    </div>
                                </div>
                            `
                alert("joueur ajouter avec succes")
            }
            else {
                playerDiv.innerHTML = `
                            <div class="player-image">
                            <div class="player-stats">
                                <div class="rating">
                                    <b>
                                        <p>${player.varNote}</p>
                                    </b>
                                    <b>
                                        <p>${player.varPosition}</p>
                                    </b>
                                </div>
                            </div>
                            <img src=${player.varphoto} alt="">
            
                            </div>
                            <div class="player-info">
                                <p class="player-name">${player.varnom}</p>
                                <div class="attributes">
                                    <table>
                                        <tr>
                                            <th>PAC</th>
                                            <th>SHO</th>
                                            <th>PAS</th>
                                            <th>DRI</th>
                                            <th>DEF</th>
                                            <th>RHY</th>
                                        </tr>
                                        <tr>
                                            <td>${player.varPace}</td>
                                            <td>${player.varShooting}</td>
                                            <td>${player.varPassing}</td>
                                            <td>${player.varDribbling}</td>
                                            <td>${player.varDefending}</td>
                                            <td>${player.varPhysical}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="icons">
                                    <img src=${player.varDrapeau} alt="flag">
                                    <img src=${player.varLogo} alt="logo">
                                </div>
                            </div>
                        ` }
            playersList.appendChild(playerDiv);
        });
    }
}
















let joueur = document.querySelector(".player-card");
 joueur.addEventListener("click" , ()=>{
    let nom = document.querySelector(".player-name").value;
    console.log(nom)
 })