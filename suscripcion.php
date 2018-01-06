<?php
	$name = (isset($_POST['name'])) ? $_POST['name'] : false;
	$mail = (isset($_POST['email'])) ? $_POST['email'] : false;

	if ($name && $mail) {

		$query = "INSERT INTO users_newsletter
				  VALUES ('$name', '$mail', 1);";

		$conexion = mysqli_connect('localhost','root','','little_events');
		$resultado = mysqli_query($conexion, $query);

		if ($resultado) {
			header("Location: index.html");
		} else if (mysqli_errno($conexion) == 1062) {
			echo 'Duplicado';
		} else {
			'Ha ocurrido un error';
		}
	} else {
		'Ha ocurrido un problema';
	}
?>