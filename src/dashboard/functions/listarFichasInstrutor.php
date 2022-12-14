<?php

class listarFichasInstrutor
{

    public $matricula_instrutor;

    function __construct(){
        $this->matricula_instrutor = $_SESSION["matricula_instrutor"];
    }

    function listaFichas(){
        include_once("../dashboard/functions/conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $buscarFichasSolicitadas = $this->conexao_bd->prepare("SELECT sf.id_solicitacao ,sf.matricula_aluno, sf.data_solicitacao, a.nome, a.sobrenome, a.sexo, a.idade, a.altura, a.peso, a.imc FROM solicitacao_fichas AS sf INNER JOIN alunos AS a ON sf.matricula_aluno = a.matricula_aluno WHERE sf.status_solicitacao_ficha = 2 AND sf.matricula_instrutor = ? ");
        $buscarFichasSolicitadas->bindParam(1, $this->matricula_instrutor, PDO::PARAM_STR);
        $buscarFichasSolicitadas->execute();
        if ($buscarFichasSolicitadas->rowCount() >= 1) {
            return $buscarFichasSolicitadas;
        }
    }
}

