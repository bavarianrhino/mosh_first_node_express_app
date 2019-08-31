// Below is a modular wrapper function
// (function (exports, require, module, __filename, __dirname) {

const EventEmitter = require('events'); // Is a Class use uppercase
// const emitter = new EventEmitter(); // Is an instance of this class, An Object
    
// console.log(__filename);
// console.log(__dirname)
var url = 'http://logger.io/log';

class Logger extends EventEmitter{
    
    log(message) { // Function inside an instance of class is a method
        // Send by HTTP request
        console.log(message);
        // Raise an Event
        this.emit('messageLogged', { id: 1, url: 'http://'})
    }
}

// module.exports.log = log; //exports as object
// module.exports = log; //exports as function
module.exports = Logger; //exports as Class

// module.exports.log = log; // Works
// exports.log = log; // Works
// exports = log; // Does Not Work
// })
// module.exports.endPoint = url;



// npm install -g jshint
