const http = require('http');

http.get('http://localhost:3000/api', (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            console.log("Response from server:");
            console.log(parsedData);
        } catch (err) {
            console.log("Invalid JSON response:", err.message);
            console.log("Raw response:", data);
        }
    });

}).on('error', (err) => {
    console.log("Error:", err.message);
});