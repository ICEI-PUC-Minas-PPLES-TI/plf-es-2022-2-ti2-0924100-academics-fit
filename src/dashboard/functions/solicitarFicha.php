<?php
session_start();

class solicitarFicha {

    public $matricula_aluno;
    public $matricula_instrutor;
    public $data_solicitacao;
    public $status_solicitacao;

    function __construct()
    {
        $this->matricula_aluno = trim($_SESSION["matricula_aluno"]);
        $this->matricula_instrutor = trim($_POST["instrutores"]);
    }

    function validarMatriculaAluno(){
        if (!empty($this->matricula_aluno) && isset($this->matricula_aluno) && $this->matricula_aluno <> $this->matricula_instrutor){
            return $this->matricula_aluno;
        }
        else {
            $_SESSION["mensagemErro"] = "Operação inválida!";
            exit(header("Location: ../solicitar_ficha.php"));
        }
    }

    function insereSolicitacaoFicha(){
        $this->data_solicitacao = date('d/m/Y');
        $this->status_solicitacao = 2;

        include_once("./conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $insereDados = $this->conexao_bd->prepare("INSERT INTO solicitacao_fichas (matricula_aluno, matricula_instrutor, status_solicitacao_ficha, data_solicitacao) VALUES (?,?,?,?)");
        $insereDados->bindParam(1, $this->matricula_aluno, PDO::PARAM_STR);
        $insereDados->bindParam(2, $this->matricula_instrutor, PDO::PARAM_STR);
        $insereDados->bindParam(3, $this->status_solicitacao, PDO::PARAM_INT);
        $insereDados->bindParam(4, $this->data_solicitacao, PDO::PARAM_STR);
        $insereDados->execute();
        if ($insereDados->rowCount() == 1) {
            $_SESSION["mensagemSucesso"] = "Sua solicitação foi enviada com sucesso cadastrado com sucesso! <br> Agora é só aguardar o instrutor aceitar ou recursar a solicitação de preencher a sua ficha.";
            exit(header("Location: ../solicitar_ficha.php"));
        } else {
            $_SESSION["mensagemErro"] = "Ocorreu um erro durante a inserção das informações!";
            exit(header("Location: ../solicitar_ficha.php"));
        }
    }

}

$classeSolicitarFicha = new solicitarFicha($_POST["instrutores"]);
$classeSolicitarFicha->validarMatriculaAluno();
$classeSolicitarFicha->insereSolicitacaoFicha();
?>