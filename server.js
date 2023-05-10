const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const mysql = require('mysql2');
// const mysql = require("mysql2-promise");
const path = require('path');
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const bcrypt = require("bcrypt");
const cors = require("cors");

require('dotenv').config();

// Secret key
const secretKey = process.env.SECRET_KEY;

// Payload
const payload = {
  user_id: 1,
  email: "usuario@example.com",
};

// Options
const options = {
  expiresIn: "1h",
};

// Generate token
const token = jwt.sign(payload, secretKey, options);

console.log(token);



const app = express();
const port = 4000;


// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Conexión exitosa a la base de datos');
});

// Configuración del body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/registro.js', express.static(__dirname + '/public/js/registro.js', { type: 'text/javascript' }));
app.use('/style-registro.css', express.static(__dirname + '/style-registro.css', { type: 'text/css' }));

// Configuración de la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el archivo index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para el archivo registro.html
app.get('/registro', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'registro.html'));
});

// Ruta para el archivo login.html
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Ruta para el archivo perfil de usuario.html
app.get('/profile', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/profile2', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'profile2.html'));
});

app.get('/friends', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'friends.html'));
});

// Ruta para el archivo home page.html
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/api/usuarios', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', '/'));
});



// Servir cualquier imagen en la carpeta /public/img/
app.get('/public/img/:imagen', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'img', req.params.imagen));
});

/////////////////////////////////////////////REGISTRO///////////////////////////////////////////////
app.post("/api/registrar", function (req, res) {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const ciudad = req.body.ciudad;
  const pais = req.body.pais;
  const edad = req.body.edad;
  const estudios = req.body.estudios;
  const idiomas = req.body.idiomas;
  const linkedin = req.body.linkedin;
  const hobbies = req.body.hobbies;

  const sql = `INSERT INTO registro_usuarios (nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies) VALUES ('${nombre}', '${email}', '${passwordHash}', '${ciudad}', '${pais}', '${edad}', '${estudios}', '${idiomas}', '${linkedin}', '${hobbies}')`;

  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   res.redirect("/login.html");
  // });

  // Capturar error de correo existente
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      if (err.code === "ER_DUP_ENTRY") {
        res.status(409).send("El usuario ya existe en la base de datos.");
        console.log("El usuario ya existe en la base de datos.");
      } else {
        res.status(500).send("Error al guardar los datos en la base de datos");
        console.log("Error al guardar los datos en la base de datos");
      }
    } 
    // Eliminamos el bloque else que maneja la inserción de datos correctamente.
    // else {
    //   console.log("Datos guardados correctamente en la base de datos");
    // }
  });
  // Descomentamos esta línea para redirigir al usuario a la página de inicio de sesión.
  res.redirect("/login.html");
});

///////////////////////PUBLICAR//////////////
app.post('/api/publicar', function(req, res) {
  const title = req.body.title;
  const content = req.body.content;
  const sql = `INSERT INTO publicacion (id_usuario, title, content) VALUES (1, '${title}', '${content}')`;
  db.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error al guardar los datos en la base de datos');
    } else {
      console.log('Post guardado correctamente en la base de datos');
      res.json({ title, content });
    }
  });
});



////////////////////////////////////LOGIN//////////////////////////////////////
app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  db.query(
    `SELECT * FROM registro_usuarios WHERE email = ? AND password = ?`,
    [email, password],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: "Error del servidor" });
        return;
      }
      if (results.length === 0) {
        res.status(400).send({ error: "Usuario o contraseña incorrectos" });
        return;
      }
      const id = results[0].id_usuario;
      const token = jwt.sign({ email }, process.env.SECRET_KEY);
      res.status(200).send({ id, token });
    }
  );
});

//////////////////VERIFICAR EL TOKEN////////////////////////
function verificarToken(token, secretKey) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id_usuario;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Ejemplo de cómo utilizar la función en tu código
app.get("/home", (req, res) => {
  const token = req.headers.authorization;
  const userId = verificarToken(token, process.env.SECRET_KEY);

  if (userId) {
    // El token es válido, aquí podrías realizar las acciones correspondientes
    // para devolver la información del usuario, como por ejemplo consultar
    // la base de datos con el id del usuario
    res.send(`Bienvenido usuario ${userId}`);
  } else {
    // El token es inválido, devuelve un error 401 Unauthorized
    res.status(401).send({ error: "Token inválido" });
  }
});


// app.post("/auth", (req, res) => {
//   const { email, password } = req.body;
//   db.query(
//     `SELECT * FROM registro_usuarios WHERE  email = ? AND password = ?`,
//     [email, password],
//     (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send({ error: "Error del servidor" });
//         return;
//       }
//       if (results.length === 0) {
//         res.status(400).send({ error: "Usuario o contraseña incorrectos" });
//         return;
//       }
//       const id = results[0].id_usuario;
//       res.status(200).send({ id });
//     }
//   );
// });

// manejar solicitudes POST a la ruta '/api/login'
// app.post('/api/login', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

// //   // consultar la tabla de registro_usuarios en la base de datos
//   db.query('SELECT * FROM registro_usuarios WHERE email = ? AND password = ?', [email, password], (err, results) => {
//     if (err) {
//       console.error('Error al consultar la base de datos:', err);
//       res.sendStatus(500);
//     } else {
//       if (results.length > 0) {
//         res.send({ message: 'Inicio de sesión exitoso' });
//       } else {
//         res.send({ message: 'Nombre de usuario o contraseña incorrectos' });
//       }
//     }
//   });
// });

//USUARIOS

app.get('/api/usuarios', function(req, res) {
  const sql = `SELECT * FROM registro_usuarios`;
  db.query(sql, function(err, results) {
    if (err) {
      console.log(err);
      res.status(500).send('Error al obtener los datos de la base de datos');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/usuarios/:id', function(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM registro_usuarios WHERE id_usuario = ?`;
  db.query(sql, [id], function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send('Error al consultar la base de datos');
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    }
  });
});



// Inicio del servidor
app.listen(port, function() {
  console.log(`Servidor escuchando en el puerto ${port}`);
});




