<?php

session_start();

if (session_status() === PHP_SESSION_ACTIVE) {
    if ($_SESSION["tipo_login"] == NULL) {
        session_destroy();
        return header("Location: ../login/index.php");
        exit();
    }
    if ($_SESSION["tipo_login"] <> 2) {
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
    <title>Fichas Solicitadas</title>
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
atualizarFichaAluno

<body class="bg-slate-900">
    <div class="flex flex-row">
        <?php include_once("./includes/menu.php"); ?>
        <div class="flex flex-col w-full h-screen px-7 py-8 bg-white border-r dark:bg-slate-900 dark:border-gray-700">
            <div class="flex flex-row w-full justify-start pb-7">
                <p class="text-stone-50 text-2xl font-bold">Fichas Preenchidas</p>
            </div>
            <?php
            include_once("../dashboard/functions/listarFichasPreenchidasInstrutor.php");
            $classeListarFichasPreenchidasInstrutor = new listarFichasPreenchidasInstrutor($_SESSION["matricula_instrutor"]);
            $classeListarFichasPreenchidasInstrutor->listaFichas();
            if ($classeListarFichasPreenchidasInstrutor->listaFichas()) {
                foreach ($classeListarFichasPreenchidasInstrutor->listaFichas() as $fichaPreenchidasInstrutor) {
            ?>
                    <div class="flex flex-row w-full justify-between pb-4">
                        <div class="w-full">
                            <p class="text-stone-50 text-base font-semibold pb-1"><?php echo "Aluno: " . $fichaPreenchidasInstrutor["nome"]  . " " . $fichaPreenchidasInstrutor["sobrenome"]; ?></p>
                            <p class="text-stone-50 text-base font-semibold py-1"><?php echo "Sexo: " . $fichaPreenchidasInstrutor["sexo"]; ?></p>
                            <p class="text-stone-50 text-base font-semibold py-1"><?php echo "Peso: " . $fichaPreenchidasInstrutor["peso"]; ?></p>
                            <p class="text-stone-50 text-base font-semibold py-1"><?php echo "Altura: " . $fichaPreenchidasInstrutor["altura"]; ?></p>
                            <p class="text-stone-50 text-base font-semibold pt-1"><?php echo "IMC: " . $fichaPreenchidasInstrutor["imc"]; ?></p>
                        </div>
                    </div>
                    <form action="./functions/atualizarFicha.php" method="POST" class="w-full">
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_1"] ?>" name="exercicio_1" id="exercicio_1" placeholder="Exercício 1" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_1_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_1_series"] ;?>" name="exercicio_1_series" id="exercicio_1_series" placeholder="Série do Exercício 1" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_1_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_1_repeticoes"] ;?>" name="exercicio_1_repeticoes" id="exercicio_1_repeticoes" placeholder="Repetições do Exercício 1" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_2"];?>" name="exercicio_2" id="exercicio_2" placeholder="Exercício 2" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_2_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_2_series"];?>" name="exercicio_2_series" id="exercicio_2_series" placeholder="Série do Exercício 2" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_2_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_2_repeticoes"] ;?>" name="exercicio_2_repeticoes" id="exercicio_2_repeticoes" placeholder="Repetições do Exercício 2" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_3"]; ?>" name="exercicio_3" id="exercicio_3" placeholder="Exercício 3" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_3_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_3_series"]; ?>" name="exercicio_3_series" id="exercicio_3_series" placeholder="Série do Exercício 3" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_3_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_3_repeticoes"]; ?>" name="exercicio_3_repeticoes" id="exercicio_3_repeticoes" placeholder="Repetições do Exercício 3" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_4"];?>" name="exercicio_4" id="exercicio_4" placeholder="Exercício 4" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_4_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_4_series"] ;?>" name="exercicio_4_series" id="exercicio_4_series" placeholder="Série do Exercício 4" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_4_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_4_repeticoes"] ;?>" name="exercicio_4_repeticoes" id="exercicio_4_repeticoes" placeholder="Repetições do Exercício 4" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_5"]; ?>" name="exercicio_5" id="exercicio_5" placeholder="Exercício 5" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_5_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_5_series"] ;?>" name="exercicio_5_series" id="exercicio_5_series" placeholder="Série do Exercício 5" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_5_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_5_repeticoes"] ;?>" name="exercicio_5_repeticoes" id="exercicio_5_repeticoes" placeholder="Repetições do Exercício 5" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_6"]; ?>" name="exercicio_6" id="exercicio_6" placeholder="Exercício 6" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_6_series"] == 0 ? "" :  $fichaPreenchidasInstrutor["exercicio_6_series"] ;?>" name="exercicio_6_series" id="exercicio_6_series" placeholder="Série do Exercício 6" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_6_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_6_repeticoes"] ;?>" name="exercicio_6_repeticoes" id="exercicio_6_repeticoes" placeholder="Repetições do Exercício 6" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_7"]; ?>" name="exercicio_7" id="exercicio_7" placeholder="Exercício 7" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_7_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_7_series"] ;?>" name="exercicio_7_series" id="exercicio_7_series" placeholder="Série do Exercício 7" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type=" number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_7_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_7_repeticoes"] ;?>" name="exercicio_7_repeticoes" id="exercicio_7_repeticoes" placeholder="Repetições do Exercício 7" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_8"]; ?>" name="exercicio_8" id="exercicio_8" placeholder="Exercício 8" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_8_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_8_series"] ;?>" name="exercicio_8_series" id="exercicio_8_series" placeholder="Série do Exercício 8" class=" w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_8_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_8_repeticoes"] ;?>" name="exercicio_8_repeticoes" id="exercicio_8_repeticoes" placeholder="Repetições do Exercício 8" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_9"]; ?>" name="exercicio_9" id="exercicio_9" placeholder="Exercício 9" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_9_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_9_series"] ;?>" name="exercicio_9_series" id="exercicio_9_series" placeholder="Série do Exercício 9" class=" w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_9_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_9_repeticoes"] ;?>" name="exercicio_9_repeticoes" id="exercicio_9_repeticoes" placeholder="Repetições do Exercício 9" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="w-full flex flex-row justify-between">
                            <input type="text" value="<?php echo $fichaPreenchidasInstrutor["exercicio_10"]; ?>" name="exercicio_10" id="exercicio_10" placeholder="Exercício 10" class="w-full p-1 my-3 mx-2">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_10_series"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_10_series"] ;?>" name="exercicio_10_series" id="exercicio_10_series" placeholder="Série do Exercício 10" class=" w-full p-1 my-3 mx-2" min="1" max="99">
                            <input type="number" value="<?php echo $fichaPreenchidasInstrutor["exercicio_10_repeticoes"] == 0 ? "" : $fichaPreenchidasInstrutor["exercicio_10_repeticoes"] ;?>" name="exercicio_10_repeticoes" id="exercicio_10_repeticoes" placeholder="Repetições do Exercício 10" class="w-full p-1 my-3 mx-2" min="1" max="99">
                        </div>
                        <div class="">
                            <input type="hidden" value="<?php echo $fichaPreenchidasInstrutor["id_ficha"]; ?>" name="id_ficha" id="id_ficha">
                            <input type="hidden" value="<?php echo $fichaPreenchidasInstrutor["matricula_aluno"]; ?>" name="matricula_aluno" id="matricula_aluno">
                            <input type="hidden" value="<?php echo $_SESSION["matricula_instrutor"]; ?>" name="matricula_instrutor" id="matricula_instrutor">
                        </div>
                        <div class=" w-full d-flex flex-row py-4 ">
                            <button type=" submit" class="w-full px-8 py-2 font-small tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Enviar Ficha</button>
                        </div>
                    </form>

                    <hr class="mt-1 mb-4 border-gray-200 dark:border-gray-600" />
                <?php
                }
            } else {
                ?>
                <div class="">
                    <p class="text-stone-50 text-lg font-semibold">No momento não possui nenhuma ficha preenchida por você.</p>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
</body>

</html>