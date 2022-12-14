# ACADEMICS FIT


**Diogo Martins de Assis, diogoassis3301@gmail.com**

**Enzo Otavio Peligrino, peligrinoenzootavio@gmail.com**

**Gabriel Dolabela Marques, dolabelag@gmail.com**

**Henrique Carvalho Almeida, hcarvalhoalmeida7@gmail.com**

**João Pedro de Oliveira Pauletti, Jpedropauletti@gmail.com**

**Lucas Monteiro Lima, lucas.m.lima@gmail.com**

---

Professores:

** Prof. Cristiano Geraldo Teixeira Silva **
** Prof. Felipe Augusto Lima Reis **
** Prof. Hugo Bastos de Paula **

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Constatando-se que, com o avanço da tecnologia, tem-se aprimorado diversas interações e adiantado diversos procedimentos do dia a dia, mas ainda há uma desconexão quando tentamos perceber as tecnologias nas pequenas academias e como elas podem facilitar alguns processos de inter-relação. Com base nisso, nossa equipe idealizou uma tecnologia que foca em unir os Personal Trainners com os clientes da academia, visando facilitar a relação de Aluno-Professor. A academia, primeiramente, registrará seus profissionais, com suas especialidades e contatos, e depois notificará os clientes, após o cadastro na academia e criação da ficha, o envio da chave, para acesso do aplicativo, no email.**

---


## 1. Introdução

    1.1 Contextualização

**Percebe-se que o mundo tem se tornado cada mais evoluído tecnologicamente, e que essas tecnologia e suas aplicações são imensuráveis, mas ainda existem áreas que essa evolução ainda se permanece pouco difundida, como nas pequenas academias, que não conseguem estabelecer uma comunicação de maneira eficiente entre seus profissionais e seus clientes.
O aplicativo em desenvolvimento, surge para solucionar esse deficit gerado pela falta de tecnologias mais caras, na qual pequenas academias não podem bancar, e/ou outros fatores que dificultam a interação entre essas pessoas.**

    1.2 Problema

**Nota-se que a má gestão do tempo dos profissionais da academia levam à maus encontros entre estes e os clientes, além da falta de informação que o cliente tem em relação aos profissionais que serão contratados, pois oferecem diferentes tipos de treino, e a falta de comunicação em momentos de imprevisibilidade que acabam afetando no cancelamento de determinadas aulas previamente marcadas.**

    1.3 Objetivo geral

**É uma aplicação que busca otimizar o tempo dos profissionais de educação física e facilitar a interação Profissional-Aluno.**

        1.3.1 Objetivos específicos

**Temos como objetivo, criar um cadastro para os profissionais com suas especialidades, criar um cadastro para os alunos, conectar os profissionais com os alunos através de uma agenda para aulas/encontros.**

    1.4 Justificativas

**Durante a idealização do projeto e os problemas que o circundava, percebemos que há poucas alternativas para a solução desse adversidade.**


## 2. Participantes do processo

**Para o projeto, reconhecemos que as entidades envolvidas são as: Academias(Secretaria), pois ela que enviará o link de cadastro, tanto para o profissional, quanto para o cliente, que preencherá a ficha virtual; Profissionais da academia, que atenderão os clientes nos horários marcados no aplicativo; Clientes, que utilizarão do aplicativo para marcar a aula.**

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

**A proposta é criar um aplicativo que possibilite a uma academia gerenciar seus alunos, permitir que eles econtrem personais que supram suas necessidade específicas de treinamento, que também permita a personais buscarem mais alunos e que esses alunos possam se organizar para se encaixar nas suas agendas de maneira mais fácil, através de um unico sistema. Na busca para encontrar aplicações que já supriam essas adversidades, notamos um aplicativo similar, mas que não possue o mesmo processo, pois o cadastro é realizado pelo Personal Trainner, com nossa metolodogia, ambos terão mais autonomia para utilização da aplicação, além do intermédio da academia.**

## 3.2. Descrição Geral da proposta

