const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Verifique as credenciais do usuário aqui e redirecione para a página inicial se elas forem válidas
    res.redirect('/');
});

app.listen(3000, () => console.log('Server started on port 3000'));
