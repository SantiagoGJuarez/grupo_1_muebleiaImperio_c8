let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* Ruta para Home*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/views/index.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/views/login.html')); 
})

app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/views/password.html')); 
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/carrito.html'))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productDetail.html'))
})

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));