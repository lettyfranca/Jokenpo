/**
 * Jokenpô com JavaScript
 * @author Letícia França
 */

function jogar() {
    if (document.querySelector("#pedra").checked == false && document.querySelector("#papel").checked == false && document.querySelector("#tesoura").checked == false) {
        alert("Selecione uma opção!")
    } else {
        //lógica principal
        let sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.querySelector("#pc").src = "/img/pcpedra.png";
                break;
            case 1:
                document.querySelector("#pc").src = "/img/pcpapel.png";
                break;
            case 2:
                document.querySelector("#pc").src = "/img/pctesoura.png";
                break;
        }
        //verificar o resultado do jogo
        if ((document.querySelector("#pedra").checked == true && sorteio == 0) || (document.querySelector("#papel").checked == true && sorteio == 1) || (document.querySelector("#tesoura").checked == true && sorteio == 2)){
            document.querySelector("#placar").innerHTML = "Empate";
        } else if ((document.querySelector("#pedra").checked == true && sorteio == 2) || (document.querySelector("#papel").checked == true && sorteio == 0) || (document.querySelector("#tesoura").checked == true && sorteio == 1)){ 
            document.querySelector("#placar").innerHTML = "Jogador Venceu";
        } else {
            document.querySelector("#placar").innerHTML = "O computador venceu.";
        }
    }
}

function resetar() {
    document.querySelector("#pc").src = "/img/pc.png";
    document.querySelector("#placar").innerHTML = "";
}