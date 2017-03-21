
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>


<script type="text/javascript">


function bd__pcbs__ezidcg(config){


    if (config.err_no != 0 && config.msg) {
        alert(decodeURIComponent(config.msg));
        return false;
    }


    if(window.location){
        window.location.replace(decodeURIComponent(config.u));
    }else{
       document.location.replace(decodeURIComponent(config.u)); 
    }

}


</script>


<form id="form" target="ifTmp" action="http://www.ccc.com/login.php" method="post">

    <input type="test" name="user_name" value="">
    <input type="test" name="pwd" value="">
    <input type="hidden" name="staticpage" value="http://www.aaa.com/v3Jump.html">
    <input type="hidden" name="callback"  value="parent.bd__pcbs__ezidcg">
    <input type="hidden" name="u" value="http://www.aaa.com">
    
    <input type="submit" name="" value="登录">

</form>

<iframe id="ifActionResult" name="ifTmp" width="1px" height="1px" style="display: none;"></iframe>


</body>
</html>



