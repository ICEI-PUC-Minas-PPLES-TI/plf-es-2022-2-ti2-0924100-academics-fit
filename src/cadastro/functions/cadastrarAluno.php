<?php

session_start();

class cadastrarAluno{
    
    public $nome_aluno;
    public $sobrenome_aluno;
    public $idade_aluno;
    public $sexo;
    public $peso_aluno;
    public $altura_aluno;
    public $altura_aluno_imc;
    public $email_do_aluno;
    public $senha_do_aluno;
    public $random_matricula;
    public $imc;

    public function __construct(){
        $this->nome_aluno = $_POST["nome_aluno"];
        $this->sobrenome_aluno = $_POST["sobrenome_aluno"];
        $this->idade_aluno = intval($_POST["idade_aluno"]);
        $this->sexo = $_POST["sexo"];
        $this->peso_aluno = floatval($_POST["peso_aluno"]);
        $this->altura_aluno = floatval($_POST["altura_aluno"]);
        $this->email_do_aluno = $_POST["email_do_aluno"];
        $this->senha_do_aluno = $_POST["senha_do_aluno"];

        include_once("./conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
    }

    public function validaNome(){
        if (!empty($this->nome_aluno) && isset($this->nome_aluno)){
            return $this->nome_aluno;
        }
        else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente o nome do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaSobrenome(){
        if (!empty($this->sobrenome_aluno) && isset($this->sobrenome_aluno)) {
            return $this->sobrenome_aluno;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente o sobrenome do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaIdade(){
        if (!empty($this->idade_aluno) && isset($this->idade_aluno) && is_int($this->idade_aluno)) {
            return $this->idade_aluno;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente a idade do aluno!";
            exit(header("Location: ../index.php"));
        }
    }


    public function validaSexo(){
        if (!empty($this->sexo) && isset($this->sexo) && $this->sexo == "F" || $this->sexo == "M") {
            return $this->sexo;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente o sexo do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaPeso(){
        if (!empty($this->peso_aluno) && isset($this->peso_aluno) && is_float($this->peso_aluno)){
            return $this->peso_aluno;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente o peso do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaAltura(){
        if (!empty($this->altura_aluno) && isset($this->altura_aluno) && is_float($this->altura_aluno)) {
            return $this->altura_aluno;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente a altura do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaEmail(){
        if (!empty($this->email_do_aluno) && isset($this->email_do_aluno)) {
            $verificarEmailDB = $this->conexao_bd->prepare("SELECT email FROM alunos WHERE email = ?");
            $verificarEmailDB->bindParam(1, $this->email_do_aluno, PDO::PARAM_STR);
            $verificarEmailDB->execute();
            $resultaConsultaEmail = $verificarEmailDB->fetch(PDO::FETCH_ASSOC);
            if ($resultaConsultaEmail["email"] == $this->email_do_aluno) {
                $_SESSION["mensagemErroAluno"] = "Esse e-mail já está sendo utilizado!";
                exit(header("Location: ../index.php"));            
            }
            else {
                return $this->email_do_aluno;
            }
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente o e-mail do aluno!";
            exit(header("Location: ../index.php"));
        }
    }

    public function validaSenha(){
        if (!empty($this->senha_do_aluno) && isset($this->senha_do_aluno)) {
            $this->senha_do_aluno = md5($this->senha_do_aluno);
            return $this->senha_do_aluno;
        } else {
            $_SESSION["mensagemErroAluno"] = "Gentileza preencher corretamente a senha do aluno!";
            exit(header("Location: ../index.php"));
        }    
    }

    public function calculaIMC() {
        $this->altura_aluno = str_replace(',', '.', $this->altura_aluno);
        $this->peso_aluno = str_replace(',', '.', $this->peso_aluno);
        $this->altura_aluno_imc = $this->altura_aluno * $this->altura_aluno;
        $this->imc = $this->peso_aluno / $this->altura_aluno_imc;
        $this->imc = round($this->imc, 2);
        return $this->imc;
    }

    public function geraMatricula(){       
        $this->while_matricula = 1;
        while ($this->while_matricula == 1) {
            $this->random_matricula = strtoupper(bin2hex(random_bytes(10)));
            $verificarMatriculaDB = $this->conexao_bd->prepare("SELECT matricula_aluno FROM alunos WHERE matricula_aluno = ?");
            $verificarMatriculaDB->bindParam(1, $this->random_matricula, PDO::PARAM_STR);
            $verificarMatriculaDB->execute();
            $resultaConsultaMatricula = $verificarMatriculaDB->fetch(PDO::FETCH_ASSOC);
            if ($resultaConsultaMatricula <> $this->random_matricula) {
                $this->while_matricula = 0;
                return $this->random_matricula;
            }
        }
    }

    public function insereAluno(){
        $insereDados = $this->conexao_bd->prepare("INSERT INTO alunos (matricula_aluno, nome, sobrenome, idade, sexo, altura, peso, imc, email, senha) VALUES (?,?,?,?,?,?,?,?,?,?)");
        $insereDados->bindParam(1, $this->random_matricula, PDO::PARAM_STR);
        $insereDados->bindParam(2, $this->nome_aluno, PDO::PARAM_STR);
        $insereDados->bindParam(3, $this->sobrenome_aluno, PDO::PARAM_STR);
        $insereDados->bindParam(4, $this->idade_aluno, PDO::PARAM_INT);
        $insereDados->bindParam(5, $this->sexo, PDO::PARAM_STR);
        $insereDados->bindParam(6, $this->altura_aluno);
        $insereDados->bindParam(7, $this->peso_aluno);
        $insereDados->bindParam(8, $this->imc);
        $insereDados->bindParam(9, $this->email_do_aluno, PDO::PARAM_STR);
        $insereDados->bindParam(10, $this->senha_do_aluno, PDO::PARAM_STR);
        $insereDados->execute();
        if ($insereDados->rowCount() == 1) {
            $_SESSION["mensagemSucessoAluno"] = "Aluno ". $this->nome_aluno . " " . $this->sobrenome_aluno . " cadastrado com sucesso!";
            exit(header("Location: ../index.php"));
        }
        else {
            $_SESSION["mensagemErroAluno"] = "Ocorreu um erro durante a inserção das informações!";
            exit(header("Location: ../index.php"));
        }
    }

}

$classeCadastrarAluno = new cadastrarAluno($_POST["nome_aluno"], $_POST["sobrenome_aluno"], $_POST["idade_aluno"], $_POST["sexo"], $_POST["peso_aluno"], $_POST["altura_aluno"], $_POST["email_do_aluno"], $_POST["senha_do_aluno"]);
$classeCadastrarAluno->validaNome();
$classeCadastrarAluno->validaSobrenome();
$classeCadastrarAluno->validaIdade();
$classeCadastrarAluno->validaSexo();
$classeCadastrarAluno->validaAltura();
$classeCadastrarAluno->validaPeso();
$classeCadastrarAluno->validaEmail();
$classeCadastrarAluno->validaSenha();
$classeCadastrarAluno->calculaIMC();
$classeCadastrarAluno->geraMatricula();
$classeCadastrarAluno->insereAluno();
?>
