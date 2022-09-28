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

### 3.3.1 Processo – Matricula academia

**Esse processo mostra as atividades realizadas pelo usuário a partir do momento que ele entra na academia, até a sua matricula e acesso ao sistema interno e possibilidade de marcar aulas com personais.**

![Exemplo de um Modelo BPMN do PROCESSO 1](imagens/entrada(1).png "Modelo BPMN do Processo 1.")

### 3.3.2 Sub-processo – Cadastro do personal e acesso ao sistema

**Esse sub-processo mostra o passo a passo do cadastro/login do personal, até seu acesso ao sistema.**

![Modelo BPMN Cadastro do Personal no Sistema](https://user-images.githubusercontent.com/100444559/190222850-cbcbd598-c22f-4afb-be18-c30a386f9b05.png)



### 3.3.3 Sub-processo – Montagem de ficha

**Este sub-processo apresenta o processo de montagem de ficha do usuário que foi solicitada pelo mesmo.**

![Exemplo de um Modelo BPMN do PROCESSO 2](![montagem ficha Diagram (1)](https://user-images.githubusercontent.com/74463348/192395617-08e535fc-747d-41a0-bf7e-3044a56f4654.png)


### 3.3.4 Processo – Personal Trainner Procura Aluno Para Aula

**Este processo está relacionado ao profissional, que terá, como uma das funcionalidades, encontrar um aluno na aplicação para dar aula experimental/permanente.**

![Modelo BPMN Personal Procura Aluno](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-academics-fit/blob/master/docs/imagens/Personal%20encontra%20Aluno%20Diagram.png?raw=true)

### 3.3.5 Modelo BPMN contratação de profissionais.

**Processo relacionado a contratação dos profissionais para a academia.**

![Modelo BPMN contratação de profissionais: ](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-academics-fit/blob/master/docs/imagens/processora%20Diagrama.png?raw=true)

### 3.3.6 Modelo busca de profissionais por alunos.

**Processo voltado à conexão entre aluno e personal.**

![Modelo busca de profissionais por alunos](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-academics-fit/blob/master/docs/imagens/Encontro%20do%20personal.png?raw=true)

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Matrícula academia

**Cadastro dados**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Caixa de Texto |  |  |
| Gênero | caixa de texto | | |
| Idade | número |  |  |
| CPF | número | devem possuir 11 algarismos |  |
| Naturalidade | campo de texto |  |  |
| endereço | rich text |  |  |
|forma de pagamento | campo de texto |  |  |

**Apresentar laudo**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Laudo | anexo | o laudo deve ser válido |  |

**definição matrícula**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| matricula | múltipla escolha |  |  |


#### Processo 2 – Montagem de ficha

**Marcar objetivos**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Objetivos(s) | Múltipla escolha | Algum campo deve ser marcado | Nada selecionado |
|  Outros  |  Caixa de texto  |  Se a pessoa não marcou nada, deverá digitar algo  | Campo vazio |

**Marcar disponibilidade**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Disponibilidade | Seleção única | O usuário está restrito a selecionar uma opção | Nada selecionado |
|  Especificar disponibilidade  |  Múltipla escolha  |  Se o usuário deverá marcar os dias das semanas de sua disponibilidade referente a disponibilidade marcada | Nada selecionado

#### Processo 5  – Matrícula academia

**Cadastro de dados dos profissionais**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| Gênero | caixa de texto | | |
| Formação | caixa de texto | | |
| Experiência | caixa de texto | | |
| Idade | número |  |  |
| endereço | rich text |  |  |


**Apresentar Currículo**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
|  Currículo | anexo | premissa do currículo |  |


### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

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

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




