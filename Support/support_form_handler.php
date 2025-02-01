<?php
function sendMessage($name,$email,$message){//sender code here
return true;
}

$name=$_POST["name"];
$email=$_POST["email"];
$message=$_POST["message"];

if(!empty($name)&&!empty($email)&&!empty($message)){
    if(sendMessage($name,$email,$message)){
        echo "<h2>Message sent successfully</h2>";
    }
    else{
        echo "<h2>Message not sent</h2>";
    }
}
else{
    echo "<h2>Something went wrong</h2>";
}
?>