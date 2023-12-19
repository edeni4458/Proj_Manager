const mongoose = require('mongoose')

const database = "productManDatabase"
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log(`connection established to Outer Haven ${database}`))
.catch(error => console.log('There is a problem with Outer Haven'))