const http = require("http");
const fs = require("fs");
const files_static = require("node-static");

let files = new files_static.Server("./public"); 
 
http.createServer(function(request, response){
	console.log(request.url);

	let url = request.url.split("/");

	request.addListener('end', function(){
		files.serve(request, response);

		
	}).resume();
	/*
	switch (url[1]){
		case "player.png":
			send_player(response);

			break;
		

		default:
			send_index(response);
	}
	*/
}).listen(6969);
