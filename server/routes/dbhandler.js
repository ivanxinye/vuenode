var mongo=require("mongodb");
// var MongoClient = mongo.MongoClient;

var User = require("./user.js");
var assert = require('assert');
// var mongoose = require('./db.js')
// var url = require('url');
// var host="localhost";
// var port="27017";
// var Urls = 'mongodb://localhost:27017/nodevue';
// classweb  ===> 自动创建一个


//add一条数据 
var add = function(selector,fn){
  const user = new User(selector)
  user.save(function(err,result){
    try{
        assert.equal(err,null)
        }catch(e){
      console.log(e);
      result = [];
    };
    
    fn(result);
  });
}
// //delete
// var deletes = function(db,collections,selector,fn){
//   var collection = db.collection(collections);
//   collection.find().toArray(function(err,result){
//       console.log(result)
//   })
//   collection.deleteOne(selector,function(err,result){
//     console.log(result.result)
//     try{
//         assert.equal(err,null);
//         assert.notStrictEqual(0,result.result.n);
//         }catch(e){
//       console.log(e);
//       result.result = "";
//     };
    
//     fn( result.result ? [result.result] : []); //如果没报错且返回数据不是0，那么表示操作成功。
//     db.close;
//   });
// };
//find
var find = function(selector,fn){
  //collections="hashtable";
  User.find(selector, function(err,result){
      //console.log(docs);
      try{
        assert.equal(err,null);
      }catch(e){
        console.log(e);
        result = [];
      }
      console.log(result)
      fn(result);
      // db.close();
    });

}

//page
var page = function(selector,fn){
  
  
  var count = 0;
  User.count({},function(err1,count1){
      try{
        assert.equal(err1,null);
      }catch(e){
        console.log(e);
      }
      console.log(count1)
      count = count1;
  });
    User.find(selector[0],selector[1],selector[2],function(err,result){
      try{
        assert.equal(err,null);
      }catch(e){
        console.log(e);
        result = [];
      }
      console.log(result)
      fn(result,count); //回掉函数可接收两个参数，查询的数据 和 总数据条数
    });
    

}

// //update
// var updates = function(db,collections,selector,fn){
//   var collection = db.collection(collections);
  
//   collection.updateOne(selector[0],selector[1],function(err,result){
//       try{
//         assert.equal(err,null);
//         assert.notStrictEqual(0,result.result.n);
//         }catch(e){
//       console.log(e);
//       result.result = "";
//     };
    
//     fn( result.result ? [result.result] : []); //如果没报错且返回数据不是0，那么表示操作成功。
//     db.close();
//   });

// }
var methodType = {
    // 项目所需
  login:find,
  //   type ---> 不放在服务器上面
  //  放入到服务器
  //  请求---> 根据传入进来的请求 数据库操作
  //  req.query    req.body
  show:find, //后台部分
  add:add,
  // update:updates,
  // delete:deletes,
  // updatePwd:updates,
  // //portal部分
  // showCourse:find,
  // register:add,
  page:page //分页
};
//主逻辑    服务器  ， 请求    --》 
// req.route.path ==》 防止前端的请求 直接操作你的数据库
// module.exports = function(req,res,collections,selector,fn){
//   console.log('ready to connect!')
//   MongoClient.connect(Urls, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
//     // 根据 请求的地址来确定是什么操作  （为了安全，避免前端直接通过请求url操作数据库）
//     methodType[req.route.path.substr(1)](db,collections,selector,fn);
    
//     db.close();
//   });

// };
module.exports = methodType;
// function(req,res,collections,selector,fn){

//   // const db = mongoose.connection;
//   // db.on('error', console.error.bind(console, 'connection error:'))
//   // db.once('open', function(){
//     var user = new User({
//       name: "admin",
//       phone: "13388868886",
//       password: "4QrcOUm6Wau+VuBX8g+IPg=="
//     })
//     user.save(function(err,resp){
//       if (err) {
//         console.log("Error:" + err);
//       }
//       else {
//           console.log("Res:" + resp);
//           methodType[req.route.path.substr(1)](selector,fn);
//       }
//     })
//     console.log("Connected correctly to server");
    
//   // })
//   // MongoClient.connect(Urls, function(err, db) {
//   //   assert.equal(null, err);
//   //   console.log("Connected correctly to server");
//   //   // 根据 请求的地址来确定是什么操作  （为了安全，避免前端直接通过请求url操作数据库）
//   //   methodType[req.route.path.substr(1)](db,collections,selector,fn);
    
//   //   db.close();
//   // });

// };
