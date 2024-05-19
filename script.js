function playRockPaperScissor(player1, player2) {
    const opcao1 = "Pedra";
    const opcao2 = "Papel";
    const opcao3 = "Tesoura";

    if (player1 == player2) {
        return "Empate!";
    } else if (
        (player1 == opcao1 && player2 == opcao3) ||
        (player1 == opcao2 && player2 == opcao1) ||
        (player1 == opcao3 && player2 == opcao2)
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

console.log(playRockPaperScissor("Pedra", "Papel"));