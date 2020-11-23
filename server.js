const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

function sendResponse(response, request) {
    const src = fs.createReadStream(__dirname + request.url);

    src.on('open', () => {
        src.pipe(response);
    });

    src.on('error', () => {
        response.end('Sidan kunde inte hittas');
    });
}

//server.on('request') tar emot alla request från webbläsaren
server.on('request', (request, response) => {
    console.log('------Request------');
    console.log('Request url: ', request.url);
    console.log('dirname: ', __dirname);
    console.log('File extension: ', path.extname(request.url));
    console.log('-------End request---------');
    //Ta ut file extension från url:en som efterfrågas
    const fileExtension = path.extname(request.url);

    if (request.url === '/') {
        const src = fs.createReadStream('index.html');
        src.pipe(response);
    } else if(fileExtension === '.svg') {
        //Sätt rätt Content-Type som berättar vad för innehåll som kommer i response
        //För att webbläsaren ska veta hur den ska hantera det
        response.setHeader('Content-Type', 'image/svg+xml');
        sendResponse(response, request);
    } else if(fileExtension === '.mp3') {
        //Ta fram storleken på ljudfilen i bytes
        const stats = fs.statSync(__dirname + request.url);
        const fileSize = stats.size;

        response.setHeader('Content-Type', 'audio/mpeg');
        response.setHeader('Content-Length', fileSize);
        response.setHeader('Accept-Ranges', 'bytes');

        sendResponse(response, request);
    } else {
        sendResponse(response, request);
    }
});

server.listen(9000);