var player1_score = 0
        var player2_score = 0
        var player1_health = 100
        var player2_health = 100

        function myFunction() {

            while (player1_health > 0 && player2_health > 0) {
                var random1 = Math.floor(Math.random() * 6)
                var random2 = Math.floor(Math.random() * 6)
                player1_health = player1_health - random1
                player2_health = player2_health - random2
                if (player1_health <= 0) {
                    player2_score = player2_score + 1;
                    setTimeout(() => {
                        wincheck()
                    }, 500);
                }
                if (player2_health <= 0) {
                    player1_score = player1_score + 1;
                    setTimeout(() => {
                        wincheck()
                    }, 500);
                }
                winner.innerHTML = ""
                some.innerHTML = "NEXT ROUND"
                player1.innerHTML = "Player1 score" + " " + player1_score + " " + "having health left this time " + player1_health
                player2.innerHTML = "Player2 score" + " " + player2_score + " " + "having health left this time " + player2_health
            }

        }
        function wincheck() {
            if (player2_score == 3) {
                winner.innerHTML = "PLAYER 2 WON"
                some.innerHTML = "PLAY AGAIN"
                player2_score = 0
                player1_score = 0
            }
            else if (player1_score == 3) {
                winner.innerHTML = "PLAYER 1 WON"
                some.innerHTML = "PLAY AGAIN"
                player2_score = 0
                player1_score = 0
            }

            player1_health = 100
            player2_health = 100
        }