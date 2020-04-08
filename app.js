var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var queryDogFood = require("./dao/getDogFood");
var queryUser = require("./dao/queryUser");
var shopping = require("./dao/shopping");


// console.log(dbutil)
var app = express();

//bodyParser中间件
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'src')));
//首页
app.get("/",function (req,res) {
    res.sendFile(path.resolve(__dirname,'./src/index.html'))
})
//购物页
app.get("/buy",function (req,res) {
    res.sendFile(path.resolve(__dirname,'./src/buy.html'))
})
app.get("/api/dogFood",function (req,res) {
    queryDogFood.queryDogFoodAll(function (data){
        // console.log(data)
        res.send(data);
    })
})
    //请求进口狗粮数据接口
app.get("/api/dogFood/imported",function (req,res) {
    queryDogFood.findImported(function (data){
        res.send(data);
    })
})
    //请求国产狗粮数据接口
app.get("/api/dogFood/domestic",function (req,res) {
    queryDogFood.findDomestic(function (data){
        res.send(data);
    })
})
    //请求狗狗零食热门数据接口
app.get("/api/dogSnacksAll",function (req,res) {
    queryDogFood.queryDogSnacks(function (data){
        // console.log(data)
        res.send(data);
    })
})
    // 请求磨牙洁齿数据接口
app.get("/api/dogTooth",function (req,res) {
    queryDogFood.dogTooth(function (data){
        res.send(data);
    })
})
    // 请求肉制零食数据接口
app.get("/api/dogSnacks",function (req,res) {
    queryDogFood.dogSnacks(function (data){
        res.send(data);
    })
})
    // 请求狗狗医疗热门数据接口
app.get("/api/queryDogCareAll",function (req,res) {
    queryDogFood.queryDogCareAll(function (data){
        res.send(data);
        // console.log(data)
    })
})
    // 请求体内驱虫数据接口
app.get("/api/insectRepellent",function (req,res) {
    queryDogFood.insectRepellent(function (data){
        res.send(data);
    })
})
    // 请求皮肤护理数据接口
app.get("/api/dogNursing",function (req,res) {
    queryDogFood.dogNursing(function (data){
        // console.log(data)
        res.send(data);
    })
})
    // 请求狗狗用品热门数据接口
app.get("/api/queryDogProductsAll",function (req,res) {
    queryDogFood.queryDogProductsAll(function (data){
        // console.log(data)
        res.send(data);
    })
})
    // 请求狗狗餐具数据接口
app.get("/api/dogTableware",function (req,res) {
    queryDogFood.dogTableware(function (data){
        res.send(data);
    })
})
    // 请求狗狗住所数据接口
app.get("/api/dogResidence",function (req,res) {
    queryDogFood.dogResidence(function (data){
        res.send(data);
    })
})
app.post("/api/showTabData",urlencodedParser,function (req,res) {
    // console.log(req.body)
    queryDogFood.queryTabId(function (data){
        // console.log(data)
        res.send(data);
    },req.body.tabId)
})


    //注册用户接口
app.post("/api/post/signUp",urlencodedParser,function (req,res) {
    queryUser.insetUser(function (data) {
        if(data !== null && data !== undefined){
            res.send({code:1,user:req.body.user})
        }else{
            res.send({code:2})
        }
    },req.body.user,req.body.email,req.body.phone,req.body.psw);
})
    //对比登录用户接口
app.post("/api/login",urlencodedParser,function (req,res) {
    queryUser.queryUser(req.body.phone,function (data) {
        if(data[0].password == req.body.psw){
            res.send({code:1,user:data[0].user,id:data[0].id}) //密码正确
        }else{
            res.send({code:2}) //密码错误
        }
    })
})

//加入购物车
// postShopping
app.post("/api/post/shopping",urlencodedParser,function (req,res) {
    // console.log(req.body)
    shopping.postShopping(function () {
        console.log(2)
    },req.body.tabId,req.body.userId,req.body.number)
})

// shopping.shoppingCarNum(function (data) {
//     console.log(data)
// },"1")
app.post("/api/get/shopping",urlencodedParser,function (req,res) {
    // console.log(req.body.userId)
    shopping.shoppingCarNum(function (data) {
        res.send(data)
    },req.body.userId)
})


app.post("/api/get/addDomShoppingCar",urlencodedParser,function (req,res) {
    shopping.addDomShoopingCar(function (data) {
        res.send(data)
    },req.body.tabId)
})


app.post("/api/search/key",urlencodedParser,function(req,res) {
    // console.log(req.body.key)
    queryDogFood.searchKey(function (data) {
        res.send(data)
    },req.body.key)
})
app.listen(40002,function () {
    console.log("server is run port is " + 40002);
})