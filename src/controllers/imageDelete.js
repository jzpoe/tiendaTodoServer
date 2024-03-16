const Image = require("../model/modeImg");


const imageDelete = ()=>{

    const userID = req.params.id;

    try {
        const deleteUser = Image.findByIdAndDelete(userID)
        if(!deleteUser){
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado correctamente', deletedUser });

    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
    }


}



module.exports = imageDelete