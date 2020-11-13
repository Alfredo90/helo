require('dotenv').config();

const express = require('express');
const massive = require('massive');
// const session = require('express-session');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();



app.use(express.json());



massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Hello World')
}).catch( err => console.log(err));





//AUTH ENDPOINTS///
app.post('/auth/register');


app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))



















// app.post('/api/auth/login');
// app.post('/api/post/:userid');
// app.get('/api/posts/:userid');
// app.get('/api/post/:postid');







