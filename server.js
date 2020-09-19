const http = require('http');
const port = 3333;
http.createServer( (req, res)=>{
	console.log('server running on '+port);
	
	//console.log(req);

	res.writeHead(200, {'Content-type':'text/plain'});
	res.write('Hello node server\n');

	res.end();
}).listen(port);
console.log('server is running')
