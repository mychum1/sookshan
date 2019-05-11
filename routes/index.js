var express = require('express');
var router = express.Router();
var connection = require('../public/javascripts/mysql/connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//글 생성
router.post('/board/:id', function(req, res, next) {
  let id = req.params.id;
  
  res.send('글 생성 번호 : ' + id);
});

//글 목록
router.get('/board', function(req, res, next) {
  connection.connection.connect();
  connection.connection.query('SELECT * FROM board', function(err, rows, fields) {
    if(!err){
      console.log('surccess');
      res.send(rows);
     }else{
      console.log(err);
      }
  });

  connection.connection.end();
  //res.send('글 목록 조회');
  
});

//글 조회
router.get('/board/:id', function(req, res, next) {
  let id = req.params.id;
  res.send('글 조회 번호 : ' + id);
});

//글 수정
router.put('/board/:id', function(req, res, next) {
  let id = req.params.id;
  res.send('글 수정 번호 : ' + id);
});

//글 삭제
router.delete('/board/:id', function(req, res, next) {
  let id = req.params.id;
  res.send('글 삭제 번호 : ' + id);
});

module.exports = router;
