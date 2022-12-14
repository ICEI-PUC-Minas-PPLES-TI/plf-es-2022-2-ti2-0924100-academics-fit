<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
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

<body class="bg-slate-900 w-full min-h-[100vh] flex flex-col justify-center items-center py-5">
    <div class="flex flex-row w-full justify-center pb-7">
        <p class="text-stone-50 text-2xl font-bold">Cadastro</A></p>
    </div>
    <div class=" flex flex-row w-full px-10">
        <form action="./functions/cadastrarAluno.php" method="POST" class="w-1/2 mx-7">
            <div class="flex flex-row w-full justify-center pb-5">
                <p class="text-stone-50 text-xl font-semibold">Cadastro Usuário</A></p>
            </div>
            <?php
            if (isset($_SESSION["mensagemSucessoAluno"])) {
                $erroMensagem = $_SESSION["mensagemSucessoAluno"];
            ?>
                <div class="bg-green-500 p-3">
                    <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                </div>
            <?php
                unset($_SESSION["mensagemSucessoAluno"]);
            }
            ?>
            <?php
            if (isset($_SESSION["mensagemErroAluno"])) {
                $erroMensagem = $_SESSION["mensagemErroAluno"];
            ?>
                <div class="bg-red-500 p-3">
                    <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                </div>
            <?php
                unset($_SESSION["mensagemErroAluno"]);
            }
            ?>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Nome do aluno</label>
                <input type="text" name="nome_aluno" id="nome_aluno" minlength="3" maxlength="45" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Sobrenome do aluno</label>
                <input type="text" name="sobrenome_aluno" id="sobrenome_aluno" minlength="3" maxlength="99" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Idade do aluno</label>
                <input type="number" name="idade_aluno" id="idade_aluno" min="3" max="99" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Sexo</label>
                <select name="sexo" id="sexo" required class="w-full p-1">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Peso do Aluno</label>
                <input type="text" name="peso_aluno" id="peso_aluno" minlength="4" maxlength="6" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Altura do Aluno</label>
                <input type="text" name="altura_aluno" id="altura_aluno" minlength="3" maxlength="4" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">E-mail do Aluno</label>
                <input type="email" name="email_do_aluno" id="email_do_aluno" minlength="7" maxlength="255" required class="w-full p-1">
            </div>
            <div class="flex flex-col pt-1 pb-2">
                <label for="" class="py-2 text-slate-50 font-base">Senha do Aluno</label>
                <input type="password" name="senha_do_aluno" id="senha_do_aluno" minlength="7" maxlength="255" required class="w-full p-1">
            </div>
            <div class="flex flex-row justify-end py-4 font-sm">
                <a href="../login/index.php" class="text-slate-50 font-sm">Login Aluno</a>
            </div>
            <div class="w-full d-flex flex-row py-1">
                <button type="submit" class="w-full px-8 py-2 font-small tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Cadastrar Aluno</button>
            </div>
        </form>

        <form action="./functions/cadastrarInstrutor.php" method="POST" class="w-1/2 mx-7">
            <div class="flex flex-row w-full justify-center pb-5">
                <p class="text-stone-50 text-xl font-semibold">Cadastro Instrutor</A></p>
            </div>
            <?php
            if (isset($_SESSION["mensagemSucessoInstrutor"])) {
                $erroMensagem = $_SESSION["mensagemSucessoInstrutor"];
            ?>
                <div class="bg-green-500 p-3">
                    <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                </div>
            <?php
                unset($_SESSION["mensagemSucessoInstrutor"]);
            }
            ?>
            <?php
            if (isset($_SESSION["mensagemErroInstrutor"])) {
                $erroMensagem = $_SESSION["mensagemErroInstrutor"];
            ?>
                <div class="bg-red-500 p-3">
                    <p class="text-slate-50 font-sm"><?php echo $erroMensagem; ?></p>
                </div>
            <?php
                unset($_SESSION["mensagemErroInstrutor"]);
                session_destroy();
            }
            ?>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Nome do Instrutor</label>
                <input type="text" name="nome_instrutor" id="nome_instrutor" minlength="3" maxlength="45" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">Sobrenome do Instrutor</label>
                <input type="text" name="sobrenome_instrutor" id="sobrenome_instrutor" minlength="3" maxlength="99" required class="w-full p-1">
            </div>
            <div class="flex flex-col py-1">
                <label for="" class="py-2 text-slate-50 font-base">E-mail do Instrutor</label>
                <input type="email" name="email_do_instrutor" id="email_do_instrutor" minlength="7" maxlength="255" required class="w-full p-1">
            </div>
            <div class="flex flex-col pt-1 pb-2">
                <label for="" class="py-2 text-slate-50 font-base">Senha do Instrutor</label>
                <input type="password" name="senha_do_instrutor" id="senha_do_instrutor" minlength="7" maxlength="255" required class="w-full p-1">
            </div>
            <div class="flex flex-row justify-end py-4 font-sm">
                <a href="../login/index.php" class="text-slate-50 font-sm">Login Instrutor</a>
            </div>
            <div class="w-full d-flex flex-row py-1">
                <button type="submit" class="w-full px-8 py-2 font-small tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-sm hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Cadastrar Instrutor</button>
            </div>
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>

    <script>
        $(document).ready('input[name=peso_aluno]', function(e) {
            $('input[name=peso_aluno]').keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    alert("APENAS NÚMERO");
                }
            });
        });

        $(document).change('input[name=peso_aluno]', function(e) {
            $('input[name=peso_aluno]').attr('max', '6');
            $('input[name=peso_aluno]').mask('00.000');
        });
    </script>

    <script>
        $(document).ready('input[name=altura_aluno]', function(e) {
            $('input[name=altura_aluno]').keypress(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    alert("APENAS NÚMERO");
                }
            });
        });

        $(document).change('input[name=altura_aluno]', function(e) {
            $('input[name=peso_aluno]').attr('max', '5');
            $('input[name=altura_aluno]').mask('0.00');
        });
    </script>
</body>

</html>
