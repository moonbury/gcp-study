const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`request received at : ${new Date()}`);
    res.end('Hello containers...');
});

console.log('Server starting...');
server.listen(8080, () => {
    console.log('Started.')
});

