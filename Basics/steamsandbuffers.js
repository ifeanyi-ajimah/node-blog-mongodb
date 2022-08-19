//start using data before it finish loading


const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs3.txt', {encoding: 'utf8'});//create readstream steams and reads data
const wrireStream = fs.createWriteStream('./docs/blogs4.txt');

readStream.on('data', (chunk) => {  //on receiving of data event  
    console.log('----- NEW CHUNK -------');
    console.log(chunk.toString());
    wrireStream.write('\nNEW CHUNK\n');  //writes NEW CHINK with new line into the module.
    wrireStream.write(chunk); //writes the chunk into the writeStream module 
});

//piping  ie piping does what is written above. ie reading from a file and writting it to another file. 
readStream.pipe(wrireStream);





