<?php

session_start();

class cadastrarInstrutor{
    
    public $nome_instrutor;
    public $sobrenome_instrutor;
    public $email_do_instrutor;
    public $senha_do_instrutor;

    function __construct()
    {
        $this->nome_instrutor = $_POST["nome_instrutor"];
        $this->sobrenome_instrutor = $_POST["sobrenome_instrutor"];
        $this->email_do_instrutor = $_POST["email_do_instrutor"];
        $this->senha_do_instrutor = $_POST["senha_do_instrutor"];
    }

    public function validaNome(){
        if (!empty($this->nome_instrutor) && isset($this->nome_instrutor)){
            return $this->nome_instrutor;
        }
        else {
            $_SESSION["mensagemErroInstrutor"] = "Gentileza preencher corretamente o nome do instrutor!";
           exit(header("Location: ../index.php"));
        }
    }

    public function validaSobrenome(){
        if (!empty($this->sobrenome_instrutor) && isset($this->sobrenome_instrutor)) {
            return $this->sobrenome_instrutor;
        } else {
            $_SESSION["mensagemErroInstrutor"] = "Gentileza preencher corretamente o sobrenome do instrutor!";
           exit(header("Location: ../index.php"));
        }
    }

    public function validaEmail(){
        if (!empty($this->email_do_instrutor) && isset($this->email_do_instrutor)) {
            $verificarEmailDB = $this->conexao_bd->prepare("SELECT email FROM instrutores WHERE email = ?");
            $verificarEmailDB->bindParam(1, $this->email_do_instrutor, PDO::PARAM_STR);
            $verificarEmailDB->execute();
            $resultaConsultaEmail = $verificarEmailDB->fetch(PDO::FETCH_ASSOC);
            if ($resultaConsultaEmail["email"] == $this->email_do_instrutor) {
                $_SESSION["mensagemErroInstrutor"] = "Esse e-mail já está sendo utilizado!";
                exit(header("Location: ../index.php"));
            } else {
                return $this->email_do_instrutor;
            }
        } else {
            $_SESSION["mensagemErroInstrutor"] = "Gentileza preencher corretamente o e-mail do instrutor!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaSenha(){
        if (!empty($this->senha_do_instrutor) && isset($this->senha_do_instrutor)) {
            $this->senha_do_instrutor = md5($this->senha_do_instrutor);
            return $this->senha_do_instrutor;
        } else {
            $_SESSION["mensagemErroInstrutor"] = "Gentileza preencher corretamente a senha do instrutor!";
            exit(header("Location: ../index.php"));
        }
    
    }

    public function geraMatricula(){
        $this->while_matricula = 1;
        while ($this->while_matricula == 1) {
            $this->random_matricula = strtoupper(bin2hex(random_bytes(10)));
            include_once("./conexao_db.php");
            $x = new ConectarBD();
            $this->conexao_bd = $x->ConexaoDB();
            $verificarMatriculaDB  = $this->conexao_bd->prepare("SELECT nome FROM instrutores WHERE matricula_instrutor = ?");
            $verificarMatriculaDB->bindParam(1, $this->random_matricula, PDO::PARAM_STR);
            $verificarMatriculaDB->execute();
            $resultaConsultaMatricula = $verificarMatriculaDB->fetch(PDO::FETCH_ASSOC);
            if ($resultaConsultaMatricula <> $this->random_matricula) {
                $this->while_matricula = 0;
                return $this->random_matricula;
            }
        }
    }


    public function insereInstutor(){
        include_once("./conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $insereDados = $this->conexao_bd->prepare("INSERT INTO instrutores (matricula_instrutor, nome, sobrenome, email, senha) VALUES (?,?,?,?,?)");
        $insereDados->bindParam(1, $this->random_matricula, PDO::PARAM_STR);
        $insereDados->bindParam(2, $this->nome_instrutor, PDO::PARAM_STR);
        $insereDados->bindParam(3, $this->sobrenome_instrutor, PDO::PARAM_STR);
        $insereDados->bindParam(4, $this->email_do_instrutor, PDO::PARAM_STR);
        $insereDados->bindParam(5, $this->senha_do_instrutor, PDO::PARAM_STR);
        $insereDados->execute();
        if ($insereDados->rowCount() == 1) {
            $_SESSION["mensagemSucessoInstrutor"] = "Instrutor ". $this->nome_instrutor . " " . $this->sobrenome_instrutor . " cadastrado com sucesso!";
            exit(header("Location: ../index.php"));
        }
        else {
            $_SESSION["mensagemErroInstrutor"] = "Ocorreu um erro durante a inserção das informações!";
           exit(header("Location: ../index.php"));
        }
    }

}

$classeCadastrarInstrutor = new cadastrarInstrutor($_POST["nome_instrutor"], $_POST["sobrenome_instrutor"], $_POST["email_do_instrutor"], $_POST["senha_do_instrutor"]);
$classeCadastrarInstrutor->validaNome();
$classeCadastrarInstrutor->validaSobrenome();
$classeCadastrarInstrutor->geraMatricula();
$classeCadastrarInstrutor->validaSenha();
$classeCadastrarInstrutor->validaEmail();
$classeCadastrarInstrutor->insereInstutor();
?>