const express = require('express')
const app = express()
const port = 3000
const diff = require('deep-diff')

const Logger = require('./logger');
const fs = require('fs');
const path= require('path');
const logger = new Logger();

let cars=null;
logger.on('message', (data) => {
    // let arr = [];
    // fs.readFile('hello1.txt', 'utf8', function(err, data){
    //     let a = data.split("&");
    //     for(var i=0;i<a.length;i++){
    //         arr.push(JSON.parse(a[i]));
    //     }
    // });

    cars = {
        id: data.id,
        message: data.msg
    };
    fs.appendFileSync(path.join(__dirname, 'hello1.txt'),',' + JSON.stringify(cars) + `\n`, err => {
        if(err) throw err;  
    })
    console.log('file written to...');
});

setInterval(() => {
    logger.log('hello world');
 }, 3000);

//  const filepath = './hello1'
//  const getCurrent = () => JSON.parse(fs.readFileSync(filepath, {
//    encoding: 'utf8'
//  }))

//  let currObj = getCurrent();
 
 fs.watch('hello1.txt', { encoding: 'buffer' }, (eventType, filename) => {
   if (eventType !== 'change') return
 
    

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })