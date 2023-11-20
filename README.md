# hotelTTP

Design file: https://www.figma.com/file/RmBvk6HoOvGnxI5cZw7Zt6/Mist%C3%A9rio-do-Hotel-TTP?type=design&node-id=0%3A1&mode=design&t=GR50brpgrI6rxUNv-1



Contexto e Problema:

Contexto:
- Utilização do padrão REST para a chamada de API's
- Comportamento Alvo: Utilizar os métodos HTTP's corretos para realizar as ações corretas na API.
- Dificuldade em entender os diferentes métodos HTTP, a estrutura de uma Requisição (*Request*) e a Resposta (*Response*)
-

Experiência de Jogos: Aprendizado do uso dos métodos HTTP como forma de progredir na história e na resolução do desafio.
Razão: A utilização dos métodos HTTP como forma de encontrar o responsável pelo crime ajuda a entender as diferenças entre eles e dá a atividade um objetivo final, oferecendo uma estrutura narrativa que organize a exploração dos métodos e de seu aprendizado.



Dinâmicas
- Restrição. Uso dos métodos HTTP como forma de progredir na história.
- Narrativa Embutida: O Mistério do Hotel TTP sendo um enredo de investigação.

Enredo em 12 passos:
O mundo tranquilo - Estava tudo bem no hotel.
Chamado a aventura - Precisamos de sua ajuda!
Recusa ao chamado - Limita-se a ver os testemunhos.
Encontro com o mentor - Inspetora Lovelace.
Cruzamento do limiar - Testemunho não bate. Encontra sangue.
Luta - Encontrar os dados e tentar encontrar evidencias.
Abismo - Ter que encontrar o culpado somente usando as câmeras.
Renascimento - Encontrar o culpado e recuperar seu prestígio
Estrada de volta para o caminho conhecido - Restabelece a ordem no hotel.
Expiação - Inspetora Lovelace te manda uma última mensagem em código agradecendo pelos seus feitos.
O retorno - Tudo está tranquilo no hotel e com você.


Progressão - Dividida em estágios. Aparece como mensagens enviadas pela inspetora Lovelace.
Fase 1 - Encontrar os 2 suspeitos em seus testemunhos contraditórios.
Fase 2 - Encontrar as três evidências e adicionar na lista de evidências. Utlizando uma requisição com corpo.
Fase 3 - Encontrar o culpado. Utilizando query parameter nas requisições e cruzando as informações para criar uma requisição com corpo elencando uma lista de evidencias.


Mecânicas:
Desafios: Desafios são os objetivos que para serem alcançados requerem que o jogador demostre as habilidades adquiridas durante o jogo. No mistério do Hotel TTP o desafio é encontrar o culpado utilizando os métodos HTTP.

Desafios  Divididos em estágios. Aparece;
Fase 1 - Encontrar os 2 suspeitos em seus testemunhos contraditórios e adiciona na lista de suspeitos.
Fase 2 - Encontrar as três evidências e adicionar na lista de evidências, passando o local
Fase 3 - Encontrar o culpado.

Feedback: O feedback acontece nas responses do métodos HTTP e no corpo da resposta.
Ao atingir os diferentes requerimentos para avançar de fase, a interface principal acompanha as mudanças e adiciona as novas instruções e mais detalhes sobre o mistério.

Enviar evidências erradas multiplas vezes, reduz a credibilidade como detetitve. Após cada 3 tentativas erradas, a inspetora lovelace reduzirá sua credibilidade. Se a credibilidade chegar a 0, você está fora do caso.
A credibilidade começa em 3.

Adicionar um inocente a lista de suspeitos reduzir sua credibilidade.
Marcar uma evidência errada reduz sua credibilidade.

Os personagens são dividios em Suspeito, Culpado e Inocentes.

Culpado: Mosca
Suspeitos: Justina Cristera, Sr. Trampos e Bill Portões.
Inocentes: Hedy Lamar e Cristina Chau

Só é possível apontar um culpado após reunir pelo menos 2 evidencias que apontem para o mesmo.

Casa suspeito possui duas evidências de comportamento suspeito.
As evidências podem ser verificadas usando as câmeras e os horários.

Estado de vitória: Enviar como culpado a pessoa correta.
Encontrar 2 evidências que o apontem como culpado.


Componentes:
Níveis.




Detalhamento das dinâmicas
Dinâmicas - Progressão ao passar de fase.
O Mistério do Hotel TTP é composto de três "fases". Cada fase aumenta a complexidade do mistério e do uso que deve ser feito das requisições. Onde a primeira fase exige somente o entendimento dos métodos HTTP e dos endpoints para encontrar a pessoa correta e a adicionar na lista de suspeitos, indo para a fase 2.

Na segunda fase é necessário utilizar os métodos HTTP para encontrar os potenciais suspeitos e indicar uma evidência. Caso a evidência seja aceita o jogo vai para a fase três onde pode-se utilizar path parameters para vasculhar diferentes quartos em diferentes horários, cruzando as informações com os testemunhos e encontrando o verdadeiro culpado.

Narrativa - Enredo da investigação a cerca do caso. (O Mistério do Hotel TTP )

O jogo se divide em três fases que são marcadas por momentos diferentes na narrativa.

O jogo se inicia com um convite ao acessar o site da documentação do jogo onde os discentes são convidados a ajudar no caso utilizando seus conhecimentos em API's REST.

"Sua ajuda é primordial para acharmos o culpado do desaparecimento da Raposa de Fogo, um quadro do lendário artista Cromo, que retrata uma briga de navalhas em uma opera.

