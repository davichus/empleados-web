const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/empleados_web')
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

