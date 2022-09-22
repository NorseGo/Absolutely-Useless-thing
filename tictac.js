window.addEventListener("DOMContentLoaded",() =>{
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const playerDisplay = document.querySelector(".display");
    const resetButton = document.querySelector("#reset");
    const announcer = document.querySelector(".announce");

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;

    const PLAYERX_WON = "PLAYERX_WON";
    const PLAYERO_WON = "PLAYERO_WON";
    const TIE = "TIE";

    /*
    [0][1][2]
    [3][4][5]
    [6][7][8]
    */

    const winningCondition =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for(let i = 0; i <= 7; i++) {
            const winCondition = winningCondition[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a ==="" || b === "" || c === "") {
                continuee;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
    }

    const announce = (type) => {
        switch(type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO"></span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX"></span> Won';
                break;
            case TIE:
                announcerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const ChangePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === "X" ? "o" : "X";
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameA) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            ChangePlayer();
        }
    }


    tiles.forEach((tile, index) =>{
        tiles.addEventListener("click", () => userAction(tile, index));
    });


    resetButton.addEventListener("click",resetBoard);
});