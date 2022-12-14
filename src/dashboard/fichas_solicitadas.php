<?php

session_start();
if (session_status() === PHP_SESSION_ACTIVE) {
    if ($_SESSION["tipo_login"] == NULL) {
        session_destroy();
        return header("Location: ../login/index.php");
        exit();
    }

    if ($_SESSION["tipo_login"] <> 3) {
        session_destroy();
        return header("Location: ../login/index.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fichas solicitadas</title>
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
            <?php
            include_once("../dashboard/functions/listarInstrutores.php");
            $listarInstrutores = new listarInstrutores();
            $listarInstrutores->buscaInstrutoresDB();
            ?>
            <div class="flex flex-row w-full justify-start pb-7">
                <p class="text-stone-50 text-2xl font-bold">Minhas Fichas</p>
            </div>
            <?php
            include_once("../dashboard/functions/listarFichasUsuarios.php");
            $classeListarFichasUsuario = new listarFichasUsuarios();
            $classeListarFichasUsuario->listarFicha();
            if ($classeListarFichasUsuario->listarFicha()) {
                foreach ($classeListarFichasUsuario->listarFicha() as $fichaSolicitada) {
            ?>
                    <div class="flex flex-row w-full justify-between pb-4">
                        <div class="w-full">
                            <p class="text-stone-50 text-lg font-bold"><?php echo "Instrutor: " . $fichaSolicitada["nome"] . " " . $fichaSolicitada["sobrenome"]; ?></p>
                        </div>
                        <?php if ($fichaSolicitada["status_ficha"] == 1) {
                        ?>
                            <div class="w-full">
                                <p class="text-stone-50 text-lg text-end font-bold">FICHA PRINCIPAL</p>
                            </div>
                        <?php
                        } else { ?>
                            <form action="./functions/setarFichaPrincipalAluno.php" method="POST">
                                <input type="hidden" value="<?php echo $_SESSION["matricula_aluno"] ?>" name="matricula_aluno" id="matricula_aluno">
                                <input type="hidden" value="<?php echo $fichaSolicitada["id_ficha"] ?>" name="setar-ficha-principal" id="setar-ficha-principal">
                                <button class="min-w-max px-8 py-1 font-small tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    Tornar Principal
                                </button>
                            </form>
                        <?php } ?>
                    </div>
                    <div class="flex flex-row w-full pb-.05 font-bold">
                        <p class="text-stone-50 text-sm text-start w-2/4"><?php echo "Exercício" ?></p>
                        <p class="text-stone-50 text-sm text-end w-1/4"><?php echo "Séries" ?></p>
                        <p class="text-stone-50 text-sm text-end w-1/4"><?php echo "Repetições" ?></p>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_1"] <> null ? $fichaSolicitada["exercicio_1"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_1_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_1_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_2"] <> null ? $fichaSolicitada["exercicio_2"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_2_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_2_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_3"] <> null ? $fichaSolicitada["exercicio_3"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_3_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_3_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_4"] <> null ? $fichaSolicitada["exercicio_4"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_4_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_4_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_5"] <> null ? $fichaSolicitada["exercicio_5"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_5_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_5_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_6"] <> null ? $fichaSolicitada["exercicio_6"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_6_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_6_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_7"] <> null ? $fichaSolicitada["exercicio_7"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_7_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_7_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_8"] <> null ? $fichaSolicitada["exercicio_8"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_8_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_8_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_9"] <> null ? $fichaSolicitada["exercicio_9"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_9_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_9_repeticoes"]; ?>
                        </div>
                    </div>

                    <div class="flex flex-row w-full py-2">
                        <div class="text-stone-50 text-base text-start w-2/4">
                            <?php
                            echo $verificaSeExisteExercicio = $fichaSolicitada["exercicio_10"] <> null ? $fichaSolicitada["exercicio_10"] : "O exercício não foi informado";
                            ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_10_series"]; ?>
                        </div>
                        <div class="text-stone-50 text-base text-end w-1/4">
                            <?php echo $fichaSolicitada["exercicio_10_repeticoes"]; ?>
                        </div>
                    </div>
                    <hr class="mt-1 mb-4 border-gray-200 dark:border-gray-600" />
                <?php
                }
            } else {
                ?>
                <div class="">
                    <p>No momento não possui nenhum pedido de ficha destinado a você.</p>
                </div>
            <?php
            }
            ?>
        </div>

    </div>
</body>

</html>