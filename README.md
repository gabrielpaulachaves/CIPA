# CIPA
Olá, seja muito bem-vindo ao meu projeto real para CIPA.
Aqui irei explicar qual a finalidade do site e quais as tecnologias usadas.
Criei esse site com intuito de ajudar e agilizar o registro de ocorrências feitas pela presidente da CIPA da minha empresa. No site é possível deixar agendado as reuniões futuras, anotações, e o principal: ocorrências, e sua variável: inspeções.
A aba de ocorrências tem um papel muito importante de deixar registrado qualquer ocorrido dentro da empresa: um acidente, um aparelho quebrado ou uma sujestão de otimização na empresa, podendo ser categorizado do nível mais baixo (algo não tão relevante, que pode ser resolvido mais tarde) até o mais alto (fiação exposta em frente ao uma porta de um setor, podendo causar um acidente). Após a criação da ocorrência, podemos mudar seu status de andamento: aberto (para algo que acaba de ser registrado), em andamento (inspeções sendo feita sobre o ocorrido) e resolvido. Possível também deletar os registros feitos.

Passando para o importante: Tecnologias e os códigos usados.
Todo o backend foi feito utilizando nodejs. Como havia iniciado há pouco tempo meus estudos de nodejs, não foi utilizado tecnologias mais avançadas que essa, então não utilizei de react ou typescript. Junto de nodejs, utilizei seu famoso framework que facilita a escrita do código: express. Além disso, utilizei MySQL para a criação do meu banco de dados, pois é um banco de dados que eu já tenho familiaridade. Para complementar, utilizei Sequelize e body-parser para fazer a transferência dos dados inseridos no frontend para nosso banco de dados, importante dizer que o Sequelize não funciona sem o mysql2, então precisei intalar no código. E como eu não posso esquecer de mencionar, para a exibição visual do projeto, utilizei de handlebars, uma engine para exibir o conteúdo .HTML com fácil acesso de exibição dos dados. E por último, porém muito importante para a segurança utilizei arquivo .env para privar os dados sensíveis do banco de dados.

Passando agora para a apresentação do código, preciso primeiro explicar que o arquivo script.js é o arquivo principal do programa, é por ele que irei configurar as rotas para o banco de dados. Nele, é possível ver as primeiras configurações, como a importação das variáveis que guardam os models para cada tabela do banco de dados e das tecnologias que utilizei (a principal sendo a const app, pois é por ela que executo o código pelo express). 

****MODELS*****
Nessa pasta é onde eu crio a conexão do backend com o MySQL usando o Sequelize e os models para cada tabela do banco de dados. É de extrema importância que eu configure primeiro o sequelize para depois criar os models. Dentro da pasta referente ao sequelize (db.js), notamos duas constantes, a Sequelize que é como uma classe, ele está importando o sequelize, é com ele que teremos os comandos principais relacionados ao Mysql como o tipo da coluna, as foreign keys, e é por ela que iremos criar o objeto sequelize para nos conectarmos ao Mysql. Por fim, exportamos ambas constantes, a Sequelize para, por exemplo, definir o tipo da coluna no model, e a sequelize para termos acesso àquele banco (pois estamos passando a senha de acesso ao banco pela constante sequelize)  

