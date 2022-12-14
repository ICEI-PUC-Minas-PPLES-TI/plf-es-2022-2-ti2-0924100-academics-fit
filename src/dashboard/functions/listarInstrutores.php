<?php

class listarInstrutores {

    function buscaInstrutoresDB() {
        include_once("../dashboard/functions/conexao_db.php");
        $x = new ConectarBD();
        $this->conexao_bd = $x->ConexaoDB();
        $buscaInstrutores = $this->conexao_bd->prepare("SELECT matricula_instrutor, nome, sobrenome FROM instrutores");
        $buscaInstrutores->setFetchMode(PDO::FETCH_ASSOC);
        $buscaInstrutores->execute();
        if ($buscaInstrutores->rowCount() >= 1) {
            return $buscaInstrutores;
        }
    }

}

?>