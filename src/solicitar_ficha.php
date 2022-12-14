<?php
session_start();

if (session_status() === PHP_SESSION_ACTIVE) {
    if ($_SESSION["tipo_login"] == NULL) {
        session_destroy();
        exit(header("Location: ../login/index.php"));
    }

    if ($_SESSION["tipo_login"] <> 3) {
        session_destroy();
        exit(header("Location: ../login/index.php"));
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solicitar Ficha</title>
    <script src="https://cdn.tailwindcss.com"></script>

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700" rel="stylesheet">
    <style>
        * {
            font-family: Poppins, sans-serif;
            margin: 0;
            padding: 0
        }
    </style>
</head>

<body class="bg-slate-900">
    <div class="flex flex-row">
        <?php include_once("./includes/menu.php"); ?>
        <div class="flex flex-col w-full h-screen px-7 py-8 bg-white border-r dark:bg-slate-900 dark:border-gray-700">
            <div class="flex flex-row w-full justify-start pb-7">
                <p class="text-stone-50 text-2xl font-bold">Solicitar Ficha de Exercícios</p>
            </div>
            <form action="./functions/solicitarFicha.php" method="POST" class="w-full">
                <?php
                if (isset($_SESSION["mensagemSucesso"])) {
                    $erroMensagem = $_SESSION["mensagemSucesso"];
                ?>
                    <div class="bg-green-500 p-3">
                        <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                    </div>
                <?php
                    unset($_SESSION["mensagemSucesso"]);
                }
                ?>
                <?php
                if (isset($_SESSION["mensagemErro"])) {
                    $erroMensagem = $_SESSION["mensagemErro"];
                ?>
                    <div class="bg-red-500 p-3">
                        <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                    </div>
                <?php
                    unset($_SESSION["mensagemErro"]);
                }
                ?>
                <?php
                include_once("../dashboard/functions/listarInstrutores.php");
                $listarInstrutores = new listarInstrutores();
                $listarInstrutores->buscaInstrutoresDB();
                ?>
                <div class="">
                    <label for="" class="text-slate-50 text-lg font-bold">Escolha um dos instrutores</label>
                    <select name="instrutores" id="instrutores" class="w-full py-1 my-3">
                        <?php
                        foreach ($listarInstrutores->buscaInstrutoresDB() as $instrutor) {
                        ?>
                            <option value=" <?php echo $instrutor["matricula_instrutor"] ?>" name="matricula_instrutor" id="matricula_instrutor"> <?php echo $instrutor["nome"] . " " . $instrutor["sobrenome"] ?></option>
                        <?php
                        }
                        ?>
                    </select>
                </div>
                <div class="w-full d-flex flex-row">
                    <button type="submit" class="w-full px-8 py-2 font-small tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Solicitar Ficha</button>
                </div>
            </form>
        </div>
    </div>
</body>

</html>