const express = require('express');
const router = express.Router();
const connection = require('../public/javascripts/mysql/connection');


//글 생성
router.post('/', function(req, res, next) {
    let id = req.params.id;
    //바로 못넘겨주나? 객체로?
    let title = req.body.title;
    //req.body.c
    let content = req.body.content;
    console.log(req.body);

    connection.connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }

    connection.connection.query(`INSERT INTO board (title, content) VALUES ('${title}','${content}')`, function(err, rows, fields) {
        if (err) {

            console.error(err);

            connection.connection.rollback(function () {

               console.error('rollback error');

                throw err;

             });

         }// if err

        connection.connection.commit(function (err) {

           if (err) {

               console.error(err);

               connection.connection.rollback(function () {

                      console.error('rollback error');

                      throw err;

                   });

            }// if err

           res.send(200, 'success');
            });// commit
        });
    });
    
   // res.send('글 생성 번호 : ' + id);
  });
  
  //글 목록
  router.get('/', function(req, res, next) {
    
    connection.connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }
    connection.connection.query('SELECT * FROM board', function(err, rows, fields) {
        if (err) {

            console.error(err);

            connections.connection.rollback(function () {

               console.error('rollback error');

                throw err;

             });

         }// if err

        connection.connection.commit(function (err) {

           if (err) {

               console.error(err);

               connection.connection.rollback(function () {

                      console.error('rollback error');

                      throw err;

                   });

            }// if err

           res.send(rows);
            });// commit
        });
    });
    //connection.connection.end();
    //res.send('글 목록 조회');
    
  });
  
  //글 조회
  router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    connection.connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }
    connection.connection.query(`SELECT * FROM board WHERE id='${id}'`  , function(err, rows, fields) {
      if(!err){
        console.log('surccess' + id);
        console.log(rows);
        res.send(rows);
       }else{
        console.log(err);
        }
        });
  
    });
    //res.send('글 목록 조회');

   // res.send('글 조회 번호 : ' + id);
  });
  
  //글 수정
  router.put('/:id', function(req, res, next) {
    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    connection.connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }
    connection.connection.query('UPDATE board SET title="' + title + '" ,' + 'content="' + content + '" where id=' + id , function(err, rows, fields) {
      if(!err){
        console.log('surccess' + id);
        console.log(rows);
        res.send(req.body);
       }else{
        console.log(err);
        }
    });
});
  });
  
  //글 삭제
  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    connection.connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }
    connection.connection.query('DELETE FROM board where id=' + id , function(err, rows, fields) {
      if(!err){
        console.log('surccess' + id);
       // console.log(rows);
        res.send("delete success " + id);
       }else{
        console.log(err);
        }
    });
    });
  });

  module.exports = router;