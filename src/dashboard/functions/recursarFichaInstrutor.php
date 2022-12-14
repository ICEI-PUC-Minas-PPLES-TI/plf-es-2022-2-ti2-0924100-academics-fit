<?php

class recursarFichaInstrutor
{

    public $id_solicitacao;
    public $matricula_aluno;
    public $matricula_instrutor;

    public function __construct()
    {
        $this->id_solicitacao = intval($_POST["id_solicitacao"]);
        $this->matricula_aluno = strval($_POST["matricula_aluno"]);
        $this->matricula_instrutor = strval($_POST["matricula_instrutor"]);
    }

    public function recusarFicha()
    {
        include_once("./conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $updateSolicitacao = $this->conexao_bd->prepare("UPDATE solicitacao_fichas SET status_solicitacao_ficha = 3 WHERE id_solicitacao = ? AND matricula_aluno = ? AND matricula_instrutor = ?");
        $updateSolicitacao->bindParam(1, $this->id_solicitacao, PDO::PARAM_INT);
        $updateSolicitacao->bindParam(2, $this->matricula_aluno, PDO::PARAM_STR);
        $updateSolicitacao->bindParam(3, $this->matricula_instrutor, PDO::PARAM_STR);
        $updateSolicitacao->execute();

        exit(header("Location: ../solicitacoes_fichas.php"));
    }
}

$classeRecursarFichaInstrutor = new recursarFichaInstrutor($_POST["id_solicitacao"], $_POST["matricula_aluno"], $_POST["matricula_instrutor"]);
$classeRecursarFichaInstrutor->recusarFicha();
