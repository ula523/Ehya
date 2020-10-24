<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$email = $_POST['email'];



// Формирование самого письма
$title = "Новая подписка Ehya";
$body = "
<h2>Подписка</h2>
<b>Электронная почта:</b><br>$email
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host = 'ssl://smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Port = 465;
    $mail->Username = 'umaksimova523@gmail.com'; // Логин на почте
    $mail->Password   = 'Ulamxmva_523'; // Пароль на почте
    $mail->setFrom('UlyanaMaksimova573@yandex.ru', 'Ульяна Максимова'); // Адрес самой почты и имя отправителя

    // Получатель письма

    $mail->addAddress('UlyanaMaksimova573@yandex.ru');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location:thankyou.html');