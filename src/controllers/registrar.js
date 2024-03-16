const User = require("../model/registerDB");

const regitrarUsuario = async (req, res) => {
  const { newuser, contrasenaNewUser } = req.body;
  console.log(req.body);

  try {
    if (!newuser || !contrasenaNewUser) {
      return res
        .status(400)
        .json({ message: "falta informacion en el formulario" });
    }

    const newUser = new User({
      newuser,
      contrasenaNewUser,
    });

    const userRepeat = await User.findOne({ newuser });
    if (userRepeat) {
      res.status(401).json({ message: "el usuario ya existe" });
      return;
    } else {
      await newUser.save();
      res.status(200).json({ message: "usuario creado con exito" });
    }
  } catch (error) {
    res.status(500).json({ error: "error al crear el usuario" });
  }
};
module.exports = regitrarUsuario;
