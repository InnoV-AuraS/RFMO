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
    $sql="SELECT * FROM support_faq";
    $result=$conn->query($sql);
    $limit=5;
    $i=0;

    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $data[]=[$row["question"],$row["answer"]];
            $i++;
            if($i>$limit){
                break;
            }
        }
        echo json_encode($data);
    }
    else{
        echo "0 results";
    }
    $conn->close();
} 
?>