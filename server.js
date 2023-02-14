// http module ---> node js in the server handle
// http request and response module handle 
const http = require('http');
// function datacontrol(req,resp) this is a normal function

const data = require('./data');
http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-type': 'application\json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);


// http.createServer(datacontrol).listen(4200); // creat function server

// colors uese
// const color = require('colors');
// console.log("hello".green.bgBlue)

// Node js is a single theared.
