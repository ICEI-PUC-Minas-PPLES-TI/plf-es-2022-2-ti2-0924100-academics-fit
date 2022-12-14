<?php

session_start();

class enviarFichaParaAluno
{

    public $exercicio_1;
    public $exercicio_1_series;
    public $exercicio_1_repeticoes;
    public $exercicio_2;
    public $exercicio_2_series;
    public $exercicio_2_repeticoes;
    public $exercicio_3;
    public $exercicio_3_series;
    public $exercicio_3_repeticoes;
    public $exercicio_4;
    public $exercicio_4_series;
    public $exercicio_4_repeticoes;
    public $exercicio_5;
    public $exercicio_5_series;
    public $exercicio_5_repeticoes;
    public $exercicio_6;
    public $exercicio_6_series;
    public $exercicio_6_repeticoes;
    public $exercicio_7;
    public $exercicio_7_series;
    public $exercicio_7_repeticoes;
    public $exercicio_8;
    public $exercicio_8_series;
    public $exercicio_8_repeticoes;
    public $exercicio_9;
    public $exercicio_9_series;
    public $exercicio_9_repeticoes;
    public $exercicio_10;
    public $exercicio_10_series;
    public $exercicio_10_repeticoes;
    public $matricula_aluno;
    public $matricula_instrutor;
    public $id_ficha;

    function __construct()
    {
        $this->exercicio_1 = $_POST["exercicio_1"];
        $this->exercicio_1_series = $_POST["exercicio_1_series"];
        $this->exercicio_1_repeticoes = $_POST["exercicio_1_repeticoes"];
        $this->exercicio_2 = $_POST["exercicio_2"];
        $this->exercicio_2_series = $_POST["exercicio_2_series"];
        $this->exercicio_2_repeticoes = $_POST["exercicio_2_repeticoes"];
        $this->exercicio_3 = $_POST["exercicio_3"];
        $this->exercicio_3_series = $_POST["exercicio_3_series"];
        $this->exercicio_3_repeticoes = $_POST["exercicio_3_repeticoes"];
        $this->exercicio_4 = $_POST["exercicio_4"];
        $this->exercicio_4_series = $_POST["exercicio_4_series"];
        $this->exercicio_4_repeticoes = $_POST["exercicio_4_repeticoes"];
        $this->exercicio_5 = $_POST["exercicio_5"];
        $this->exercicio_5_series = $_POST["exercicio_5_series"];
        $this->exercicio_5_repeticoes = $_POST["exercicio_5_repeticoes"];
        $this->exercicio_6 = $_POST["exercicio_6"];
        $this->exercicio_6_series = $_POST["exercicio_6_series"];
        $this->exercicio_6_repeticoes = $_POST["exercicio_6_repeticoes"];
        $this->exercicio_7 = $_POST["exercicio_7"];
        $this->exercicio_7_series = $_POST["exercicio_7_series"];
        $this->exercicio_7_repeticoes = $_POST["exercicio_7_repeticoes"];
        $this->exercicio_8 = $_POST["exercicio_8"];
        $this->exercicio_8_series = $_POST["exercicio_8_series"];
        $this->exercicio_8_repeticoes = $_POST["exercicio_8_repeticoes"];
        $this->exercicio_9 = $_POST["exercicio_9"];
        $this->exercicio_9_series = $_POST["exercicio_9_series"];
        $this->exercicio_9_repeticoes = $_POST["exercicio_9_repeticoes"];
        $this->exercicio_10 = $_POST["exercicio_10"];
        $this->exercicio_10_series = $_POST["exercicio_10_series"];
        $this->exercicio_10_repeticoes = $_POST["exercicio_10_repeticoes"];
        $this->matricula_aluno = $_POST["matricula_aluno"];
        $this->id_ficha = $_POST["id_ficha"];

        $this->matricula_instrutor = $_SESSION["matricula_instrutor"];
    }

    public function validaMatricula()
    {
        if (!empty($this->matricula_aluno) && isset($this->matricula_aluno) && !empty($this->matricula_instrutor) && isset($this->matricula_instrutor) && $this->matricula_aluno <> $this->matricula_instrutor) {
            return $this->matricula_aluno;
        } else {
            $_SESSION["mensagemErro"] = "Operação inválida!";
            exit(header("Location: ../solicitacoes_fichas.php"));
        }
    }

    public function insereFicha()
    {
        include_once("./conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $atualizarFichaAluno = $this->conexao_bd->prepare("UPDATE fichas SET exercicio_1 = ?, exercicio_1_series = ?, exercicio_1_repeticoes = ?, exercicio_2 = ?, exercicio_2_series = ?, exercicio_2_repeticoes = ?, exercicio_3 = ?, exercicio_3_series = ?, exercicio_3_repeticoes = ?, exercicio_4 = ?, exercicio_4_series = ?, exercicio_4_repeticoes = ?, exercicio_5 = ?, exercicio_5_series = ?, exercicio_5_repeticoes = ?, exercicio_6 = ?, exercicio_6_series = ?, exercicio_6_repeticoes = ?, exercicio_7 = ?, exercicio_7_series = ?, exercicio_7_repeticoes = ?, exercicio_8 = ?, exercicio_8_series = ?, exercicio_8_repeticoes = ?, exercicio_9 = ?, exercicio_9_series = ?, exercicio_9_repeticoes = ?, exercicio_10 = ?, exercicio_10_series = ?, exercicio_10_repeticoes = ? WHERE id_ficha = ? AND matricula_aluno = ? AND matricula_instrutor = ?");
        $atualizarFichaAluno->bindParam(1, $this->exercicio_1, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(2, $this->exercicio_1_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(3, $this->exercicio_1_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(4, $this->exercicio_2, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(5, $this->exercicio_2_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(6, $this->exercicio_2_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(7, $this->exercicio_3, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(8, $this->exercicio_3_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(9, $this->exercicio_3_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(10, $this->exercicio_4, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(11, $this->exercicio_4_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(12, $this->exercicio_4_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(13, $this->exercicio_5, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(14, $this->exercicio_5_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(15, $this->exercicio_5_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(16, $this->exercicio_6, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(17, $this->exercicio_6_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(18, $this->exercicio_6_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(19, $this->exercicio_7, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(20, $this->exercicio_7_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(21, $this->exercicio_7_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(22, $this->exercicio_8, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(23, $this->exercicio_8_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(24, $this->exercicio_8_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(25, $this->exercicio_9, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(26, $this->exercicio_9_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(27, $this->exercicio_9_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(28, $this->exercicio_10, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(29, $this->exercicio_10_series, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(30, $this->exercicio_10_repeticoes, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(31, $this->id_ficha, PDO::PARAM_INT);
        $atualizarFichaAluno->bindParam(32, $this->matricula_aluno, PDO::PARAM_STR);
        $atualizarFichaAluno->bindParam(33, $this->matricula_instrutor, PDO::PARAM_STR);
        $atualizarFichaAluno->execute();
        if ($atualizarFichaAluno->rowCount() == 1) {
            unset($_SESSION["matricula_aluno_solicitante"]);
            unset($_SESSION["id_solicitacao"]);
            exit(header("Location: ../solicitacoes_fichas_preenchidas.php"));
        } else {
            unset($_SESSION["matricula_aluno_solicitante"]);
            unset($_SESSION["id_solicitacao"]);
            exit(header("Location: ../solicitacoes_fichas_preenchidas.php"));
        }
    }
}

$classeEnviarFichaParaAluno = new enviarFichaParaAluno();
$classeEnviarFichaParaAluno->validaMatricula();
$classeEnviarFichaParaAluno->insereFicha();
