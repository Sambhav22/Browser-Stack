const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg, id){
        this.emit('message', {uid: uuid.v4(), msg, id});
    }
}

module.exports = Logger;