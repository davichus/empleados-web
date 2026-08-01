const {Schema, model}= require('mongoose');

const EmpleadosSchema = new Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        profesion: {type: String, required: true},
        salario: {type: Number, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Empleado', EmpleadosSchema);