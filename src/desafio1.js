const prompt = require("prompt-sync")();
let exp = 0
let nome = "";


console.log(`Bem vindo ${nome}, aqui neste menu você escolhe seu nome, experiência e vê seu nível.`);

for (let menu = 0; menu < 3;) {
    console.log('1 - Alterar nome do Herói');
    console.log('2 - Adicionar pontos de experiência');
    console.log('3 - Sair do menu e descobrir nível do Herói');

    menu = prompt('Escolha uma opção do menu: ');
    switch (menu) {
        case '1':
            nome = prompt('Digite o nome do Herói: ');
            break;

        case '2':
            exp = parseInt(prompt('Digite a quantidade de pontos de experiência a adicionar: '));
            if (isNaN(exp) || exp < 0) {
                console.log('Por favor, insira um valor válido de experiência.');
                exp = 0;
            }
            break;

        case '3':
            switch (true) {
                case (exp <= 1000):
                console.log(`O Herói de nome ${nome}, está no nível de Iniciante.`);
                break;

                case (exp > 1000 && exp <= 2000):
                console.log(`O Herói de nome ${nome}, está no nível de Bronze.`);
                break;

                case (exp > 2000 && exp <= 5000):
                console.log(`O Herói de nome ${nome}, está no nível de Prata.`);
                break;

                case (exp > 5000 && exp <= 7000):
                console.log(`O Herói de nome ${nome}, está no nível de Ouro.`);
                break;

                case (exp > 7000 && exp <= 8000):
                console.log(`O Herói de nome ${nome}, está no nível de Platina.`);
                break;

                case (exp > 8000 && exp <= 9000):
                console.log(`O Herói de nome ${nome}, está no nível de Ascendente.`);
                break;

                case (exp > 9000 && exp <= 10000):
                console.log(`O Herói de nome ${nome}, está no nível de Imortal.`);
                break;

                case (exp > 10000):
                console.log(`O Herói de nome ${nome}, está no nível de Radiante.`);
                break;
            }
    }
}
