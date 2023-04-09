<?php
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];
  $captcha_response = $_POST['g-recaptcha-response'];

  // Verifica el captcha
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = array(
    'secret' => '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',
    'response' => $captcha_response
  );
  $options = array(
    'http' => array (
      'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    )
  );
  $context  = stream_context_create($options);
  $verify = file_get_contents($url, false, $context);
  $captcha_success = json_decode($verify);

  if (!$captcha_success->success) {
    // El captcha no fue completado correctamente
    header('Location: formulario_contacto.php?captcha_error=true');
    exit;
  }

  // Envía el correo electrónico
  $to = 'greyalos0ffici4l@gmail.com';
  $subject = 'Nuevo mensaje de formulario de contacto';
  $message = 'Nombre: ' . $nombre . "\r\n\r\n";
  $message .= 'Email: ' . $email . "\r\n\r\n";
  $message .= 'Mensaje: ' . $mensaje;
  $headers = 'From: ' . $email . "\r\n" .
             'Reply-To: ' . $email . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    // El correo electrónico fue enviado exitosamente
    header('Location: formulario_contacto.php?enviado=true');
    exit;
  } else {
    // Ocurrió un error al enviar el correo electrónico
    header('Location: formulario_contacto.php?enviado=false');
    exit;
  }
?>
