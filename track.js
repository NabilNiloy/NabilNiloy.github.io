const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const clientIp = request.connection.remoteAddress;
    console.log(`User IP Adress ${clientIp}`)
    response.send('Hello Fateha, I know where you are')
});

app.listen(3000, () => {
    console.log('Server listening to port 9000')
});