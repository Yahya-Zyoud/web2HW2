
const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {

    
    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('index.html', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end("Error loading page");
                return;
            }

            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(data);
        });
    }

    
    else if (req.url === '/api' && req.method === 'GET') {

        const student = {
            name: "Yahya",
            studentId: "12400927"
        };

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(student));
    }

    
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});