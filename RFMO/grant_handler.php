<?php
function sendMessage($title,$status,$description,$milestone,$challenge){//sender code here
return true;
}

$title=$_POST["project-title"];
$status=$_POST["project-status"];
$description=$_POST["project-description"];
$milestone=$_POST["milestones-achieved"];
$challenge=$_POST["challenges-faced"];

if(!empty($title)&&!empty($status)&&!empty($description)&&!empty($milestone)&&!empty($challenge)){
    if(sendMessage($title,$status,$description,$milestone,$challenge)){
        echo "<h2>Form submitted successfully</h2>";
    }
    else{
        echo "<h2>Message not sent</h2>";
    }
}
else{
    echo "<h2>Something went wrong</h2>";
}
?>