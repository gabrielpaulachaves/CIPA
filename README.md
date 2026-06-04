# CIPA
Olá, seja muito bem-vindo ao meu projeto real para CIPA.
Aqui irei explicar qual a finalidade do site e quais as tecnologias usadas.
Criei esse site com intuito de ajudar e agilizar o registro de ocorrências feitas pela presidente da CIPA da minha empresa. No site é possível deixar agendado as reuniões futuras, anotações, e o principal: ocorrências, e sua variável: inspeções.
A aba de ocorrências tem um papel muito importante de deixar registrado qualquer ocorrido dentro da empresa: um acidente, um aparelho quebrado ou uma sujestão de otimização na empresa, podendo ser categorizado do nível mais baixo (algo não tão relevante, que pode ser resolvido mais tarde) até o mais alto (fiação exposta em frente ao uma porta de um setor, podendo causar um acidente). Após a criação da ocorrência, podemos mudar seu status de andamento: aberto (para algo que acaba de ser registrado), em andamento (inspeções sendo feita sobre o ocorrido) e resolvido. Possível também deletar os registros feitos.

Passando para o importante: Tecnologias e os códigos usados.
Todo o backend foi feito utilizando nodejs. Como havia iniciado há pouco tempo meus estudos de nodejs, não foi utilizado tecnologias mais avançadas que essa, então não utilizei de react ou typescript. Junto de nodejs, utilizei seu famoso framework que facilita a escrita do código: express. Além disso, utilizei MySQL para a criação do meu banco de dados, pois é um banco de dados que eu já tenho familiaridade. Para complementar, utilizei Sequelize e body-parser para fazer a transferência dos dados inseridos no frontend para nosso banco de dados, importante dizer que o Sequelize não funciona sem o mysql2, então precisei intalar no código. E como eu não posso esquecer de mencionar, para a exibição visual do projeto, utilizei de handlebars, uma engine para exibir o conteúdo .HTML com fácil acesso de exibição dos dados. E por último, porém muito importante para a segurança utilizei arquivo .env para privar os dados sensíveis do banco de dados.

Passando agora para a apresentação do código, preciso primeiro explicar que o arquivo script.js é o arquivo principal do programa, é por ele que irei configurar as rotas para o banco de dados. Nele, é possível ver as primeiras configurações, como a importação das variáveis que guardam os models para cada tabela do banco de dados e das tecnologias que utilizei (a principal sendo a const app, pois é por ela que executo o código pelo express). 

*****MODELS******
Nessa pasta é onde eu crio a conexão do backend com o MySQL usando o Sequelize e os models para cada tabela do banco de dados. É de extrema importância que eu configure primeiro o sequelize para depois criar os models. Dentro da pasta referente ao sequelize (db.js), notamos duas constantes, a Sequelize que é como uma classe, ele está importando o sequelize, é com ele que teremos os comandos principais relacionados ao Mysql como o tipo da coluna, as foreign keys, e é por ela que iremos criar o objeto sequelize para nos conectarmos ao Mysql. Por fim, exportamos ambas constantes, a Sequelize para, por exemplo, definir o tipo da coluna no model, e a sequelize para termos acesso àquele banco (pois estamos passando a senha de acesso ao banco pela constante sequelize)  

Passando para os outros arquivos, entramos na parte da criação do model, eu gosto de associar os models como um caminho com portas para cada tabela e suas respectivas colunas, por exemplo: .define("agenda" a "agenda" é o caminho para a tabela agenda (é importante ter o mesmo nome da tabela existente) e idagenda:{
        type: dbreu.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    uma porta diferente para a coluna idagenda (também obrigatório ter o mesmo nome da coluna existente)

    
