<?php
function validate($type,$id,$password){
    $flag=false;
    require '../db_config.php';

    try{
    $conn=new mysqli($servername,$username,$password,$dbname);
    }
    catch(Exception $e){
        $flag=true;
        echo "server side error";
    }

    if($flag || $conn->connect_error){
        echo "Connection to login failed:";
    }
    else{
        $sql="SELECT id FROM {$type} WHERE id='{$id}'";
        $result=$conn->query($sql);
        if($result->num_rows>0){
            $query="SELECT password FROM {$type} WHERE id='{$id}'";
            $result=$conn->query($query);
            $row=$result->fetch_assoc();
            $stored_password=$row['password'];
            if($password===$stored_password){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
        $conn->close();
    }
}
$type=$_POST["type"];
$id=$_POST["id"];
$password=$_POST["password"];
if(!empty($type)&&!empty($id)&&!empty($password)){
    if(validate($type,$id,$password)){
        $_SESSION["logged_in"]=true;
        header("Location:profile.html");
    }
    else{
        echo "login failed";
    }
}
else{
    echo "Something went wrong";
}
?>