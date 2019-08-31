
// function sayHello(name) {
    // console.log("Hello " + name)
// }
// sayHello('Ryan')
// console.log(" ryan"); //global object

//global objects 
// setTimeout(); // - used to call a function after a delay
// clearTimeout(); // - 

// setInterval() // - used to call a function by a set interval
// clearInterval() // - used to clear this interval


// window.console.log() === console.log()

// var message = "Hey";
// console.log(global.message)
// console.log(global.message) // undefined
// global.console.log

// var sayHello = function() {

// }
// window.sayHello();

// console.log(module)


// require('./logger.js')
// var logger = require('./logger'); //Works but better practice to use below

// const log = require('./logger'); //logs by passing function
// log('message');

// const logger = require('./logger'); //logs by passing object
// logger.log('message');

// const path = require('path'); //Object containing methods
// var pathObj = path.parse(__filename)

// console.log(pathObj)

// const os = require('os');
// const fs = require('fs');
// const EventEmitter = require('events'); // Is a Class use uppercase
// const emitter = new EventEmitter(); // Is an instance of this class, An Object
// const Logger = require('./logger');
// const logger = new Logger();

//Register a listener
// emitter.on('messageLogged', function(arg){ // e, eventArg
// logger.on('messageLogged', (arg) => { // e, eventArg
    // console.log("Listener is called", arg)
// });

// logger.log('message')


 //Make a noise, produce - signalling that an event has happened
// emitter.emit('messageLogged', { id: 1, url: 'http://'})

//Raise: logging (data: message)

// var totalMem =  os.totalmem();
// var freeMem = os.freemem();

// console.log('Total Memory: ' + totalMem);
// console.log('Total Memory: ' + freeMem);

// ES6 Way
// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);

// const filesSync = fs.readdirSync('./')

// fs.readdir('./', function(err, files) {
//     if(err) {
//         console.log("There's and error!", err);
//     } else {
//         console.log("Result", files);
//     }
// });

// console.log(filesSync);
// console.log(filesAsync);




const http = require('http')

// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log("New connection...")
// })
var courseArr = [1, 2, 3, 4];
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Hello World!");
        res.end();
    }
    if (req.url === '/api/courses') {
        // res.write(JSON.stringify([1, 2, 3, 4]));
        res.write(JSON.stringify(courseArr));
		res.end();
	}
});

server.listen(3000);

console.log('Listening on port 3000...');

