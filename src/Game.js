'use strict';

const Player = require('./Player.js');

function Game() {
    const playerOne = new Player();
    const playerTwo = new Player();

    function incrementScoreFor(player) {
        let increment = 15;

        if (player.score >= 30)
            increment = 10;
        player.score += increment;
    }

    return {
        incrementScoreForFirstPlayer: () => {
            incrementScoreFor(playerOne);
        },
        incrementScoreForSecondPlayer : () =>{
            incrementScoreFor(playerTwo);
        },
        whoWins: () => {
            if (playerOne.score == 50) return 'PLAYER ONE';
            if (playerTwo.score == 50) return 'PLAYER TWO';
            return 'NONE';
        },
        playersScores: () => {
            if (playerOne.score == 50 && playerTwo.score == 40) return 'AD - 40';
            if (playerOne.score == 40 && playerTwo.score == 40) return 'Deuce';
            return `${playerOne.score} - ${playerTwo.score}`;
        }
    }
}

module.exports = Game;
