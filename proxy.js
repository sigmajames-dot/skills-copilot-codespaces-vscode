const http = require('http');
const https = require('https');
const fs = require('fs');
const httpProxy = require('http-proxy');

// Load your SSL certificates
const options = {
  key: fs.readFileSync('path/to/your/private-key.pem', 'utf8'),
  cert: fs.readFileSync('path/to/your/certificate.pem', 'utf8')
};

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTPS server
https.createServer(options, (req, res) => {
  proxy.web(req, res, { target: 'http://your-target-server.com' });
}).listen(443, () => {
  console.log('HTTPS proxy server is running on port 443');
});node proxy.js
