<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type,Accept");

$flag=false;
require '../db_config.php';
$data=[];

try{
$conn=new mysqli($servername,$username,$password,$dbname);
}
catch(Exception $e){
    $flag=true;
    echo "server side error";
}

if($flag || $conn->connect_error){
    echo "Connection to faq failed:";
}
else{
    if(isset($_POST["other-question"])){
        $question=$_POST["other-question"];
        $sql="INSER INTO new_faq(question) VALUES ({$question});";
        echo "question submitted successfully";
    }
    else{
        echo "something went wrong";
    }
    $conn->close();
} 
?>