Ninguém saiu do hotel desde que foi relatado o sumiço do quadro. Sua missão é reunir os testemunhos dos hóspedes e, caso ache algo suspeito adicione na **lista de suspeitos**, que a inspetora Ada Lovelace irá investigar posteriormente.


Hospede 1: Bill Portões. Disse que estava dormindo na hora do grito (que grito?)
Hospede 2: Estevão Trampos. Não quer dizer nada.
Hospede 3: Helião Mosca. 
Hospede 4: Justina Cristera
Hospede 5: Hedy Lamarr
Hospede 6: Carolina Chau
Hospede 7: Marisa Maya
Hospede 8: Alan Turi


Ao adicionar Bill portões lista de suspeitos, ele vai tentar fugir **pela janela**. Dizendo que não foi ele dizendo que ele estava dormindo quando ouviu os gritos. 
Nesse momento a inspetora Lovelace interroga sobre os gritos, e a partir desse momento, se percebe no quarto 404 que existe uma grande mancha vermelha no carpete. A partir desse momento, todos os hóspedes estão proibidos de sairem e a investigação escala.


-- Nesse momento, o jogador deve procurar na lista de quartos por evidências. 
As evidências aceitas são: Uma embalagem de papel pardo no quarto 401. A moldura no quarto 410. 


Ao adicionar qualquer uma das evidências, a inspetora Ada responderá com um pedido de urgência. Alguém foi visto saindo do hotel. Utilizando as câmeras e a gravação dos testemunhos você deve buscar, nas cameras utilizando o número do quarto e a hora, para encontrar o suspeito. Ao encontrar a pessoal, deve-se enviar como uma requisição para o recurso Culpado.



O Culpado estava no quarto 401 ao meio dia com uma embalagem grande de papel pardo. às 15.
O quadro estava no quarto 404 até as 13h.
O quarto 404 fica sem camera depois das 14h
O quarto 504 fica sem camera depois das 12h
O culpado estava no quarto 504 as 11h com um alicate.

O culpado fica no quarto 504 das 10h até as 14.
O culpado rouba o quado as 15 e vai para o quarto 401.
O culpado esconde o quadro no quarto 401.



Mecânicas - Cooperação (Mural de dicas) 



O uso dos métodos HTTP é necessário para a construção e utilização de API's, que são uma das principais formas de conectarmos aplicações a suas bases de dados.

Uma requisição HTTP pode ser feita de diferentes formas. Casa requisição do *jogo* O Mistério do Hotel TTP segue uma pequena documentação com a seguinte estrutura:

**Método HTTP** -  Característica da requisição. Exemplo de corpo da requisição.


Post - Envia informações para o servidor;

POST http://hotelttp.edu.br/Suspeito  
Post - Suspeito. Gera uma response. Aceita o nome e sobrenome de alguém. Permite gravar um novo nome na lista de suspeitos.
O nome deve ser passado no corpo da requisição. Algumas requisições em Suspeito geram respostas com dicas através da resposta 418 e adicionar uma pessoa que tenha um bom álibi ou que claramente seja inocente vai reduzir **um ponto de credibilidade** com a inspetora Lovelace. Se você perder três pontos de credibilidade estará fora do caso e a investigação seguirá sem você!
Toda requisição 404 acontece por conta de erro na URL da requisição.

POST http://hotelttp.edu.br/Evidencia
Post - Evidências. Gera response. Caso a evidência não esteja em posse do jogador ou não tenha *fundamento*. A Evidência pode ser negada pelo servidor. A evidência deve ser passada no corpo com Nome: Hora e quarto: onde hora e local servem para evitar que o jogador só chute evidencias.

POST - http://hotelttp.edu.br/Culpado
Post - É o comando para enviar a resposta final. A pessoa culpada deve ser gerada com nome e uma lista de evidências. Caso a pessoa não seja culpada o jogador receberá uma negativa da investigadora Lovelace e perderá **um ponto decredibilidade.** Então é necessário cuidado para fazer sua acusação! Se você perder três pontos de credibilidade estará fora do caso e a investigação seguirá sem você!

getHelp - http://localhost:3000/help
GET - Help. É um comando para receber as instruções para o progresso no jogo. Em diferentes fases gera informações adicionais.

getSuspeitos - http://localhost:3000/suspeitos
Get - Suspeitos. É o comando para buscar a lista de suspeitos. Caso a lista ainda esteja vazia, o jogador poderá adicionar suspeitos usando o POST Suspeito. A partir do momento que a primeira pessoa for adicionada ele começa a exibir a lista de pessoas por quem o jogador têm suspeita. 

getQuartos - http://localhost:3000/quartos
Get - Quartos. É o comando para buscar o estado dos quartos. Esse comando sempre busca todos os quartos no momento atual. Ele serve para dar um panorama geral do Hotel TTP. 

getQuarto - http://localhost:3000/quarto/numero
Get - Quarto. É o comando para buscar o estado de um quarto específico. Esse comando olha com detalhes para um quarto. 

getQuarto - http://localhost:3000/testemunho/pessoa
Get - Testemunho. É o comando para buscar o testemunho da pessoas. A cada fase é interessante revisar os testemunhos para ver se alguém muda a sua versão!


Get - Testemunho/Pessoa. Mostra o que a pessoa testemunhou. Pessoa deve ser um nome.


DELETE lista de Suspeitos - Apaga a lista de suspeitos atual.
