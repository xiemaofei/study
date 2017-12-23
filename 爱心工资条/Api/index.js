const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./dbUtil/dbConnect');
const resSend = require('./dbUtil/resSend');
// const cors = require('cors');
const app = express();
const cookie = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors())
app.use(cookie())
app.post('/api/login', (req, res) => {
  const {
     username,
     userpwd
   } = req.body;
  // console.log(username)
  let sql = "select * from wages where adminName=? and adminPwd=?";
  connect.query(sql, [
    username,
    userpwd
  ], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      if( result.length >= 1 ) {
          res.cookie('token', 'asdgjwquyjegq87126312uh3879213jhsaidb872qe4', { expires: new Date(Date.now() + 900000), httpOnly: true });
          res.send(result[0]);
      } else {
        res.status(401).send({
          msg: '用户名密码错误'
        });
      }
    }
  })
});
app.post('/api/removeStaff', (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  const sql = "update user set status=? where id=?"
  connect.query(sql, [status, id], (error,result) => {
    if(error){
      console.log('失败')
    }else{
      resSend(req,res,{
        msg: '成功开除此员工',
        data: result
      })
    }
  })
})
app.post('/api/addStaff', (req, res) => {
  const {
    name,
    team,
    teamId,
    phone,
    type,
    startDate,
    money
  } = req.body;
  let sql = 'insert into user (name, team, teamId, phone, type, startDate, money) values (?,?,?,?,?,?,?)';
  connect.query(sql, [
    name,
    team,
    teamId,
    phone,
    type,
    startDate,
    money
  ], (error, result) => {
    if(error){
      console.log('失败')
    }else{
      resSend(req,res,result)
    }
  })  
});
app.get('/api/getStaffList', (req, res) => {
  const {
    page = 0,
    pageSize = 10,
    keyCode = '',
    status= 0,
    teamWork= 0,
    filters= {},
  }=req.query;
  let sql = "select count(*) num from user";
  connect.query(sql, [], (error,result) => {
    if(error){
       console.log('失败')
    }else{
      let nums = result[0].num;
      let whereStr = ''
       if ( filters != '{}' ) {
        
        let filtersJSON = JSON.parse(filters)
        // console.log('呵呵呵',filtersJSON)
        whereStr = 'where'
        for (let key in filtersJSON) {
          whereStr += ' '+key+'="'+filtersJSON[key] + '" and'
        }
        whereStr = whereStr.replace(/(and$)/,'')
        
      }
      sql = "select * from user ";
      sql += whereStr + "order by id desc limit ?,?";
      connect.query(sql, [
        parseInt(page*pageSize),
        parseInt(pageSize)
      ], (error,result) => {
        if(error){
          console.log('失败')
        }else{
          resSend(req,res, {
            count: nums,
            data: result
          })
        }
      })
    }
  })
});
app.get('/api/getlist', (req, res) => {
      if (req.cookies.token) {
        res.send({
          aa: 'aaaaa'
        })
      }else {
        res.status(403).send({
          msg: '请登录'
        })
      }
     
})
app.listen('8099', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('8099')
})