Passando para os outros arquivos, entramos na parte da criação do model, eu gosto de associar os models como um caminho com portas para cada tabela e suas respectivas colunas, por exemplo: .define("agenda"..   a "agenda" é o caminho para a tabela agenda (é importante ter o mesmo nome da tabela existente) e idagenda:{
        type: dbreu.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    uma porta diferente para a coluna idagenda (também obrigatório ter o mesmo nome da coluna existente). Usando type eu digo para o sequelize qual tipo de dado aquela coluna é (int, string, text ou enum)

****PUBLIC****

Nesta pasta é onde guardo os arquivos para a personalização e utilização do frontend. É notável que há um arquivo Javascript para cada página com o nome explícito para qual página. Porém, há mais um arquivo chamado "javascript.js" sem nenhum código escrito nele, essa é a pasta que irei colocar no arquivo principal do handlebars para permitir que seja utilizado javascript nas outras páginas. Também coloco o arquivo .CSS no arquivo main do handlebars.

****VIEWS****

Aqui encontramos os arquivos .handlebars, mas antes de avançar, devo explicar antes como adicionei ele. Como havia explicado, handlebars é uma engine que vai exibir nossos dados no frontend em html, porém é necessário configurá-lo no nosso arquivo principal: script.js

Primeiro eu baixo o handlebars e chamo ele para um objeto 
const {engine} = require("express-handlebars")

Agora, configuramos como será cada arquivo .handlebars
app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

algumas dessas configurações possuem valores fixos, como "view engine" e a configuração {defaultLayout: "main"}. O "main" aqui se refere ao arquivo principal handlebars, ambos precisam ter o mesmo nome, mas usamos main como boas práticas. Mesma coisa para app.engine("handlebars" e app.set( "handlebars"), aqui ambas precisam ter o mesmo nome e os arquivos handlebars precisam seguir esse mesmo nome após o .   

Já configurado no nosso código principal, criamos, dentro da pasta "views" a pasta "layouts" que guardará o código handlebars principal: main.handlebars. Dentro dele aplicamos o cabeçalho padrão do HTML, nesse arquivo que colocamos o favicon, o nome da página e o idioma principal. É de extrema importância colocarmos o comando {{{body}}} dentro da tag <body> </body> para conseguirmos exibir todo o contúdo.

Tendo isso, agora podemos criar as rotas para essas páginas no script.js. 
para isso usamos app.get("/" (o que vem dentro dos " " é a rota do servidor, o que vem após o localhost:3333(ou outra porta). então para acessar a pagina de ocorrências, usamos localhost:PORTA/ocorrencias. Depois de dizer a rota, passamos os parâmetros padrões desta função: (req, res). Req utilizaremos para requisições feitas para o banco de dados (como adicionar um dado ao nosso banco), e o res para responder ao servidor, e utilizando o res que faremos exibir o conteúdo nessa rota definida utilizando res.render("home" (ou qualquer outra página. Coloque apenas o nome)).

Porém, percebemos que há algo a mais nas rotas para as páginas de onde será feita as aplicações.
  postanot.findAll({raw: true, order:[["idanotacao", "DESC"]]}).then((anot)=>{res.render("./anotacoes", {postanot: anot})}) 

  Isso será para trazermos os dados para nosso frontend, chamamos aquele model referente a tabela que vamos nos referir nesta página. utilizamos o findAll para trazer os dados, e iremos "guardó-los" dentro de um parâmetro que permitirar exibir eles. O raw: true serve para transformar os dados em objeto para que o nosso javascript consiga ler, pois sem ele retornaria para o código os dados em forma de um objeto criado a partir da classe que definimos em cada arquivo post, ou seja, retornaria o nome da class, do objeto, e assim tornaria mais difícil a filtragem dos dados.  order:[["idanotacao", "DESC"]]}) é para ordenar como eles virão. Será ordenado pelo id de forma decrescente (do mais novo para o mais velho). then((anot)=>{res.render("./anotacoes", {postanot: anot})}) será executado após o findAll terminar sua busca dos dados, o parâmetro anot irá guardar essa busca dos dados. =>{res.render("./anotacoes", {postanot: anot})}) aqui estamos executando uma função que vai renderizar o arquivo e dizer que a propriedade postanot tem como valor o parâmetro anot, usaremos ele para exibir os dados na página.

Podemos notar que o app.get da tabela de inspeções segue um caminho de escrita diferente dos demais

app.get("/inspecoes", (req, res)=>{
    async function buscar(){
        try{
          const pins = await postins.findAll({raw: true,nest: true, include: [{model: postoco, as: "ocorrencia", attributes: ["descricao_ocorrencia", "status_ocorrencia"]}], order:[["idinspecao", "DESC"]]})
          const poco = await postoco.findAll({raw: true, order: [["idocorrencia", "DESC"]]})
                         
                  
          res.render("./inspecoes", {ins: pins, oco: poco})
        }
    catch(error){
        console.error(error)
    }
    
} buscar()})

Isso porque não estou apenas buscando os dados da tabela inspecoes, mas também da tabela ocorrencias, então para isso utilizei um async para primeiro buscar os dados da tabela inspecoes e logo após terminar esse buscar, executar a busca da tabela ocorrencias, e por fim renderizar a pagina e o objeto que usaremos. 
Como a tabela inspecoes é dependente da tabela ocorrencias, tive que criar uma foreignkey nela referente ao idocorrencia da tabela ocorrencias.

Além de ter definido a foreignkey na criação da tabela, tive que dizer ao sequelize que há uma foreignkey, onde ela está e de quem ela se refere

postins.belongsTo(postoco, 
                {foreignKey: "id_ocorrencia", as: "ocorrencia"}
            )
     postoco.hasMany(postins,
                {foreignKey: "id_ocorrencia"}
            ) 
Aqui digo que a tabela inspecoes (model postins) pertence a tabela ocorrencias(model postoco), e a foreignkey que faz essa conexão é a "id_ocorrencia", e no belongsTo que damos nome a ela e definimos. O as: "ocorrencia" será usado para buscarmos os dados da tabela ocorrencias por meio da tabela inspecoes.

a linha abaixo, digo para o sequelize que postoco possui várias inspecoes, e por meio da "id_ocorrencia" que é feito a conexão.

E após essa definição da foreignkey no script.js, utilizo nest: true para aninhar essa foreignkey, e include para incluir as colunas da tabela ocorrencias que quero usar a partir da busca pela tabela inspecoes utilizando o as que criei no belongsTo. Por fim executo a async function.

****Arquivos em.handlebars****

Antes de avançar na explicação do restante do código no script.js, preciso mostrar o código do nosso frontend e como eu exibo os dados por ele. Utilizarei como exemplo a página das inspeções, pois mostro como exibir os dados da tabela inspecoes e como eu exibi os dados da tabela ocorrencias pela tabela inspecoes.

Para começar, eu crio um {{#each ins}}, que é como um forEach, ou seja, cada registro do banco terá o mesmo código que todos. Para exibir a coluna exata que eu quero, devo colocar entre {{}} o nome da coluna, assim: {{setor_inspecao}}, então todos os registros que tiverem um valor nessa coluna será exibido. Passando agora para exibição dos dados da tabela ocorrencias, para serem exibidas dentro do {{each ins}} o processo é diferente do que apenas colocar o nome da coluna, pois estou pedindo para exibir coluna de uma tabela diferente da tabela que está no each, ou seja, não são colunas que existem na tabela inspecoes, por isso que criei uma foreignkey no script principal. Se lembra do "as" que definimos no belongsto e hasmany? é agora que usaremos ele, veja um exemplo tirado do código:

 <p><span class="negrito">Descrição:</span> {{ocorrencia.descricao_ocorrencia}}</p>

como você pode ver, o alias "ocorrencia" permitiu com que eu buscasse pela coluna "descricao_ocorrencia" (uma coluna que nao existe na tabela inspecoes, apenas na tabela ocorrencias) dentro de um each para a tabela inspecoes. Isso tudo graças a foreignkey definida no script. É como se fosse um inner join feito no MySQL.
Exemplo:
   "select * from c.nome, t.numero
   from cliente c (esse c é o alias, igual o "as" que coloquei no script)
   inner join
   telefone t;
   
Na criação do formulário você pode ver um #each oco, referente a tabela ocorrencias, mas como foi feito fora do #each ins, então eu não precisei da foreignkey nele.
E por fim fecho com {{/each}}.

Agora, passando para a parte dos envios dos dados para o banco de dados.
Dentro do código .handlebars, a inserção de dados foram feitas dentro de um form, esse form leva para uma rota em post (envio de dados). Essa rota no código principal possui um create, que é a forma como adicionamos um dado en uma tabela pelo sequelize. Dentro do create, coloco o nome da coluna que quero receber o dado, e o dado que ele vai receber será o dado inserido no campo referente por meio do req.body."id": req se refere a solicitação do dado, body de onde ele vem, ou seja, do body do handlebars, e "id" se refere ao id do elemento html que vai permitir você escrever o dado no frontend, exemplo:<input type="text" name="nomeoco" id="nomeoco", logo => req.body.nomeoco.

Para a atualização do dado, como no exemplo para atualizar o status da ocorrência, criei um novo form que nos leva para uma rota de update no sequelize. Mas ainda tratando do que foi feito no handlebars, adicionei um input:hidden com um value que possui o idocorrencia da ocorrencia de onde ele está, então toda ocorrência possui esse input:hidden, e cada input:hidden possui a idocorrencia de onde ele está, isso será importante para localizar qual ocorrência está sendo atualizada. Ainda dentro desse form, criei um select com 3 options diferentes com value diferentes referentes ao status que cada um representa, e por fim um button para enviar esses dados. Com essas informações, passo para o script, onde a rota desse form se encontra. Na rota "/alterstatusoco" eu adiciono o model da tabela e digo o que será feito, ao invés de usar o create, utilizo o update. Esse update será para a coluna status_ocorrencia, que vai receber o valor do select com id alterstatusoco. Porém, se eu não dizer "onde" atualizar, eu irei atualizar TODOS os registros, e eu não quero isso, eu quero atualizar apenas um registro sem afetar os outros, e é nesse momento que utilizo o input:hidden. Faço um filtro com where, que será para atualizar só aquele onde o idocorrencia é igual ao valor do input:hidden que é o idocorrencia de onde ele está, e isso tornará a atualização de registro única e não global.

Agora, para a exclusão de um registro, crio um elemento <a> para levar até a rota /del3/{{idocorrencia}}. Esse {{idocorrencia}} adicionado logo após o / é um parâmetro que irei passar para a rota. Dentro desse <a> possui um <button>, quando eu clicar, o <a> executará o comando dentro da rota.
Passando pra rota encontramos "/del3/:id", esse :id é o nome do parâmetro, para definir um parâmetro utilizamos : e depois o nome desse parâmetro,  


    
