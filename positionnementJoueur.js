function PotionnerPlayer() { /////////////////////////
    const cards = document.querySelectorAll('.card');
    const varPosition = document.getElementById("positionn").value;
    // console.log("test");

    cards.forEach((card) => {
        if (varPosition === 'GK') {
            card.innerHTML = `
            <div class="player-image">
                <div class="player-stats">
                    <div class="rating">
                        <b>
                            <p>90</p>
                        </b>
                        <b>
                            <p>CF</p>
                        </b>
                    </div>
                </div>
                <img src="../images/téléchargement-removebg-preview.png" alt="">

            </div>
            <div class="player-info">
                <p class="player-name">Nom de joueur</p>
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
                            <td>80</td>
                            <td>87</td>
                            <td>90</td>
                            <td>94</td>
                            <td>33</td>
                            <td>64</td>
                        </tr>
                    </table>
                </div>
                <div class="icons">
                    <img src="https://cdn.sofifa.net/flags/ar.png" alt="flag">
                    <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="logo">
                </div>
            </div>
        `} else {
            card.innerHTML = `
            <div class="player-image">
                <div class="player-stats">
                    <div class="rating">
                        <b>
                            <p>90</p>
                        </b>
                        <b>
                            <p>CF</p>
                        </b>
                    </div>
                </div>
                <img src="../images/téléchargement-removebg-preview.png" alt="">

            </div>
            <div class="player-info">
                <p class="player-name">Nom de joueur</p>
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
                            <td>80</td>
                            <td>87</td>
                            <td>90</td>
                            <td>94</td>
                            <td>33</td>
                            <td>64</td>
                        </tr>
                    </table>
                </div>
                <div class="icons">
                    <img src="https://cdn.sofifa.net/flags/ar.png" alt="flag">
                    <img src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="logo">
                </div>
            </div>
                 `
        }

    });
}

