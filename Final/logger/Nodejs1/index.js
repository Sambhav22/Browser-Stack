const Logger = require('./logger');
const fs = require('fs');
const path= require('path');
const logger = new Logger();

logger.on('message', (data) => {
    fs.appendFileSync(path.join(__dirname, 'hello1.txt'), data.id + ' ' + data.msg + `\n`, err => {
        if(err) throw err;
        console.log('file written to...');
    })
});

setInterval(() => {
    logger.log('hello world');
}, 3000);
