// require('dontenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const Busboy = require('busboy');
const fs = require('fs');
const os = require('os');

const app = express();
const port = 4000;

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'andrea',
  password: '12345',
  database: 'redrocket'
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

// Ruta para el archivo home page.html
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Servir cualquier imagen en la carpeta /public/img/
app.get('/public/img/:imagen', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'img', req.params.imagen));
});

app.post('/api/registrar', function(req, res) {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const ciudad = req.body.ciudad;
  const pais = req.body.pais;
  const edad = req.body.edad;
  const estudios = req.body.estudios;
  const idiomas = req.body.idiomas;
  const linkedin = req.body.linkedin;
  const hobbies = req.body.hobbies;

  const sql = `INSERT INTO registro_usuarios (nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies) VALUES ('${nombre}', '${email}', '${password}', '${ciudad}', '${pais}', '${edad}', '${estudios}', '${idiomas}', '${linkedin}', '${hobbies}')`;

  // Capturar error de correo existente
  db.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).send('El usuario ya existe en la base de datos.');
      } else {
        res.status(500).send('Error al guardar los datos en la base de datos');
      }
    } else {
      console.log('Datos guardados correctamente en la base de datos');
      res.json({ nombre, email, password, ciudad, pais, edad, estudios, idiomas, linkedin, hobbies });
    }
  });
});



// Inicio del servidor
app.listen(port, function() {
  console.log(`Servidor escuchando en el puerto ${port}`);
});



