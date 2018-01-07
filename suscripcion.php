<?php
	// Valores enviados por el formulario
	$name = (isset($_POST['name'])) ? $_POST['name'] : false;
	$mail = (isset($_POST['email'])) ? $_POST['email'] : false;


	if ($name && $mail) {
		// Si los parametros han sido enviados

		// Query para inserter los datos a la base de datos
		$query = "INSERT INTO users_newsletter
				  VALUES ('$name', '$mail', 1);";

		// Establecer conexion con BD
		$conexion = mysqli_connect('localhost','n260m_21110730','le123456','n260m_21110730_little_events');
		
		// Enviar la query
		$resultado = mysqli_query($conexion, $query);

		// Verificar el resultado de la query
		if ($resultado) {
			/* Si se ha hecho el insert correctamente se muestra
			   un mensaje indicando que todo ha ido bien */
			echo 'OK';
		} else if (mysqli_errno($conexion) == 1062) {
			/* El usuario ya existe, se muestra un mensaje indicando
			   que ya está inscrito */
			echo 'Duplicado';
		} else {
			// Cualquier otro error
			echo 'Error';
		}
	} else {
		/* Si se esta intentando acceder a este archivo
		   o no se han enviado los parametros del formulario
		   se redirecciona al index */
		//header("Location: index.html");
		   echo 'asad';
	}
?>