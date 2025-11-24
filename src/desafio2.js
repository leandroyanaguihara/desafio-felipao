let vitorias = 20;
let derrotas = 10;

let saldoVitorias = saldoRanqueadas(vitorias, derrotas);

let nivel = nivelDoHeroi(saldoVitorias);

function saldoRanqueadas(win, lose) {
    return win - lose;
}

function nivelDoHeroi(saldo) {
    switch (true) {
        case (saldo <= 10):
            return "Ferro";
        case (saldo >= 11 && saldo <= 20):
            return "Bronze";
        case (saldo >= 21 && saldo <= 50):
            return "Prata";
        case (saldo >= 51 && saldo <= 80):
            return "Ouro";
        case (saldo >= 81 && saldo <= 90):
            return "Diamante";
        case (saldo >= 91 && saldo <= 100):
            return "Lendário";
        case (saldo >= 101):
            return "Imortal";
    }
}
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);