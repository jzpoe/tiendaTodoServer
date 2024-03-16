const User = require("../model/registerDB");

  
  const autenticarUsuario =  (req, res) => {

    const {username, contrasena} = req.body
    console.log(req.body)

    res.send('respuesta post');
  };
  
  module.exports =  autenticarUsuario ;



