//N/B: These are asynchronous task and hence, they take time to complete. Asynchronous task take time to complete, but does not stop other task from occuring while it goes on.

const fs = require('fs')

//reading file  //fs.readdir( path, options, callback )

    fs.readFile('./docs/blog.txt', (err, data) => {
        if(err){
            console.log(err)
        }
        console.log(data.toString());
    });


//writting file     //N/B: if file path does not exist, node creates the new file and writes to it
// fs.writeFileSync( file, data, options )
        fs.writeFile('./docs/blog2.txt', 'hello world2', () => {
            console.log('file was written');
        } )

//directories : mkdir(), rmdir(), 
// fs.mkdir(path, mode, callback)

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    } )
}else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}


//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    });
}












