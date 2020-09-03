const mongoose= require('mongoose');
const MONGODB_URI = 'mongodb://localhost/stock_node'

connection = mongoose.connect(MONGODB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true
})
    .then(db =>console.log('conectado a la base de datos'))
    .catch(err => console.log(err));

module.exports=connection;