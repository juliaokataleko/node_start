const http = require('http');
const fs = require('fs')
const path = require('path');

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);

    extname = path.extname(filePath);
    
    const allowedFilesTypes = ['.html', '.css', '.js'];
    const allowed = allowedFilesTypes.find(item => item == extname)

    if(!allowed) return;

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err;
            res.end(content);
        }
    )

    // if(req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if(err) throw err;
    //             res.end(content);
    //         }
    //     )
    //     // return res.end('<h1>HomePage</h1><hr><a href="/contato">Contato</a>');
    // }
    // if(req.url === '/contact') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'contact.html'),
    //         (err, content) => {
    //             if(err) throw err;
    //             res.end(content);
    //         }
    //     )
    // }
}).listen(5000, () => console.log("Server is running"));