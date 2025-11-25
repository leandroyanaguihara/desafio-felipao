class novoHeroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi) {
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDoHeroi = tipoDoHeroi;
    }

    atacar () {
        switch (this.tipoDoHeroi) {
            case 'guerreiro':
                console.log(`O ${this.tipoDoHeroi} atacou usando espada`);
            break;

            case 'mago':
                console.log(`O ${this.tipoDoHeroi} atacou usando magia`);
            break;

            case 'monge':
                console.log(`O ${this.tipoDoHeroi} atacou usando punhos`);
            break;

            case 'ninja':
                console.log(`O ${this.tipoDoHeroi} atacou usando shurikens`);
            break;
        }
    }
}

let heroiUm = new novoHeroi('Gandalf', 60, 'mago');
let heroiDois = new novoHeroi('Cloud', 25, 'guerreiro');
let heroiTres = new novoHeroi('Tifa', 19, 'monge');
let heroiQuartro = new novoHeroi('Shinobi', 18, 'ninja');

heroiUm.atacar();
heroiDois.atacar();
heroiTres.atacar();
heroiQuartro.atacar();