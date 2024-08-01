const http = require('http');

const PORT = 3000;
const TITLE = process.env.TITLE || 'Default Title by denis';
const MESSAGE = process.env.MESSAGE || 'Default Message';

const requestHandler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Title: ${TITLE}\nMessage: ${MESSAGE}`);
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
