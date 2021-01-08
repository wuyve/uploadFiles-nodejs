const express = require('express');
const multer = require('multer');
const app = express();

// 设置跨域
// 允许跨域
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  // res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  // 方便返回json
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);  // 让options尝试请求快速结束
  } else {
    next();
  }
});

const upload = multer({
  // 在哪里存储文件
  // diskStorage 控制文件的存储
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/');
    },
    filename: function (req, file, cb) {
      let changeName = file.originalname;
      cb(null, changeName);
    }
  })
});

// 单图上传
app.post('/uploadSingle', upload.single('singleFile'), function (req, res, next) {
  const file = req.file;
  console.log('文件类型: ', file.mimetype);
  console.log('原始文件名', file.originalname);
  console.log('文件大小', file.size);
  console.log('文件保存路径', file.path);
  res.send({
    code: '0',
    data: {
      file_type: file.mimetype,
      origin_name: file.originalname,
      file_size: file.size,
      file_path: file.path
    },
    message: '文件上传成功'
  });
});

// 多图上传
app.post('/uploadMulti', upload.array('multerFile'), function (req, res, next) {
  let fileList = [];
  req.files.map(ele => fileList.push({ originalname: ele.originalname }));
  res.send({
    code: '0',
    message: fileList.length + '张图片上传成功',
    data: fileList
  });
});

// 下载文件
// 设置文件下载路径
app.use(express.static('upload'));
// 单个文件下载
app.get('/upload/*', function (req, res) {
  res.download(__dirname + "/" + decodeURIComponent(req.url));
});

app.listen(3000);
