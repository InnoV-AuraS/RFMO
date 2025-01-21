<?php  echo"
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Contact and Support</title>
        <link rel='stylesheet' href='Style Sheets/support_style.css'>
    </head>
    <body>

    <header>
        <h1>Contact and Support</h1>
        <p>We are here to help you!</p>
    </header>

    <div class='container'>
        <section class='section' id='faqs'>
            <h2>FAQs</h2>";
            
$servername="localhost";
$username="root";
$password="snehasis932005";
$dbname="rfmo_database";
$flag=false;

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
            echo "<div class='faq'>
                    <h3>{$row["question"]}</h3>
                    <p>{$row["answer"]}</p>
                    </div>";
            $i++;
            if($i>$limit){
                break;
            }
        }
    }
    else{
        echo "0 results";
    }
    $conn->close();
}

        echo "</section>

        <section class='section' id='contact-form'>
            <h2>Contact Form</h2>
            <form id='support-form' action='http://localhost:3000/RFMO/support_form_handler.php' method='POST'>
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' placeholder='Your Name' required>

                <label for='email'>Email:</label>
                <input type='email' id='email' name='email' placeholder='Your Email' required>

                <label for='message'>Message:</label>
                <textarea id='message' name='message' rows='5' placeholder='Your Message' required></textarea>

                <button type='submit'>Submit</button>
            </form>
        </section>

        <section class='section' id='contact-info'>
            <h2>Contact Information</h2>
            <p>Support Email: <a href='mailto:support@example.com'>support@example.com</a></p>
            <p>Helpline: <strong>1-800-123-4567</strong></p>
        </section>

        <section class='section chatbot'>
            <h2>Chat with Us</h2>
            <p>Our chatbot is here to assist you 24/7.</p>
            <iframe src='https://example.com/chatbot'></iframe>
        </section>
    </div>
    <script src='script.js'></script>
    </body>
    </html> ";
?>