const empleadosModel = require('../models/empleados.model');
const { StatusCodes } = require('http-status-codes');

const empleadosController = {};

// Obtener todos los empleados
empleadosController.getEmpleados = async (req, res) => {
    try {
        const empleados = await empleadosModel.find();

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Empleados obtenidos correctamente.",
            data: empleados
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// Crear empleado
empleadosController.createEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = new empleadosModel(req.body);
        await nuevoEmpleado.save();

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Empleado creado correctamente.",
            data: nuevoEmpleado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// Obtener un empleado por ID
empleadosController.getEmpleado = async (req, res) => {
    try {
        const empleado = await empleadosModel.findById(req.params.id);

        if (!empleado) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Empleado no encontrado.",
                data: null
            });
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Empleado obtenido correctamente.",
            data: empleado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// Eliminar empleado
empleadosController.deleteEmpleado = async (req, res) => {
    try {
        const empleado = await empleadosModel.findByIdAndDelete(req.params.id);

        if (!empleado) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Empleado no encontrado.",
                data: null
            });
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Empleado eliminado correctamente.",
            data: empleado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// Actualizar empleado
empleadosController.updateEmpleado = async (req, res) => {
    try {
        const empleado = await empleadosModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!empleado) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Empleado no encontrado.",
                data: null
            });
        }

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Empleado actualizado correctamente.",
            data: empleado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

module.exports = empleadosController;