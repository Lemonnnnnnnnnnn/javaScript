const fs = require('fs')
const path = require('path')

function dir() {
    fs.readdir(__dirname, (err, files) => {
        if (err) return console.error(err)
        // console.log("异步读取: " + files);
        console.log(files);
    })

    fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
        if (err) return console.error(err)
        // console.log("异步读取: " + files);
        console.log(files[0].isDirectory()); // 是否是文件夹
        console.log(files[0].isFile()); // 是否是文件
        console.log(files[0].name); // 文件（夹）名字
    })

    try {
        const data = fs.readdirSync(path.join(__dirname, 'fs.js'))
        console.log("同步读取: " + data.toString());
    } catch (e) {
        console.error(e)
    }
}


function read(){
    fs.readFile(path.join(__dirname , 'path.js') , (err,files)=>{
        // console.log(files); // buffer二进制
        console.log(files.toString());
    })
}

read()


