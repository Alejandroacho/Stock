const app = require('./server')
require('./db')
const PORT = 4000

app.listen(PORT, function() {
    console.log('SERVER listen on port',app.get('PORT'))
})
