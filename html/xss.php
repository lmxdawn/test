<?php

/**
 * 测试 xss攻击
 */

error_reporting(0);
$name = $_GET["name"];
?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>


    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="../jquery-1.7.min.js"></script>
    <link rel="shortcut icon" href="../favicon.ico">

</head>
<body>

<?php //echo htmlspecialchars('<a href="javascript:alert(123)">click</a>');exit;?>

<input id="text" type="text" value="<?php echo $name;?>" />
<div id="print"></div>
<script type="text/javascript">

    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    var text = document.getElementById("text");
    var print = document.getElementById("print");
    print.innerHTML = escapeHtml('\u003cimg src=1 onerror=alert(/xss/)\u003e'); // 获取 text的值，并且输出在print内。这里是导致xss的主要原因。

    var name = "home123";

    !(function (name) {
        function Names() { Names.HOME = name}
        //var Names = {};
        Names.HOME = "home";
        alert(name);
    })(name);

//    $(function () {
//        $("#print").html(text.value);
//    })
</script>

</body>
</html>