**Uma Academia possui diversos processos internos que regulam o seu funcionamento diário, a entrada e saída de caixa assim como de pessoas, sejam elas alunos, professores ou personais. Um desses processos é a admissão de novos alunos, ele é caracterizado pelas seguintes etapas: O cliente conhece a academia, seja através de propagandas e estratégias de marketing, ou indicação. Uma vez na academia ele passa por uma série de exames, que determinam sua aptidão para a prática de exercícios físicos, tem suas medidas tiradas, IMC calculado e seus objetivos de treinamento determinados. Após tudo isso feito, ou caso o cliente já tenha vindo de outra academia e apresentar os laudos médicos,sua ficha é criada e ele pode iniciar um período de testes sem precisar pagar a mensalidade. Caso venha a gostar das instalações o cliente pode optar por se matricular e se tornar um aluno da academia. Nesse momento seus dados são cadastrados no sistema e armazenados em um banco de dados, o cliente passa a ter acesso ao sistema interno da academia e aos personais cadastrados. A partir desse momento inicia-se um novo processo, no qual o aluno pode procurar por personais de acordo com sua área de especialidade e marcar sessões de treino em dias e horários que estiverem pre-definidos no sistema, de acordo com o horário de funcionamento da academia e a disponibilidade do personal.**

**Com foco na diversidade de escolha para o usuário, o mesmo possui liberdade para montar a própria ficha, escolhendo dentre as opções (que serão especificadas na aplicação), a que melhor se enquadra em sua procura, ele também terá a liberdade de escolher onde praticar seus treinos, podendo ser em um local específico, ou dentro de sua própria casa, assim trazendo comodidade e livre arbítrio para escolher uma "rotina" que se encaixe melhor em seu tempo, o cliente poderá especificar suas dificuldades durante treinos posteriores (caso possua) como complemento a mais para o Personal Trainner que realizará atividades com o cliente.**

**Após o Processo de Registro do Personal e do Processo de Registro do Cliente na aplicação, o personal pode começar o Processo para Encontrar Alunos, o profissional acessa o banco de alunos registrados, seleciona o aluno desejado com base nas informações pessoas básicas pre-visualizaveis, ou clicando no perfil para os dados mais detalhados, ou utilizar as opções de filtragem para captar apenas as opções desejadas de perfis, para que assim o aluno seja selecionado e convidado para uma aula experimental, o aluno poderá recusar ou aceitar a proposta. Caso o aluno recuse, o processo finaliza, caso ele aceite, a aula será marcada, e após ela, caso o aluno goste, o processo termina com o vínculo diário/semanal/mensal (No Processo de Marcar Aula) do perfil de ambos na aplicação, caso o aluno não queira efetivar as aulas, ele poderá recusar a proposta, finalizando também o processo.**

**Como toda academia, devemos sempre proporcionar segurança e eficiência em nossos equipamentos para que as pessoas possam realizar seus exercícios com máxima tranquilidade. Dessa forma, a manutenção de equipamentos em uma academia deve ser feita por profissionais aptos para isso, com comprovação da autorização para o exercício dessa atividade. Sempre tentamos realizar a manutenção com a empresa que forneceu os equipamentos, dessa forma, contamos com profissionais que sabem os detalhes sobre cada máquina e de que forma mantê-los seguros e funcionando adequadamente. A manutenção desses equipamentos deve ocorrer pela quebra de algo específico ou pelo desgaste de uso, ou seja, pode ser uma manutenção reparativa ou preventiva. No caso do desgaste, deve ocorrer uma manutenção minuciosa pelo menos uma vez ao ano, contudo é importante respeitar o que for informado pela empresa que forneceu os equipamentos.**

**A academia necessita de entregar profissionais qualificados para seus alunos, pensando nisso é necessário realizar processos de efetivação minuciosos, nos quais serão solicitados formação, experiência, perfil psicológico e cultural; Após essas etapas, o profissional passará por um período de teste prático, onde será analisado o feedback do aluno, se o mesmo corresponder às expectativas, o candidato será efetivado.**

**Assim, após a entrada do aluno, torna-se essencial integrá-lo ao ambiente da academia. Desta forma, permitir que o aluno tenha acesso a uma lista de professores onde possa selecionar o personal trainer com quem mais se identifica acaba se mostrando um processo chave para a vida fitness deste aluno. Busca-se dessa forma corrigir a relação perdida entre o profissional de educação física por consequência da pandemia, pois com ajuda do personal trainer, o aluno realiza os exercícios de forma apropriada, o que prevene lesões, aumenta a qualidade do treino e dos ganhos. Os treinos orientados por um personal trainer serão prescritos de forma individualizada, só para si, respeitando a sua condição física, objetivos e limitações. Desta maneira justifica-se a importância de trazer um personal trainer que traga o maior conforto ao cliente.**

