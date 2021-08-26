require('dotenv').config();
const app = require('./src/server/server');
require('./src/database/database');

app.listen(app.get('port'), () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`)
})
