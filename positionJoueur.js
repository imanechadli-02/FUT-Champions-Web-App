
const cards = document.querySelectorAll('.card');
// const player = document.getElementById('GK')
const varPosition = document.getElementById("positionn").value;
let storedPlayers = JSON.parse(localStorage.getItem('AllPlayers')) || [];

function joueurPosition(player, idplayer) {


    // console.log("test 4");
    if (player.varPosition === "GK") {
        idplayer.innerHTML = `
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
        idplayer.innerHTML = `
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
                `;
        alert("joueur ajouter avec succes")

    }

    // AllPlayers.push(player);
    // console.log("All Players: ", AllPlayers);
    // localStorage.setItem("AllPlayers", JSON.stringify(AllPlayers));

    misajour();



}