## 3.3. Modelagem dos Processos

### 3.3.1 Processo de cadastro/login e acesso ao sistema

**Este sub-processo mostra o passo-a-passo para o cadastro/login do personal/aluno, até seu acesso ao sistema.**
![Cadastro_login e acesso ao sistema Diagrama (1)](https://user-images.githubusercontent.com/57960595/207632996-5ea4073a-4821-4050-9e63-1ac1438b1e91.png)


### 3.3.2 Sub-processo – Montagem de ficha

**Este sub-processo apresenta o processo de montagem de ficha do usuário que foi solicitada pelo mesmo.**

![Criacao_de_Ficha_Diagram_2](https://user-images.githubusercontent.com/57960595/207641483-8354875c-55fd-4bee-9a3a-e507860a3631.png)

### 3.3.3 Sub-processo - Contratação de profissionais.

**Processo relacionado a contratação dos profissionais para a academia.**

![Contratacao profissionais Diagrama](https://user-images.githubusercontent.com/57960595/205284420-5661bd9c-171c-423b-9e3e-6ce785046c95.png)

### 3.3.4 Processo - Marcação de aula.

**Processo voltado à conexão entre aluno e personal.**![Busca de profissionais pelos alunos Diagrama](https://user-images.githubusercontent.com/57960595/206734096-b2c01ba6-34d1-4e3d-b919-fd45eb3ad9fd.png)

### 3.3.5 Sub-processo – Solicitação de ficha

**Este sub-processo apresenta o processo de solicitação de ficha pelo aluno.**

![solicitacaoficha](https://user-images.githubusercontent.com/57960595/207641586-ff177cf0-6683-409d-835d-2984024f263d.png)


## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 - Processo de cadastro/login e acesso ao sistema

**Solicitar login**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Usuário | caixa de Texto | Até 70 caracteres  |  |
| Senha | caixa de Texto | Minimo de 12 caracteres | |

**Cadastrar dados**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Caixa de Texto | deve possuir apenas letras e tamanho máximo de 25 caracteres |  |
| sobrenome | Caixa de Texto | deve possuir apenas letras e tamanho máximo de 25 caracteres  |  |
| Idade | Campo numerico | deve possuir apenas numeros e 3 digitos no máximo |  |
| genero | Caixa de seleção | deve escolher entre 2 opções |  |
| peso | Caixa de Texto | deve possuir apenas números e tamanho maximo de 7 digitos |  |
| Altura | Campo númerico | deve ser escrito em centimetros |  |
| email | Caixa de texto | deve possuir tamanho maximo de 25 caracteres e possuir caracter especial @ |  |
| Senha | Caixa de Texto | deve possuir tamanho minimo de 12 caracteres |  |

**Cadastrar conta**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | caixa de texto | deve possuir apenas letras e tamanho máximo de 25 caracteres  |  |
| sobrenome | Caixa de Texto | deve possuir apenas letras e tamanho máximo de 25 caracteres  |  |
| email | Caixa de texto | deve possuir tamanho maximo de 25 caracteres e possuir caracter especial @ |  |
| Senha | Caixa de Texto | deve possuir tamanho minimo de 12 caracteres |  |

#### Processo 2 – Montagem de ficha

**Personal Preenche os Campos**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Exercicio | Caixa de Texto |  | deve possuir apenas letras e tamanho máximo de 25 caracteres |
|  Series  |  Campo Numérico  |  | 1 |
|  Repetições  |  Campo Numérico  |  | 8 |


#### Processo 3  – contratação de profissionais

**Cadastro de dados dos profissionais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| Gênero | caixa de seleção | | |
| Formação | caixa de texto | | |
| Experiência | caixa de texto | | |
| Idade | campo numérico|  |  |
| cep| campo numérico | apenas 8 números  |  |
|rua| caixa de texto|  |  |
|número da casa| texto|  |  |
|complemento| texto|  |  |

**Apresentar Currículo**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
|  Currículo | anexo | premissa do currículo |  |

#### Processo 4  – Marcação de aula

**Cadastro final dos clientes**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Caixa de Texto |  |  |
| Localização | Permissão de acesso |  | Endereço dado |
| Gênero | Seleção | | M |
| Data de nascimento | Seleção | Restrição definida pelo input | Data atual |
| CPF | número | 11 números validados pelo cálculo do cpf |  |
| Carteira de vacinação | Anexo | Somente tipos de imagem ou documento |  |
| Login | Caixa de Texto |  |  |
| Senha | Caixa de texto enriquecido | Ao menos 10 caracteres, formados por ao menos uma letra, um número e um caractere especial |  |

#### Processo 5  – Solicitação ficha

**Selecionar Instrutor**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Matrícula do Instrutor | Campo Numérico |  |  |

**Enviar Solicitação**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Matrícula do Aluno | Campo Numérico |  |  |

### 4.2. Tecnologias

**Serão utilizadas Node, PHP, JavaScript, MySql, bootstrap, Visual Studio Code, GitHub para o desenvolvimento do projeto. O usúario vai interagir diretamente com o front end e a interface gráfica do site, para ter acesso aos recursos oferecidos por ele e de forma indereta acessar as informações presentes no banco de dados.**

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior.

![banco](https://user-images.githubusercontent.com/57960595/207641080-be4715ae-7938-4990-9dd1-5d5bb30b8736.png)

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

![inicial](https://user-images.githubusercontent.com/57960595/207634630-fd3f5683-7c4f-4c19-8650-14e1a4a6be5a.png)

Página inicial para entrar no sistema

![cadastro](https://user-images.githubusercontent.com/57960595/207640950-eada1d15-ef3e-4a3f-a3bd-79ecfd4515dc.png)

Tela de cadastro de personal e de aluno

![menu](https://user-images.githubusercontent.com/57960595/207636007-8bbaeec6-8d85-4a5a-8df2-c66e1c696467.png)

Tela de menu do aluno usada para procurar personais e solicitar montagem de ficha

![procurar personais](https://user-images.githubusercontent.com/57960595/207636863-fb302ef5-c644-47ce-a10a-3c8cb6320baf.png)

Tela para procurar personais na hora de solicitar a montagem de ficha

![minhas fichas](https://user-images.githubusercontent.com/57960595/207638914-cf242cd1-7810-4b4b-a19d-0fad986327b0.png)

Tela mostrando as fichas ja cadastradas para o aluno

![aprovacao de solicitacao de ficha](https://user-images.githubusercontent.com/57960595/207639245-fca17033-f316-4f3e-b5eb-bd7dcafdb7c3.png)

Tela mostrando as solicitações de ficha para o personal

![fichas ja enviadas](https://user-images.githubusercontent.com/57960595/207639814-f41c0c24-dde2-45ab-9406-9697380ded7b.png)

Tela mostrando as fichas preenchidas

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

No trabalho realizado, tivemos bons desenvolvimentos quanto as partes separadas do projeto, conseguimos conectar o front com o back, todavia não tivesse muito sucesso integrando essas duas partes com o node.js para a criação das rotas. Trocamos de node.js para PHP, e tivemos que refazer todos os processos e telas, conseguimos realizar todas as partes e integrá-las, mas não conseguimos desenvolver todas os processos, e estes ficaram para implementação futura.

Observações Pessoais:

Diogo:

Enzo: Gostei da equipe bem como do projeto, apesar de não ter dado tempo de impletar todas as funcionalidades planejasdas conseguimos entregar o principal que e a montagem das fichas.

Gabriel: Foi muito satisfatório trabalhar com cada integrante do grupo, realizamos o máximo possível com o tempo que tínhamos. Nos dedicamos a entender o que era exigido e melhor e adaptar a cada feedback dos orientadores.

Henrique: Todos os membros da equipe se ajudaram, infrentamos alguns obstáculos pelo caminho más conseguimos contornar e realizar a entrega.

João: Foi uma experiência incrível, vantajosa e divertidíssima trabalhar com cada um dos membros do grupo neste trabalho, com todos se doando ao máximo para com o projeto, nos dedicamos a entender e adaptar cada uma das sugestões, exigências e feedbacks dos nossos orientadores.

Lucas:

# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




