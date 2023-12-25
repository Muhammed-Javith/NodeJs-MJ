var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        // var form = new formidable.IncomingForm();
        // form.parse(req, function (err, fields, files) {
        //   res.write('File uploaded');
        //   res.end();
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error parsing the file upload');
                return res.end();
            }

            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/DELL/' + files.filetoupload.originalFilename;

            // Check if oldpath is defined
            if (!oldpath) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write('File path is undefined.');
                return res.end();
            }

            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Error moving the file');
                    return res.end();
                }
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(3000);
