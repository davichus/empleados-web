const {Router} = require('express');
const empleadosController = 
            require('../controllers/empleados.controller');
const router = Router();

router.get('/', empleadosController.getEmpleados);
router.post('/', empleadosController.createEmpleado);
router.get('/:id', empleadosController.getEmpleado);
router.delete('/:id', empleadosController.deleteEmpleado);
router.put('/:id', empleadosController.updateEmpleado);

module.exports = router;