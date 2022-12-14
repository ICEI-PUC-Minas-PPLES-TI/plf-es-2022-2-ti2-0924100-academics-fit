<?php

class ConectarBD
{

    public static $pdo;

    public function ConexaoDB()
    {
        try {
            if (!static::$pdo) {
                $dsn = "mysql:host=localhost;dbname=id20009551_academicsfit";
                $opcoes = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
                static::$pdo = new PDO($dsn, "id20009551_academics", "iX_4[WFJt_dDvkd~",$opcoes);
            }
            return static::$pdo;
        } catch (PDOException $e) {
            var_dump($e->getMessage());
            die("<br>" . "<br>" . "Erro ao conectar ao banco");
        }
    }
}

?>