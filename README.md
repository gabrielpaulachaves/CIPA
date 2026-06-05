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

Antes de avançar na explicação do restante do código no script.js, preciso mostrar o código do nosso frontend e como eu exibo os dados por ele. Utilizarei como exemplo a página das inspeções.



    
