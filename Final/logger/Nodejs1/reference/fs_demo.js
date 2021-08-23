const fs = require('fs');
const path = require('path');

// Create folder
// var i = 10;
// const interval =setInterval(() => {
//     if(i===15){
//         clearInterval(interval);
//     }
//     fs.mkdir(path.join(__dirname,`test`),{}, (err) => {
//         // console.log(err);
//         if(err) {
//             throw err; 
//         }
//         console.log('folder created');
//         // i=i+1;
//     // });
      
// }, 3000);


// Create and write to a file

// fs.writeFile(path.join(__dirname, 'hello1.txt'), '0', err => {
//     if(err) throw err;
//     console.log('file written to...');
//     var i =0;
//     const interval = setInterval(() => {
//         i++;
//         fs.appendFileSync(path.join(__dirname, 'hello1.txt'), `\n${i}`, err => {
//             if(err) throw err;
//             console.log('file written to...');
//         })
//         if(i==5){
//             clearInterval(interval);
//         }        
//     }, 3000);
//  })


// Read File

// fs.readFile(path.join(__dirname, 'hello1.txt'), 'utf8', (err,data)=> {
//     if (err) throw err;
//     console.log(data);
// })


// Rename File

// fs.rename(path.join(__dirname, 'hello1.txt'), path.join(__dirname, 'hello.txt'), (err)=> {
//     if (err) throw err;
//     console.log('renamed');
// })
