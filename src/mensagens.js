const help = [{"Objetivo" : `O uso dos métodos HTTP é necessário para a construção e utilização de API's, que são uma das principais formas de conectarmos aplicações a suas bases de dados.       Uma requisição HTTP pode ser feita de diferentes formas. Casa requisição do *jogo* O Mistério do Hotel TTP segue uma pequena documentação com a seguinte estrutura:   **Método HTTP** -  Característica da requisição. Exemplo de corpo da requisição.`},

{"POST Suspeitos" : `POST http://localhost:3000/suspeitos      O nome deve ser passado no corpo da requisição. Algumas requisições em Suspeito geram respostas com dicas através da resposta 418 e adicionar uma pessoa que tenha um bom álibi ou que claramente seja inocente vai reduzir **um ponto de credibilidade** com a inspetora Lovelace. Se você perder três pontos de credibilidade estará fora do caso e a investigação seguirá sem você!
Toda requisição 404 acontece por conta de erro na URL da requisição.`},

{"POST Evidencias" : `POST http://localhost:3000/evidencias.   Caso a evidência não esteja em posse do jogador ou não tenha *fundamento* vai reduzir a credibilidade com a investigadora Lovelace, sendo negada.  A evidência deve ser passada no corpo com Nome Hora e Quarto. Onde hora e local servem para evitar que o jogador só chute evidencias. Quarto aceita um número.Evidência aceita texto.Hora aceita um número inteiro entre 0 e 23.        Exemplo de corpo:{Evidência: Bola de Futebol,  Quarto: 708,  Hora: 22} `},

{"POST Culpado" : `POST http://localhost:3000/culpado.    É o comando para enviar a resposta final. A pessoa culpada deve ser gerada com nome e uma lista de evidências. Caso a pessoa não seja culpada o jogador receberá uma negativa da investigadora Lovelace e perderá **um ponto decredibilidade.** Então é necessário cuidado para fazer sua acusação! Se você perder três pontos de credibilidade estará fora do caso e a investigação seguirá sem você!`}
]


const boas_vindas = {"Inspetora Lovelace - 08:32" : `Boas vindas detetive! Precisamos de sua ajuda para resolver esse mistério.
No quarto 404 uma tragédia aconteceu, o famoso quadro Raposa de fogo desapareceu.
A pessoa que ocupava o quarto, que pediu para não ser identificada, voltou hoje de manhã para seu aposento no Hotel TTP
e para seu desespero, o quarto, que tinha sido entregue de maneira anônima ontem de manhã já não estava lá.

A priori essa transação teria acontecido de maneira secreta e por isso foi-se escolhido o Hotel TTP, um dos mais tradicionais da cidade.
Infelizmente, ele não foi seguro o suficiente e agora cabe a nós desvendarmos esse mistério.

Sei que suas habilidades com API's RESTs são incomparáveis e isso pode nos ajudar a recolher os testemunhos e as imagens das câmeras de segurança do servidor deles.

Só você pode nos ajudar agora, contamos com você!`}

const fase1 = [ {"Inspetora Lovelace - 16:32" : `Parece que graças a você estamos mais próximos de encontrar o culpado. Existe de algo de estranho no depoimento de Bill e de Helião. Os dois se contradizem muito...
Um momento.`},
{"Inspetora Lovelace - 17:05" : `Ouvimos gritos e a luz acabou por um momento. Detetive, ainda não posso te liberar, a situação piorou e muito. Ouvimos gritos e um dos hóspedes desapareceu. Preciso que você utilize o sistema para tentar encontrar algo que ligue os hóspedes ao sumiço. Como temos testemunhos contraditórios, agora precisamos de evidências mais significativas. `},
{"Inspetora Lovelace - 17:12" : `Cuidado com quem você adiciona na lista de suspeitos, temos que encontrar objetos para conectarmos os hóspedes a essa situação toda. Conto com você!`}
]

const mensagens = [help, boas_vindas, fase1]


export default mensagens