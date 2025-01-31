<?php
function generateOTP(){
    return rand(1000,9999);
}
function sendOTP(){}
function verifyOTP($userotp,$otp){
    return $otp==$userotp;
}
if(!isset($_SESSION["otp"])){
    if(!isset($_POST["id"])){
        echo "Session Expired";
        exit;
    }
    $phone=$_POST["id"];
    $otp=generateOTP();
    $_SESSION["otp"]=$otp;
    sendOTP($phone,$otp);
}
else{
    $userotp=$_POST["otp"];
    $otp=$_SESSION["otp"];
    if(verifyOTP($userotp,$otp)){
        session_unset();
        session_destroy();
        exit;
    }
    echo "INVALID OTP";
}
?>