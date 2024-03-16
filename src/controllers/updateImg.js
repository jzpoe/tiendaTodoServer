const Image = require("../model/modeImg");

const uploadImg = async (req, res) => {
  try {
    const { description } = req.body; // Obtener la descripción desde el cuerpo de la solicitud
    const { path } = req.file; // Obtener la ruta de la imagen subida

    console.log('Descripción de la imagen:', description);
    console.log('Ruta de la imagen:', path);

    const newImage = new Image({
      description: description,
      imageUrl: path, // Utiliza 'path' directamente para la URL de la imagen
    });
    await newImage.save();

    res.status(200).json({ message: 'Imagen subida correctamente' });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
};

module.exports = uploadImg;