<?php
error_reporting(0);
session_start();

if ($_SESSION["tipo_login"] == NULL) {
    session_destroy();
    exit(header("Location: ../login/index.php"));
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-slate-900">
    <?php include_once("./includes/menu.php"); ?>
</body>

</html>