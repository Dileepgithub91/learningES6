const fs=require('fs');


/* Reading Files:

To read the contents of a file, you can use the fs.readFile() method. It takes two arguments: 
the path to the file and a callback function that is called with an error object and the 
data read from the file.*/

fs.readFile('path/file.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log(data);
});

/* Writing Files:

To write data to a file, you can use the fs.writeFile() method. 
It takes three arguments: the path to the file, the data to be written, and a 
callback function that is called after the write operation is completed or if an error occurs. 
*/


const content='This is the content to be written.';
fs.writeFile('path/newFile.txt',content,'utf8',(err)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log('File written Successfully.');
});


/* Appending to Files:

If you want to add data to an existing file without overwriting its contents,
you can use the fs.appendFile() method.

*/

const newData = 'This data will be appended to the file.';

fs.appendFile('path/to/existingFile.txt', newData, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data appended to the file.');
});

/*Checking if a File Exists:

You can use the fs.existsSync() method to check if a file exists at a given path. */

const filePath = 'path/to/file.txt';

if (fs.existsSync(filePath)) {
  console.log('File exists.');
} else {
  console.log('File does not exist.');
}





  

